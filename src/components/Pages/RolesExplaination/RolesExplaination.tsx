import React from "react";

import {ConfigHeader} from "@/IndexImporter";
import "./RolesExplaination.scss";

export const RolesExplaination: React.FC = () => {
    return (
        <div className="pages-container roles-explaination">
            <ConfigHeader
                link="/"
                title="Explication des rôles"
                type="home"
            />
        </div>
    );
};
