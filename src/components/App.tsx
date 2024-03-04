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
    return (
        <>
            {mode === "dev"
                ? (
                    <div className="dev-wrapper">
                        <main className={appSize}>
                            <AppRouter />
                        </main>
                        <div className="dev-container">
                            <DevOptions />
                            <DevInfos />
                        </div>
                    </div>
                )
                : (
                    <main>
                        <AppRouter />
                    </main>
                )}
        </>
    );
};
