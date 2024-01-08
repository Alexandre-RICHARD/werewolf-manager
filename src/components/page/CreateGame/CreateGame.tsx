import React, {useState} from "react";

import {
    gameActions,
    gameState,
    Slider,
    useAppDispatch,
    useAppSelector
} from "@/IndexImporter";
import "./CreateGame.scss";

const CreateGame: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const gameData = useAppSelector(gameState.GameData);

    const changePlayerNumber = (newValue: number) => {
        dispatch(gameActions.changePlayerNumber(newValue));
    };

    return (
        <div
            className="create-game-container"
        >
            <p
                className="create-game-step-title"
            >
                1) Choisir le nombre de joueurs
            </p>
            <Slider
                changePlayerNumber={changePlayerNumber}
                max={49}
                min={4}
                name="joueurs"
                value={gameData.playerNumber}
            />
            <p
                className="create-game-step-title"
            >
                2) Choisir la composition
            </p>
        </div>
    );
};

export default CreateGame;
