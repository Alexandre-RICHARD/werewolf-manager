import React, {useEffect, useState} from "react";

import {
    roles,
    SliderValue,
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./GameBalanceScore.scss";

const RangeMarkers: React.FC = () => {
    const generateOptions = () => {
        const options = [];
        for (let i = -50; i <= 50; i += 2) {
            options.push(
                <option
                    className={`one-markers ${i % 10 === 0 ? "decimal" : ""}`}
                    key={i}
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
                <span className="numbers-font">
                    -50
                </span>
                <span className="numbers-font">
                    50
                </span>
            </div>
        </>
    );
};

export const GameBalanceScore: React.FC = () => {
    const {composition} = useAppSelector(werewolfState.GameData);

    const [
        valueDisplay,
        setValueDisplay
    ] = useState(0);

    const gameBalance = composition.reduce((sum, role) => {
        let balanceScore = 0;
        if (role.quantity > 0) {
            const foundedRole = roles.find((fi) => {
                return fi.variableName === role.roleName;
            });
            if (foundedRole) {
                balanceScore = role.quantity * foundedRole.balancing;
            }
        }
        return sum + balanceScore;
    }, 0);

    useEffect(() => {
        const oldValue = valueDisplay;
        const diffBalance = Math.abs(gameBalance - oldValue);
        const duration = 250;
        const startTime = Date.now();

        if (diffBalance) {
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(1, elapsed / duration);
                const newValue = Math.round(
                    oldValue + (gameBalance - oldValue) * progress
                );
                setValueDisplay(newValue);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameBalance]);

    const wolfH = gameBalance > -6 ? "hidden" : "";
    const equiH = gameBalance > 6 || gameBalance < -6 ? "hidden" : "";
    const villH = gameBalance < 6 ? "hidden" : "";
    return (
        <div className="balancing-infos">
            <div className="top-label">
                <p
                    className={`
                    wolf-advantage ${wolfH}
                    `}
                >
                    Avantages des Loups
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
                    value={gameBalance}
                />
                <SliderValue
                    displayValue={valueDisplay}
                    trueValue={gameBalance}
                />
                <RangeMarkers />
            </div>
        </div>
    );
};
