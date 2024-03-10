export interface CompositionTypes {
    "roleName": string;
    "quantity": number;
}

interface PlayerDataTypes {
    "id": string;
    "roleName": string;
    "player": string;
    "alive": string;
}

export interface GameDataTypes {
    "appSize": string;
    "showWakeSleepScreen": boolean;
    "playerNumber": number;
    "composition": CompositionTypes[];
    "balanceScore": number;
    "playerData": PlayerDataTypes[];
    "stepNumber": number;
    "nextStepNumber": number;
    "cycleCount": number;
}
