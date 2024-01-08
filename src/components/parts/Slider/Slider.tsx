import React from "react";

import "./Slider.scss";

interface SliderProps {
    changePlayerNumber: (newValue: number) => void;
    max: number;
    min: number;
    name: string;
    value: number;
}

const Slider: React.FC<SliderProps> = ({
    changePlayerNumber,
    max,
    min,
    name,
    value,
}) => {

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
        const newValue = param === "pos"
            ? value + 1
            : value - 1;
        changePlayerNumber(newValue);
    };

    return (
        <div className="number-selector-container">
            <p className="player-number-value">
                {`${value} ${name}`}
            </p>
            <button
                className="inc-dec-button"
                type="button"
                onClick={() => buttonChangePlayerNumber("neg")}
            >
                -
            </button>
            <input
                className="player-number-selector"
                max={max}
                min={min}
                type="range"
                value={value}
                onChange={sliderChangePlayerNumber}
            />
            <button
                className="inc-dec-button"
                type="button"
                onClick={() => buttonChangePlayerNumber("pos")}
            >
                +
            </button>
        </div>
    );
};

export default Slider;
