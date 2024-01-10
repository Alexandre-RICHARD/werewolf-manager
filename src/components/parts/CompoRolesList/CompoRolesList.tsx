import React from "react";

import {rolesData} from "@/IndexImporter";
import "./CompoRolesList.scss";

interface CompoRolesProps {
    validateCompo: () => void;
}

const CompoRolesList: React.FC<CompoRolesProps> = ({validateCompo}) => {

    console.log("A laide");
    // rolesData.forEach((el) => {
    //     console.log(el);
    // });

    return (
        <>
            CompoRolesList
        </>
    );
};

export default CompoRolesList;
