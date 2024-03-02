import React from "react";

import {
    MinusIcon,
    PlusIcon,
    RolesType,
    imageImporter
} from "@/IndexImporter";
import "./RoleSelection.scss";

export const RoleSelection: React.FC<{"role": RolesType}> = ({role}) => {
    return (
        <div
            className="one-role"
            key={role.id}
        >
            <div className="role-selection-top">
                <button
                    className="role-button remove-role-button"
                    type="button"
                >
                    <MinusIcon />
                </button>
                <p
                    className="role-balance-score"
                >
                    {role.balancing}
                </p>
                <button
                    className="role-button add-role-button"
                    type="button"
                >
                    <PlusIcon />
                </button>
            </div>
            <div className="role-selection-bottom">
                <p
                    className="role-number"
                >
                    0
                </p>
            </div>
            <img
                className="one-role-card-image"
                src={imageImporter(`werewolf-cards/${role.illusName}`)}
            />
        </div>
    );
};
