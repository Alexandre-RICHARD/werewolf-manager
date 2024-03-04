import React from "react";
import {NavLink} from "react-router-dom";

import "./AppButton.scss";

export const AppButton: React.FC<{
    "classname": string;
    "type": string;
    "goal": string;
    "text": string;
}> = ({
    classname, type, goal, text,
}) => {
    if (type === "navLink") {
        return (
            <NavLink
                className={`nav-button ${classname}`}
                to={goal}
            >
                {text}
            </NavLink>
        );
    }

    if (type === "button") {
        return null;
    }

    return null;
};
