import React from "react";

import {ConfigHeader} from "@/IndexImporter";
import "./RulesDescription.scss";

export const RulesDescription: React.FC = () => {
    return (
        <div className="pages-container rules-description">
            <ConfigHeader
                link="/"
                title="Règles du Loups-Garous"
                type="home"
            />
        </div>
    );
};
