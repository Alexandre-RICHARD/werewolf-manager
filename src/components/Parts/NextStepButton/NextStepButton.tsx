import React from "react";

import {
    steps,
    stepFinder,
    useAppSelector,
    useAppDispatch,
    werewolfActions,
    werewolfState
} from "@/IndexImporter";
import "./NextStepButton.scss";

export const NextStepButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const gameData = useAppSelector(werewolfState.GameData);
    const {nextStepNumber} = gameData;

    const nextStepHandler = () => {
        const stepId = stepFinder(steps, gameData);
        dispatch(werewolfActions.changeStepNumber(stepId));
    };

    return (
        <button
            className="next-step-button"
            type="button"
            onClick={nextStepHandler}
        >
            {steps[nextStepNumber].entranceMessage}
        </button>
    );
};
