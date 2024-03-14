import React from "react";
import {NavLink} from "react-router-dom";

import "./AppButton.scss";

export const AppButton: React.FC<{
    "classname": string;
    "type": string;
    "goal": string;
    "text": string;
    "effect"?: (goal: string) => void;
}> = ({
    classname, type, goal = "", text, effect = () => {},
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
        return (
            <button
                className={`nav-button ${classname}`}
                type="button"
                onClick={() => effect(goal)}
            >
                {text}
            </button>
        );
    }

    return null;
};
