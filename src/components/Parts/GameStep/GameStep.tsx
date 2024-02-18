import React, {useState} from "react";

import {steps} from "@/IndexImporter";
import "./GameStep.scss";

export const GameStep: React.FC = () => {
    const stepTotal = steps.length;
    const [
        stepNumber,
        setStepNumber
    ] = useState(0);
    const [
        cycleCount,
        setCycleCount
    ] = useState(1);

    const findNextStep = (message: boolean) => {
        if (!message) {
            if (stepNumber === stepTotal - 1) {
                setCycleCount(cycleCount + 1);
                return 0;
            } else {
                return stepNumber + 1;
            }
        } else {
            if (stepNumber + 1 === stepTotal) {
                return 0;
            } else {
                return stepNumber + 1;
            }
        }
    };

    const currentStep = steps[stepNumber];
    let nextStepMessage = steps[findNextStep(true)].entranceMessage;

    const nextStep = () => {
        const nextStepId = findNextStep(false);
        setStepNumber(nextStepId);
        nextStepMessage = steps[findNextStep(true)].entranceMessage;
    };

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
            <button
                className="next-step-button"
                type="button"
                onClick={nextStep}
            >
                {nextStepMessage}
            </button>
        </div>
    );
};
