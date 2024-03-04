import {
    GameDataTypes, steps, StepsTypes
} from "@/IndexImporter";

export const stepFinder = (
    array: StepsTypes[],
    gameData: GameDataTypes
): number => {
    // Get the total number of step
    const totalStep = steps.length;

    const wakeScreen = (step: StepsTypes) => {
        if (gameData.showWakeSleepScreen) {
            return true;
        } else {
            if (step.category !== "wakeUpOrSleep") {
                return true;
            } else {
                return false;
            }
        }
    };

    // If the next step doesn't exist, return to first one
    if (gameData.stepNumber === totalStep - 1) {
        return 0;
    } else {
        // Else, find from currentStep, the next one wich match all condition
        const nextStep = array.slice(gameData.stepNumber + 1).find((el) => {
            // Each condition or group of confition got its dedicated function
            return wakeScreen(el);
        });
        // Little verification for typescript
        if (nextStep) {
            // get the id of the next step in the array of step and return it
            const nextStepId = steps.findIndex((el) => {
                return el.stepName === nextStep.stepName;
            });
            return nextStepId;
        } else {
            // if error, return 0, but not a normal case
            return 0;
        }
    }
};
