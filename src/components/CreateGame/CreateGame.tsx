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
        <>
            <p>
                1) Choisir le nombre de joueur
            </p>
            <div className="number-selector-container">
                <button
                    type="button"
                    onClick={() => buttonChangePlayerNumber("neg")}
                >
                    -
                </button>
                <input
                    max="49"
                    min="4"
                    type="range"
                    value={gameData.playerNumber}
                    onChange={changePlayerNumber}
                />
                <button
                    type="button"
                    onClick={() => buttonChangePlayerNumber("pos")}
                >
                    +
                </button>
            </div>
            <p>
                2) Choisir la composition
            </p>
        </>
    );
};

export default CreateGame;
