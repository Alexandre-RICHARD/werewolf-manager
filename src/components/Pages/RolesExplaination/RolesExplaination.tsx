import React from "react";
import {NavLink} from "react-router-dom";

import {HomeIcon} from "@/IndexImporter";
import "./RolesExplaination.scss";

export const RolesExplaination: React.FC = () => {
    return (
        <div className="roles-explaination">
            <div className="home-page-link">
                <NavLink
                    className="home-link-icon"
                    to="/"
                >
                    <HomeIcon />
                </NavLink>
            </div>
            <section className="roles-container">
                <p className="roles-container-title">
                    Explication des rôles
                </p>
            </section>
        </div>
    );
};
