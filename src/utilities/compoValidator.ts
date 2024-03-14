import type {CompositionTypes} from "@/IndexImporter";
import {roles} from "@/IndexImporter";

export const compoValidator = (
    composition: CompositionTypes[],
    enoughRole: boolean
) => {
    const roleForComedien = roles
        .filter((role) => role.comedianCanTake)
        .map((el) => el.variableName);
    const comedien = composition.find((el) => el.roleName === "comedien");
    const voleur = composition.find((el) => el.roleName === "voleur");
    const isVoleur = voleur && voleur.quantity > 0;
    const voleurRoles = composition.filter(
        (el) => el.quantity >= 1 &&
            [
                "voleur",
                "deux-soeurs",
                "trois-freres"
            ].indexOf(el.roleName) ===
                -1
    ).length;

    const isComedien = (comedien && comedien.quantity > 0) || false;
    const comedienSpecialRole = composition.filter(
        (el) => el.quantity > 0 && roleForComedien.indexOf(el.roleName) >= 0
    ).length;
    const voleurValid = isVoleur ? voleurRoles >= 2 : true;
    const validToContinue =
        voleurValid &&
        enoughRole &&
        (!isComedien || (isComedien && comedienSpecialRole >= 3));

    return {
        "isComedien": isComedien,
        "comedienSpecialRole": comedienSpecialRole,
        "voleurValid": voleurValid,
        "validToContinue": validToContinue,
    };
};
