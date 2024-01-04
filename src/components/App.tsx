import React from "react";

import {
    CreateGame,
    gameState,
    ProfilPage,
    RolesDescription,
    RulesDescription,
    StartingPage,
    useAppSelector
} from "@/IndexImporter";
import "./App.scss";

const App: React.FC = () => {
    // Use the typed version create in hooks.ts
    const appStep = useAppSelector(gameState.AppStep);

    return (
        <>
            {appStep === "starting" && (
                <>
                    <StartingPage />
                </>
            )}
            {appStep === "createGame" && (
                <>
                    <CreateGame />
                </>
            )}
            {appStep === "rules" && (
                <>
                    <RulesDescription />
                </>
            )}
            {appStep === "roles" && (
                <>
                    <RolesDescription />
                </>
            )}
            {appStep === "profil" && (
                <>
                    <ProfilPage />
                </>
            )}
        </>
    );
};

export default App;
