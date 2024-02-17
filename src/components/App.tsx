import React from "react";

import {AppRouter} from "@/IndexImporter";
import "./App.scss";

export const App: React.FC = () => {
    return (
        <>
            <main>
                <AppRouter />
            </main>
        </>
    );
};
