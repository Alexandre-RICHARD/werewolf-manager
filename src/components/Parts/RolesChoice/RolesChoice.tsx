import React from "react";

import {imageImporter, roles} from "@/IndexImporter";
import "./RolesChoice.scss";

export const RolesChoice: React.FC = () => {
    const groupList = [
        "Les Villageois",
        "Les Loups-garous",
        "Les Solitaires",
        "Les Ambigus"
    ];

    return (
        // <div className="roles-selection-container">
        <div className="roles-list">
            {
                groupList.map((el) => {
                    return (
                        <>
                            <p
                                className="group-title"
                                key={el}
                            >
                                {el}
                            </p>
                            <div className="one-role-group">
                                {
                                    roles
                                        .filter((fi) => fi.group === el)
                                        .map((ro) => {
                                            return (
                                                <div
                                                    className="one-role"
                                                    key={ro.id}
                                                >
                                                    <img
                                                        className="role-illus"
                                                        src={imageImporter(`werewolf-cards/${ro.illusName}`)}
                                                    />
                                                </div>
                                            );
                                        })
                                }
                            </div>
                        </>
                    );
                })
            }
        </div>
        // </div>
    );
};
