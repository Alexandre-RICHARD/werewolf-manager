import React, {useEffect, useState} from "react";

import {
    rangeMarkersFinder,
    roles,
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./GameBalanceScore.scss";

export const GameBalanceScore: React.FC = () => {
    const {composition} = useAppSelector(werewolfState.GameData);

    const [
        gameBalancing,
        setGameBalancing
    ] = useState(0);

    useEffect(() => {
        setGameBalancing(
            composition.reduce((sum, role) => {
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
            }, 0)
        );
    }, [composition]);

    const generateOptions = (min: number, max: number) => {
        const markersValue = rangeMarkersFinder(min, max, 4, 8);

        const options = [];
        for (let i = 0; i < markersValue.length; i++) {
            options.push(
                <option
                    className="one-markers"
                    key={markersValue[i]}
                    value={markersValue[i]}
                >
                    {markersValue[i]}
                </option>
            );
        }
        return options;
    };

    const limit = Math.ceil(Math.abs(gameBalancing + 7.5) / 10) * 10;

    return (
        <div className="balancing-infos">
            <div className="top-label">
                <p className="wolf-advantage">
                    Avantages des Loups
                </p>
                <p className="equilibrate">
                    Camps équilibrés
                </p>
                <p className="village-advantage">
                    Avantage du Village
                </p>
            </div>
            <div className="balancing-range">
                <input
                    readOnly
                    className="balancing-cursor"
                    list="markers"
                    max={limit * 1}
                    min={limit * -1}
                    step={1}
                    type="range"
                    value={gameBalancing}
                />
                <datalist
                    className="range-markers"
                    id="markers"
                >
                    {generateOptions(limit * -1, limit * 1)}
                </datalist>
            </div>
        </div>
    );
};
