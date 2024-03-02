import React, {useEffect, useState} from "react";

import {
    MinusIcon,
    PlusIcon,
    RolesType,
    imageImporter,
    useAppSelector,
    useAppDispatch,
    werewolfActions,
    werewolfState
} from "@/IndexImporter";
import "./RoleSelection.scss";

export const RoleSelection: React.FC<{"role": RolesType}> = ({role}) => {
    const dispatch = useAppDispatch();
    const {composition} = useAppSelector(werewolfState.GameData);

    const [
        currentRole,
        setCurrentRole
    ] = useState({
        "roleName": role.variableName,
        "quantity": 0,
    });

    const dispatchUpdateQuantity = (quantity: number) => {
        dispatch(
            werewolfActions.updateCompositionArray([
                ...composition,
                {
                    "roleName": role.variableName,
                    "quantity": quantity,
                }
            ])
        );
    };

    const updateCurrentRole = (type: string) => {
        let newQuantity = 0;
        switch (type) {
            case "init":
                newQuantity = 0;
                break;
            case "increase":
                if (currentRole.quantity !== role.max) {
                    newQuantity = currentRole.quantity += role.compoCap;
                }
                break;
            case "decrease":
                if (currentRole.quantity !== 0) {
                    newQuantity = currentRole.quantity -= role.compoCap;
                }
                break;
            default:
                newQuantity = 0;
                break;
        }
        dispatchUpdateQuantity(newQuantity);
    };

    useEffect(() => {
        const currentRole = composition.find((fi) => {
            return fi.roleName === role.variableName;
        });
        if (currentRole) {
            setCurrentRole(currentRole);
        } else {
            updateCurrentRole("init");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const minusH = currentRole.quantity === 0 ? "hidden" : "";
    const plusH = currentRole.quantity === role.max ? "hidden" : "";

    return (
        <div
            className="one-role"
            key={role.id}
        >
            <div className="role-selection-top">
                <button
                    className={`role-button remove-role-button ${minusH}`}
                    type="button"
                    onClick={() => updateCurrentRole("decrease")}
                >
                    <MinusIcon />
                </button>
                <p className="role-balance-score">
                    {role.balancing}
                </p>
                <button
                    className={`role-button add-role-button ${plusH}`}
                    type="button"
                    onClick={() => updateCurrentRole("increase")}
                >
                    <PlusIcon />
                </button>
            </div>
            <div className="role-selection-bottom">
                <p className="role-number">
                    {currentRole.quantity}
                </p>
            </div>
            <img
                className="one-role-card-image"
                src={imageImporter(`werewolf-cards/${role.illusName}`)}
            />
        </div>
    );
};
