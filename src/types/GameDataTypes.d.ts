export interface CompositionTypes {
    "id": string;
    "roleName": string;
    "player": string;
    "alive": string;
}

export interface GameDataTypes {
    "appSize": string;
    "showWakeSleepScreen": boolean;
    "playerNumber": number;
    "composition": CompositionTypes;
    "stepNumber": number;
    "nextStepNumber": number;
    "cycleCount": number;
}
