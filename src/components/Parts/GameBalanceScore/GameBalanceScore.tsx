import React, {useEffect, useState} from "react";

import {
    SliderValue,
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./GameBalanceScore.scss";

const RangeMarkers: React.FC<{"value": number}> = ({value}) => {
    const generateOptions = () => {
        const options = [];
        for (let i = -50; i <= 50; i += 2) {
            const limit = 13;
            const centerL = 7;
            let gap = 0;
            const overLimitValue = value < -50 ? -50 : value > 50 ? 50 : value;
            const diff = Math.abs(overLimitValue - i);

            if (diff <= limit) {
                gap = (1 - (diff - centerL) / (limit - centerL)) * 12;
                if (diff <= centerL) gap = 12;
            }
            options.push(
                <option
                    className={`one-markers ${i % 10 === 0 ? "decimal" : ""}`}
                    key={i}
                    style={{"marginTop": `${gap}px`}}
                    value={i}
                />
            );
        }
        return options;
    };

    return (
        <>
            <datalist
                className="range-markers"
                id="markers"
            >
                {generateOptions()}
            </datalist>
            <div className="extreme-limit">
                <span
                    className="min numbers-font"
                    style={{"marginTop": `${value < -36 ? 12 : 0}px`}}
                >
                    -50
                </span>
                <span
                    className="max numbers-font"
                    style={{"marginTop": `${value > 36 ? 12 : 0}px`}}
                >
                    50
                </span>
            </div>
        </>
    );
};

export const GameBalanceScore: React.FC = () => {
    const {balanceScore} = useAppSelector(werewolfState.GameData);

    const [
        valueDisplay,
        setValueDisplay
    ] = useState(0);

    useEffect(() => {
        const oldValue = valueDisplay;
        const diffBalance = Math.abs(balanceScore - oldValue);
        const duration = 250;
        const startTime = Date.now();

        if (diffBalance) {
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(1, elapsed / duration);
                const newValue = Math.round(
                    oldValue + (balanceScore - oldValue) * progress
                );
                setValueDisplay(newValue);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [balanceScore]);

    const wolfH = balanceScore > -6 ? "hidden" : "";
    const equiH = balanceScore > 6 || balanceScore < -6 ? "hidden" : "";
    const villH = balanceScore < 6 ? "hidden" : "";
    return (
        <div className="balancing-infos">
            <div className="top-label">
                <p
                    className={`
                    wolf-advantage ${wolfH}
                    `}
                >
                    Avantage des Loups
                </p>
                <p
                    className={`
                    equilibrate ${equiH}`}
                >
                    Camps équilibrés
                </p>
                <p
                    className={`
                    village-advantage ${villH}
                    `}
                >
                    Avantage du Village
                </p>
            </div>
            <div className="balancing-range">
                <input
                    readOnly
                    className="balancing-cursor"
                    list="markers"
                    max={50}
                    min={-50}
                    step={1}
                    type="range"
                    value={balanceScore}
                />
                <SliderValue
                    displayValue={valueDisplay}
                    trueValue={balanceScore}
                />
                <RangeMarkers value={balanceScore} />
            </div>
        </div>
    );
};
