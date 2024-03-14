import React from "react";
import {Routes, Route} from "react-router-dom";

import {
    ComedienRoles, CreateCompo, PlayerName
} from "@/IndexImporter";

export const GameRouter: React.FC = () => {
    return (
        <Routes>
            <Route
                element={<CreateCompo />}
                path="/create/compo"
            />
            <Route
                element={<ComedienRoles />}
                path="/create/comedien"
            />
            <Route
                element={<PlayerName />}
                path="/create/name"
            />
        </Routes>
    );
};
