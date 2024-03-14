import React from "react";
import {NavLink} from "react-router-dom";

import {HomeIcon} from "@/IndexImporter";
import "./AppOptions.scss";

export const AppOptions: React.FC = () => {
    return (
        <div className="pages-container app-options">
            <div className="home-page-link">
                <NavLink
                    className="home-link-icon"
                    to="/"
                >
                    <HomeIcon />
                </NavLink>
            </div>
            <section className="options-container">
                <p className="options-container-title">
                    Paramètres de l'application
                </p>
            </section>
        </div>
    );
};
