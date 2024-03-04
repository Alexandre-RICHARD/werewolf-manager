import React from "react";

import {roles, RoleSelection} from "@/IndexImporter";
import "./RolesChoice.scss";

export const RolesChoice: React.FC = () => {
    const groupList = [
        "Les Villageois",
        "Les Loups-garous",
        "Les Solitaires",
        "Les Ambigus"
    ];

    return (
        <>
            <div className="compo-infos">
                <p>
                    Équilibrage : +/- X
                </p>
            </div>
            <div className="roles-list">
                {groupList.map((el) => {
                    return (
                        <React.Fragment key={el}>
                            <p className="group-title">
                                {el}
                            </p>
                            <div className="one-role-group">
                                {roles
                                    .filter((fi) => fi.group === el)
                                    .map((ro) => {
                                        return (
                                            <RoleSelection
                                                key={ro.id}
                                                role={ro}
                                            />
                                        );
                                    })}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
};
