import React from "react";

import {
    ConfigHeader,
    PlayerNumber,
    RolesChoice,
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
        <div className="create-compo-box">
            <ConfigHeader
                link="/"
                title="Paramétrer la partie"
                type="home"
            />
            <p className="config-section-title">
                Définir le nombre de joueurs
            </p>
            <PlayerNumber
                changePlayerNumber={changePlayerNumber}
                max={47}
                min={4}
                value={gameData.playerNumber}
            />
            <p className="config-section-title">
                Choisir la composition
            </p>
            <RolesChoice />
        </div>
    );
};
