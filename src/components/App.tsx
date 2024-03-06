import React from "react";

import {
    AppRouter,
    DevInfos,
    DevOptions,
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./App.scss";

export const App: React.FC = () => {
    const {appSize} = useAppSelector(werewolfState.GameData);
    const mode = import.meta.env.MODE;

    if (mode === "dev") {
        return (
            <div className="dev-wrapper">
                <div className={`witdh-handler ${appSize}`}>
                    <main className={appSize}>
                        <AppRouter />
                    </main>
                </div>
                <div className="dev-container">
                    <DevOptions />
                    <DevInfos />
                </div>
            </div>
        );
    }

    return (
        <div className="witdh-handler">
            <main>
                <AppRouter />
            </main>
        </div>
    );
};
