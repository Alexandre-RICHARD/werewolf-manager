import React from "react";

import {
    steps,
    NextStepButton,
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./GameStep.scss";

export const GameStep: React.FC = () => {
    const {cycleCount, stepNumber} = useAppSelector(werewolfState.GameData);

    const currentStep = steps[stepNumber];
    const stepTotal = steps.length;

    return (
        <div className="step-container">
            <div className="game-header-box">
                <p className="cycle-count">
                    {`${currentStep.time} ${cycleCount}`}
                </p>
                <p className="cycle-count">
                    {`${stepNumber + 1}/${stepTotal}`}
                </p>
                <p className="step-name">
                    {currentStep.stepName}
                </p>
            </div>
            <h2 className="step-title">
                {currentStep.stepTitle}
            </h2>
            <p className="category">
                {currentStep.category}
            </p>
            <p className="step-description">
                {currentStep.stepDescription}
            </p>
            <NextStepButton />
        </div>
    );
};
