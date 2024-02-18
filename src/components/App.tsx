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

    return (
        <div className="global-app">
            <main className={appSize}>
                <AppRouter />
            </main>
            <div className="dev-container">
                <DevOptions />
                <DevInfos />
            </div>
        </div>
    );
};
