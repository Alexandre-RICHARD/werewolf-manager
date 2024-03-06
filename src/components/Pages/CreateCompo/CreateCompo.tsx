import React from "react";

import {
    ConfigHeader,
    PlayerNumber,
    roles,
    RolesChoice,
    useAppDispatch,
    useAppSelector,
    werewolfActions,
    werewolfState
} from "@/IndexImporter";
import "./CreateCompo.scss";

export const CreateCompo: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const gameData = useAppSelector(werewolfState.GameData);

    const changePlayerNumber = (newValue: number) => {
        dispatch(werewolfActions.changePlayerNumber(newValue));
    };

    const {composition} = gameData;

    const roleSelected = composition.reduce((a, b) => {
        return a + b.quantity;
    }, 0);

    let roleNeeded = gameData.playerNumber;

    if (
        composition.find((el) => {
            return el.quantity === 1 && el.roleName === "voleur";
        })
    ) {
        roleNeeded += 2;
    }

    if (
        composition.find((el) => {
            return el.quantity === 1 && el.roleName === "comedien";
        })
    ) {
        roleNeeded += 3;
    }

    const maxPLayer = roles.reduce((a, b) => a + b.max, 0) - 2;

    return (
        <div className="create-compo-box">
            <ConfigHeader
                link="/"
                title="Paramétrer la partie"
                type="home"
            />
            <section>
                <p className="config-section-title">
                    Définir le nombre de joueurs
                </p>
                <PlayerNumber
                    changePlayerNumber={changePlayerNumber}
                    max={maxPLayer}
                    min={4}
                    value={gameData.playerNumber}
                />
            </section>
            <section className="overflow-handler">
                <p className="config-section-title">
                    <span>
                        Choisir la composition (
                    </span>
                    <span className="role-number-display">
                        {roleSelected + "/" + roleNeeded}
                    </span>
                    <span>
                        )
                    </span>
                </p>
                <RolesChoice />
            </section>
        </div>
    );
};
