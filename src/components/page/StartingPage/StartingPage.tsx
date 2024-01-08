import React from "react";

import {gameActions, useAppDispatch} from "@/IndexImporter";
import "./StartingPage.scss";

const StartingPage: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();

    const changeAppStep = (param: string) => {
        dispatch(gameActions.changeAppStep(param));
    };

    return (
        <div className="homepage">
            <div className="profil">
                <button
                    type="button"
                    onClick={() => changeAppStep("profil")}
                >
                    Profil
                </button>
            </div>
            <div className="new-game-button">
                <button
                    type="button"
                    onClick={() => changeAppStep("createGame")}
                >
                    Nouvelle partie
                </button>
            </div>
            <div className="rules-container">
                <button
                    type="button"
                    onClick={() => changeAppStep("rules")}
                >
                    Règle du jeu
                </button>
                <button
                    type="button"
                    onClick={() => changeAppStep("roles")}
                >
                    Tous les rôles
                </button>
            </div>
        </div>
    );
};

export default StartingPage;
