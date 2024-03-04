import React from "react";

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

const ButtonIncDec: React.FC<{
    "type": string;
    "hidden": string;
    "update": (type: string) => void;
}> = ({
    type, hidden, update,
}) => {
    return (
        <button
            className={`role-button ${type}-role-button ${hidden}`}
            type="button"
            onClick={() => update(type)}
        >
            {type === "increase" ? <PlusIcon /> : <MinusIcon />}
        </button>
    );
};

const CardButton: React.FC<{
    "imageName": string;
    "update": () => void;
}> = ({imageName, update}) => {
    return (
        <button
            className="one-role-card-button"
            type="button"
        >
            <div className="selected-cache" />
            <img
                className="one-role-card-image"
                src={imageImporter(`werewolf-cards/${imageName}`)}
                onClick={update}
            />
        </button>
    );
};

export const RoleSelection: React.FC<{"role": RolesType}> = ({role}) => {
    const dispatch = useAppDispatch();
    const {composition} = useAppSelector(werewolfState.GameData);
    let findIndex = 0;

    const curRole = composition.find((fi, index) => {
        findIndex = index;
        return fi.roleName === role.variableName;
    });

    if (curRole) {
        const minusH = curRole.quantity === 0 ? "hidden" : "";
        const plusH = curRole.quantity === role.max ? "hidden" : "";
        const selected = curRole.quantity > 0 ? "selected" : "";

        const dispatchCompoUpdate = (quantity: number) => {
            const newState = [...composition];
            newState[findIndex] = {
                ...newState[findIndex],
                "quantity": quantity,
            };
            dispatch(werewolfActions.updateCompositionArray(newState));
        };

        const setRoleNewQuantity = (type: string) => {
            let newQuantity = 0;
            switch (type) {
                case "increase":
                    if (
                        curRole.quantity <= role.max &&
                        curRole.quantity + role.compoCap <= role.max
                    ) {
                        newQuantity = curRole.quantity + role.compoCap;
                    }
                    break;
                case "decrease":
                    if (
                        curRole.quantity >= 0 &&
                        curRole.quantity - role.compoCap >= 0
                    ) {
                        newQuantity = curRole.quantity - role.compoCap;
                    }
                    break;
                default:
                    break;
            }
            dispatchCompoUpdate(newQuantity);
        };

        const clickRoleCard = () => {
            if (
                [
                    "simple-villageois",
                    "simple-loup-garou"
                ].indexOf(
                    curRole.roleName
                ) >= 0
            ) {
                if (curRole.quantity < role.max) {
                    setRoleNewQuantity("increase");
                }
            } else {
                if (curRole.quantity === 0) {
                    setRoleNewQuantity("increase");
                } else if (curRole.quantity === role.max) {
                    setRoleNewQuantity("decrease");
                }
            }
        };

        return (
            <div className={`one-role ${selected}`}>
                <div className="selection-top">
                    <ButtonIncDec
                        hidden={minusH}
                        type="decrease"
                        update={setRoleNewQuantity}
                    />
                    <p className="role-number">
                        {curRole.quantity}
                    </p>
                    <ButtonIncDec
                        hidden={plusH}
                        type="increase"
                        update={setRoleNewQuantity}
                    />
                </div>
                <CardButton
                    imageName={role.illusName}
                    update={clickRoleCard}
                />
            </div>
        );
    }
    return null;
};
