import React from "react";
import {useNavigate} from "react-router-dom";

import {
    AppButton,
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

const NextStepButton: React.FC<{"enoughRole": boolean}> = ({enoughRole}) => {
    const navigate = useNavigate();
    const {balanceScore, composition} = useAppSelector(werewolfState.GameData);

    const roleForComedien = roles
        .filter((role) => role.comedianCanTake)
        .map((el) => el.variableName);
    const comedien = composition.find((el) => el.roleName === "comedien");
    const isComedien = comedien && comedien.quantity > 0;
    const comedienSpecialRole = composition.filter((el) => {
        return el.quantity > 0 && roleForComedien.indexOf(el.roleName) >= 0;
    }).length;

    const voleur = composition.find((el) => el.roleName === "voleur");
    const isVoleur = voleur && voleur.quantity > 0;
    const voleurRoles = composition.filter((el) => {
        return (
            el.quantity >= 1 &&
            [
                "voleur",
                "deux-soeurs",
                "trois-freres"
            ].indexOf(el.roleName) ===
                -1
        );
    }).length;
    const voleurValid = isVoleur ? voleurRoles >= 2 : true;

    const validToContinue =
        voleurValid &&
        enoughRole &&
        (!isComedien || (isComedien && comedienSpecialRole >= 3));

    let timeoutHandle: NodeJS.Timeout | null = null;

    const handleErrorMessage = (text: string) => {
        const messageEl = document.querySelector(".compo-error-message");
        if (messageEl) {
            messageEl.textContent = "";
            setTimeout(() => messageEl.textContent = text, 1);

            if (timeoutHandle !== null) {
                clearTimeout(timeoutHandle);
            }

            timeoutHandle = setTimeout(
                () => messageEl.textContent = "",
                10000
            );
        }
    };

    const handleNextStepButton = (link: string) => {
        if (validToContinue) {
            navigate(`${link}`);
        } else if (!enoughRole) {
            handleErrorMessage("Nombre de rôles incorrect");
        } else if (!voleurValid) {
            handleErrorMessage(
                "Les rôles actuels ne peuvent être donné au voleur"
            );
        } else if (!isComedien) {
            handleErrorMessage("La composition est invalide");
        } else if (isComedien && comedienSpecialRole < 3) {
            handleErrorMessage("Pas assez de rôle attribuable au Comédien");
        } else handleErrorMessage("ERROR");
    };

    return (
        <div className="create-compo-next-button">
            {!isComedien
                ? (
                    <AppButton
                        classname={validToContinue ? "primary" : "disable"}
                        effect={handleNextStepButton}
                        goal="/game/create/name"
                        text="Inscrire le nom des joueurs"
                        type="button"
                    />
                )
                : (
                    <AppButton
                        classname={validToContinue ? "primary" : "disable"}
                        effect={handleNextStepButton}
                        goal="/game/create/comedien"
                        text="Attribuer des rôles au comédien"
                        type="button"
                    />
                )}
            <span className="compo-error-message" />
        </div>
    );
};

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
                    <span className="numbers-font">
                        {roleSelected + "/" + roleNeeded}
                    </span>
                    <span>
                        )
                    </span>
                </p>
                <RolesChoice />
            </section>
            <NextStepButton enoughRole={roleSelected === roleNeeded} />
        </div>
    );
};
