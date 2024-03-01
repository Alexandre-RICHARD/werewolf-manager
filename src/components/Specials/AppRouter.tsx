import React from "react";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import {
    AppOptions,
    GameRouter,
    HomePage,
    RolesExplaination,
    RulesDescription
} from "@/IndexImporter";

export const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    element={<HomePage />}
                    path="/"
                />
                <Route
                    element={<AppOptions />}
                    path="/options"
                />
                <Route
                    element={<RolesExplaination />}
                    path="/roles"
                />
                <Route
                    element={<RulesDescription />}
                    path="/rules"
                />
                <Route
                    element={<GameRouter />}
                    path="/game/*"
                />
            </Routes>
        </Router>
    );
};
