import React from "react";
import {NavLink} from "react-router-dom";

import {HomeIcon} from "@/IndexImporter";
import "./GamePage.scss";

export const GamePage: React.FC = () => {
    return (
        <div className="app-new-game">
            <div className="home-page-link">
                <NavLink
                    className="home-link-icon"
                    to="/"
                >
                    <HomeIcon />
                </NavLink>
            </div>
        </div>
    );
};
