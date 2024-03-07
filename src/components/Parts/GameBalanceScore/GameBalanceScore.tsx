/* eslint-disable max-lines-per-function */
import React, {useEffect, useState} from "react";

import {
    roles, useAppSelector, werewolfState
} from "@/IndexImporter";
import "./GameBalanceScore.scss";

const RangeMarkers: React.FC = () => {
    const generateOptions = () => {
        const options = [];
        for (let i = -50; i <= 50; i += 10) {
            options.push(
                <option
                    className="one-markers"
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
                <span>
                    -50
                </span>
                <span>
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

        if (diffBalance) {
            let step = 0;
            const interval = setInterval(() => {
                if (!step) {
                    setTimeout(() => {
                        clearInterval(interval);
                    }, duration);
                }
                if (step !== diffBalance) {
                    const direction = oldValue < gameBalance ? 1 : -1;
                    setValueDisplay((old) => old += direction);
                    step += 1;
                }
            }, duration / diffBalance);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameBalance]);

    const wolfO = gameBalance <= -5 ? (gameBalance - -5) / 8 : 0;
    const equalO =
        Math.abs(gameBalance) >= 5 && Math.abs(gameBalance) <= 15
            ? (15 - Math.abs(gameBalance)) / 10
            : Math.abs(gameBalance) < 5
                ? 1
                : 0;
    const villageO = gameBalance >= 5 ? (gameBalance - 5) / 8 : 0;

    const valuePosition =
        (gameBalance < -50 ? 0 : gameBalance > 50 ? 100 : gameBalance + 50) /
        100;

    return (
        <div className="balancing-infos">
            <div className="top-label">
                <p
                    className="wolf-advantage"
                    style={{"opacity": Math.abs(wolfO)}}
                >
                    Avantages des Loups
                </p>
                <p
                    className="equilibrate"
                    style={{"opacity": Math.abs(equalO)}}
                >
                    Camps équilibrés
                </p>
                <p
                    className="village-advantage"
                    style={{"opacity": Math.abs(villageO)}}
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
                <div
                    className="slider-value"
                    style={{
                        "marginLeft": `
                    calc((100% - 45px) * ${valuePosition})
                    `,
                    }}
                >
                    {valueDisplay}
                </div>
                <RangeMarkers />
            </div>
        </div>
    );
};
