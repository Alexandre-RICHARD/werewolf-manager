import React from "react";

import {
    AppRouter,
    DevInfos,
    DevOptions
} from "@/IndexImporter";
import "./App.scss";

export const App: React.FC = () => {
    return (
        <div className="global-app">
            <main className="size-320">
                <AppRouter />
            </main>
            <DevInfos />
            <DevOptions />
        </div>
    );
};
