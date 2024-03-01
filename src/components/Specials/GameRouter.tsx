import React from "react";
import {Routes, Route} from "react-router-dom";

import {CreateCompo} from "@/IndexImporter";

export const GameRouter: React.FC = () => {
    return (
        <Routes>
            <Route
                element={<CreateCompo />}
                path="/create/compo"
            />
        </Routes>
    );
};
