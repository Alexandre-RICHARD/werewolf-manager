import React from "react";
import {NavLink} from "react-router-dom";

import {HomeIcon} from "@/IndexImporter";
import "./RulesDescription.scss";

export const RulesDescription: React.FC = () => {
    return (
        <div className="rules-description">
            <div className="home-page-link">
                <NavLink
                    className="home-link-icon"
                    to="/"
                >
                    <HomeIcon />
                </NavLink>
            </div>
            <div className="rules-container">
                <p className="rules-container-title">
                    Règles du Loups-Garous
                </p>
            </div>
        </div>
    );
};
