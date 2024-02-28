import React from "react";
import {NavLink} from "react-router-dom";

import {imageImporter} from "@/IndexImporter";
import "./HomePage.scss";

export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="options-box">
                <NavLink to="/options">
                    Options
                </NavLink>
            </div>
            <div className="home-page-title-box">
                <h1>
                    Loup-Garou
                </h1>
                <p>
                    Bienvenue sur l'application Loup-Garou pour un MJ.
                    Soyez assisté en tant que MJ pour faire de grosses
                    parties avec une charge mentale moindre
                </p>
                <img
                    src={imageImporter("werewolf-logo.png")}
                />
            </div>
            <div className="explaination">
                <div className="new-game-button">
                    <NavLink to="/game">
                        Commencer une partie
                    </NavLink>
                </div>
                <NavLink
                    className="explaination-button"
                    to="/roles"
                >
                    Explication des rôles
                </NavLink>
                <NavLink
                    className="explaination-button"
                    to="/rules"
                >
                    Règles du jeu
                </NavLink>
            </div>
        </div>
    );
};
