import React, {useEffect} from "react";

import {MinusIcon, PlusIcon} from "@/IndexImporter";
import "./PlayerNumber.scss";

interface PlayerNumberProps {
    "changePlayerNumber": (newValue: number) => void;
    "max": number;
    "min": number;
    "value": number;
}

export const PlayerNumber: React.FC<PlayerNumberProps> = ({
    changePlayerNumber,
    max,
    min,
    value,
}) => {
    const changeLineWidth = () => {
        const lineBefore = document.querySelector(
            ".line-before"
        ) as HTMLElement;
        const lineAfter = document.querySelector(".line-after") as HTMLElement;

        const percentProgress = (value - min) / (max - min);

        if (lineBefore && lineAfter) {
            lineBefore.style.width = `
            calc((100% - 21px) * ${percentProgress})
            `;
            lineAfter.style.width = `
            calc((100% - 21px) * ${1 - percentProgress})
            `;
        }
    };

    useEffect(() => {
        changeLineWidth();
    });

    const sliderChangePlayerNumber = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        let inputValue = parseInt(event.target.value, 10);
        if (isNaN(inputValue) || inputValue < min || inputValue > max) {
            inputValue = min;
        }
        changePlayerNumber(inputValue);
    };

    const buttonChangePlayerNumber = (param: string) => {
        const newValue = param === "pos" ? value + 1 : value - 1;
        changePlayerNumber(newValue);
    };

    return (
        <div className="player-number-selector-box">
            <div className="player-number-box">
                <button
                    className="inc-dec-button"
                    type="button"
                    onClick={() => buttonChangePlayerNumber("neg")}
                >
                    <MinusIcon />
                </button>
                <p className="player-count">
                    <span>
                        {value}
                    </span>
                    {" "}
                    joueurs
                </p>
                <button
                    className="inc-dec-button"
                    type="button"
                    onClick={() => buttonChangePlayerNumber("pos")}
                >
                    <PlusIcon />
                </button>
            </div>
            <div className="selector-line">
                <div className="diamond-before" />
                <div className="line-before" />
                <input
                    className="player-number-selector"
                    max={max}
                    min={min}
                    type="range"
                    value={value}
                    onChange={sliderChangePlayerNumber}
                />
                <div className="line-after" />
                <div className="diamond-after" />
            </div>
        </div>
    );
};
