import React from "react";

import {
    gameActions,
    gameState,
    useAppDispatch,
    useAppSelector
} from "@/IndexImporter";
import "./CreateGame.scss";

const CreateGame: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const gameData = useAppSelector(gameState.GameData);

    const changePlayerNumber = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        let inputValue = parseInt(event.target.value, 10);
        if (isNaN(inputValue) || inputValue < 4 || inputValue > 49) {
            inputValue = 8;
        }
        dispatch(gameActions.changePlayerNumber(inputValue));
    };

    const buttonChangePlayerNumber = (param: string) => {
        const newValue = param === "pos"
            ? gameData.playerNumber + 1
            : gameData.playerNumber - 1;
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
            <div className="number-selector-container">
                <p className="player-number-value">
                    {`${gameData.playerNumber} joueurs`}
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
                    max="49"
                    min="4"
                    type="range"
                    value={gameData.playerNumber}
                    onChange={changePlayerNumber}
                />
                <button
                    className="inc-dec-button"
                    type="button"
                    onClick={() => buttonChangePlayerNumber("pos")}
                >
                    +
                </button>
            </div>
            <p
                className="create-game-step-title"
            >
                2) Choisir la composition
            </p>
        </div>
    );
};

export default CreateGame;
