import React from "react";
import {NavLink} from "react-router-dom";

import {
    HomeIcon,
    Slider,
    useAppDispatch,
    useAppSelector,
    werewolfActions,
    werewolfState
} from "@/IndexImporter";
import "./CreateCompo.scss";

export const CreateCompo: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const gameData = useAppSelector(werewolfState.GameData);

    const changePlayerNumber = (newValue: number) => {
        dispatch(werewolfActions.changePlayerNumber(newValue));
    };

    return (
        <div>
            <div className="header-top">
                <NavLink
                    className="home-link-icon"
                    to="/"
                >
                    <HomeIcon />
                </NavLink>
                <h2 className="section-title">
                    Paramétrer la partie
                </h2>
                <div />
            </div>
            <Slider
                changePlayerNumber={changePlayerNumber}
                max={47}
                min={4}
                value={gameData.playerNumber}
            />
        </div>
    );
};
