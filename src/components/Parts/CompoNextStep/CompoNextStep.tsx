import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {
    AppButton,
    compoValidator,
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./CompoNextStep.scss";

const ConfirmationModal: React.FC<{
    "closeModal": () => void;
    "isComedien": boolean;
    "score": number;
}> = ({
    closeModal, isComedien, score,
}) => {
    return (
        <div className="confirmation-container">
            <div className="confirmation-box">
                <p>
                    {`L'équilibrage est fortement en faveur des
                ${score > 0 ? "Villageois" : "Loups"}.
                `}
                    <span className="advice">
                        (conseillé de rester entre -10 et +10)
                    </span>
                </p>
                <p>
                    Continuer à l'étape suivante ?
                </p>
                <NavLink
                    className="choice continue-button"
                    to={
                        isComedien
                            ? "/game/create/comedien"
                            : "/game/create/name"
                    }
                >
                    Oui, continuer
                </NavLink>
                <button
                    className="choice cancel-button"
                    type="button"
                    onClick={closeModal}
                >
                    Non, réviser la composition
                </button>
            </div>
        </div>
    );
};

interface Types {
    "enoughRole": boolean;
}

export const CompoNextStep: React.FC<Types> = ({enoughRole}) => {
    const navigate = useNavigate();
    const {balanceScore, composition} = useAppSelector(werewolfState.GameData);

    const [
        confirmationNeeded,
        setConfirmationNeeded
    ] = useState(false);

    const {
        isComedien, comedienSpecialRole, voleurValid, validToContinue,
    } =
        compoValidator(composition, enoughRole);

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
            if (balanceScore <= -10 || balanceScore > 10) {
                setConfirmationNeeded(true);
            } else {
                navigate(`${link}`);
            }
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
            <AppButton
                classname={validToContinue ? "primary" : "disable"}
                effect={handleNextStepButton}
                goal={
                    !isComedien ? "/game/create/name" : "/game/create/comedien"
                }
                text={
                    !isComedien
                        ? "Inscrire le nom des joueurs"
                        : "Attribuer des rôles au comédien"
                }
                type="button"
            />
            <span className="compo-error-message" />
            {confirmationNeeded
                ? (
                    <ConfirmationModal
                        closeModal={() => setConfirmationNeeded(false)}
                        isComedien={isComedien}
                        score={balanceScore}
                    />
                )
                : null}
        </div>
    );
};
