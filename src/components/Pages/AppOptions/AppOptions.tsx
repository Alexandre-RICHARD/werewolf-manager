import React from "react";

import {ConfigHeader} from "@/IndexImporter";
import "./AppOptions.scss";

export const AppOptions: React.FC = () => {
    return (
        <div className="pages-container app-options">
            <ConfigHeader
                link="/"
                title="Paramètres de l'application"
                type="home"
            />
        </div>
    );
};
