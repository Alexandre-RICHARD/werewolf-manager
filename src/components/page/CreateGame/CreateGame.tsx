import React, {useState} from "react";

import {
    CompoRolesList,
    gameActions,
    gameState,
    NewGameRules,
    Slider,
    useAppDispatch,
    useAppSelector
} from "@/IndexImporter";
import "./CreateGame.scss";

const CreateGame: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const gameData = useAppSelector(gameState.GameData);

    const [
        stepTwo,
        setStepTwo
    ] = useState("disable");
    const [
        stepThree,
        setStepThree
    ] = useState("disable");

    const changePlayerNumber = (newValue: number) => {
        setStepTwo("enable");
        dispatch(gameActions.changePlayerNumber(newValue));
    };

    return (
        <div
            className="create-game-container"
        >
            <div className="create-game-step">
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
            </div>
            <div className="create-game-step">
                <p
                    className={`create-game-step-title ${stepTwo}`}
                >
                    2) Choisir la composition
                </p>
                {stepTwo === "enable"
                    ? <CompoRolesList />
                    : null}
            </div>
            <div className="create-game-step">
                <p
                    className={`create-game-step-title ${stepThree}`}
                >
                    3) Personnaliser les règles
                </p>
                {stepThree === "enable"
                    ? <NewGameRules />
                    : null}
            </div>
        </div>
    );
};

export default CreateGame;
