import React from "react";

import {
    gameActions,
    gameState,
    useAppDispatch,
    useAppSelector
} from "@/IndexImporter";
import "./StartingPage.scss";

const StartingPage: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const showWakeSleepScreen = useAppSelector(gameState.ShowWakeSleepScreen);

    const changeAppStep = (param: string) => {
        dispatch(gameActions.changeAppStep(param));
    };

    const handleCheckbox = () => {
        dispatch(gameActions.setShowWakeSleepScreen(!showWakeSleepScreen));
    };

    return (
        <div className="homepage">
            {/* <div className="options"> */}

            {/* </div> */}
            <label
                htmlFor="show-wake-sleep-screen"
            >
                Écran de réveil
            </label>
            <div className="checkbox-wrapper">
                <input
                    checked={showWakeSleepScreen}
                    id="show-wake-sleep-screen"
                    name="show-wake-sleep-screen"
                    type="checkbox"
                    onChange={handleCheckbox}
                />
                <label
                    htmlFor="show-wake-sleep-screen"
                >
                    <svg viewBox="0,0,50,50">
                        <path d="M5 30 L 20 45 L 45 5" />
                    </svg>
                </label>
            </div>
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
                <button
                    type="button"
                    onClick={() => changeAppStep("fakeGame")}
                >
                    Fake Game
                </button>
            </div>
        </div>
    );
};

export default StartingPage;
