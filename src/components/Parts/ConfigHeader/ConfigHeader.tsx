import React from "react";
import {NavLink} from "react-router-dom";

import {BackIcon, HomeIcon} from "@/IndexImporter";
import "./ConfigHeader.scss";

export const ConfigHeader: React.FC<{
    "title": string;
    "type": string;
    "link": string;
}> = ({
    title, type, link,
}) => {
    return (
        <div className="header-top">
            <NavLink
                className="home-link-icon"
                to={link}
            >
                {type === "home"
                    ? (
                        <>
                            <HomeIcon />
                        </>
                    )
                    : type === "return"
                        ? (
                            <>
                                <BackIcon />
                            </>
                        )
                        : null}
            </NavLink>
            <h2 className="section-title">
                {title}
            </h2>
            <div />
        </div>
    );
};
