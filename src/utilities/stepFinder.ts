import {
    GameDataTypes,
    steps,
    StepsTypes
} from "@/IndexImporter";

export const stepFinder = (
    array: StepsTypes[],
    gameData: GameDataTypes
): number => {
    const totalStep = steps.length;

    // const handleNextStep = (message: boolean) => {
    //     if (!message) {
    //         if (stepNumber === totalStep - 1) {
    //             return 0;
    //         } else {
    //             return stepNumber + 1;
    //         }
    //     } else {
    //         if (stepNumber + 1 === totalStep) {
    //             return 0;
    //         } else {
    //             return stepNumber + 1;
    //         }
    //     }
    // };

    if (gameData.stepNumber === totalStep - 1) {
        return 0;
    } else {
        return gameData.stepNumber + 1;
    }
};
