import React from "react";
import {NavLink} from "react-router-dom";

import {
    AppButton, imageImporter, OptionsGear
} from "@/IndexImporter";
import "./HomePage.scss";

export const HomePage: React.FC = () => {
    return (
        <div className="pages-container home-page">
            <div className="options-box">
                <NavLink to="/options">
                    <OptionsGear />
                </NavLink>
            </div>
            <div className="home-page-title-box">
                <section>
                    <h1>
                        Loup-Garou
                    </h1>
                    <p>
                        Bienvenue sur l'application Loup-Garou pour un MJ. Votre
                        assistant personnel pour gérer des parties avec beaucoup
                        de monde sans problèmes.
                    </p>
                </section>
                <img src={imageImporter("werewolf-logo.png")} />
            </div>
            <div className="explaination">
                <AppButton
                    classname="primary"
                    goal="/game/create/compo"
                    text="Commencer une partie"
                    type="navLink"
                />
                <AppButton
                    classname="secondary"
                    goal="/roles"
                    text="Explication des rôles"
                    type="navLink"
                />
                <AppButton
                    classname="secondary"
                    goal="/rules"
                    text="Règles du jeu"
                    type="navLink"
                />
            </div>
        </div>
    );
};
