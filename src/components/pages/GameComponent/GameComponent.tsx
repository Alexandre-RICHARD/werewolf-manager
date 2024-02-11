import React, {useState} from "react";

import {steps} from "@/IndexImporter";
import "./GameComponent.scss";

const GameComponent: React.FC = () => {
    const [
        stepNumber,
        setStepNumber
    ] = useState(0);

    const [
        cycleCount,
        setCycleCount
    ] = useState(1);

    const findNextValidState = () => {
        if (stepNumber === steps.length - 1) {
            setCycleCount(cycleCount + 1);
            return 0;
        } else {
            return stepNumber + 1;
        }
    };

    const [
        nextStepMessage,
        setNextStepMessage
    ] = useState(steps[findNextValidState()].entranceMessage);

    const nextStep = () => {
        const nextStepId = findNextValidState();
        setStepNumber(nextStepId);
        setNextStepMessage(steps[findNextValidState()].entranceMessage);
    };

    return (
        <div className="step-container">
            <div className="game-header-box">
                <p className="cycle-count">
                    {steps[stepNumber].time + " " + cycleCount}
                </p>
                <p className="step-name">
                    {steps[stepNumber].stepName}
                </p>
            </div>
            <h2 className="step-title">
                {steps[stepNumber].stepTitle}
            </h2>
            <p className="category">
                {steps[stepNumber].category}
            </p>
            <p className="step-description">
                {steps[stepNumber].stepDescription}
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

export default GameComponent;
