import React from "react";
import {NavLink} from "react-router-dom";

import "./HomePage.scss";

export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="options-box">
                <NavLink
                    to="/options"
                >
                    Options
                </NavLink>
            </div>
            <div className="new-game">
                <NavLink
                    to="/game"
                >
                    Commencer une partie
                </NavLink>
            </div>
            <div className="explaination">
                <NavLink
                    to="/roles"
                >
                    Explication des rôles
                </NavLink>
                <NavLink
                    to="/rules"
                >
                    Règles du jeu
                </NavLink>
            </div>
        </div>
    );
};
