import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {
    CompositionTypes, GameDataTypes, RootState
} from "@/IndexImporter";
import {roles} from "@/IndexImporter";

interface WerewolfState {
    "gameData": GameDataTypes;
}

const initialState: WerewolfState = {
    "gameData": {
        "appSize": "size-384",
        "showWakeSleepScreen": true,
        "playerNumber": 8,
        "composition": roles.map((el) => {
            return {
                "roleName": el.variableName,
                "quantity": 0,
            };
        }),
        "playerData": [],
        "stepNumber": 0,
        "nextStepNumber": 1,
        "cycleCount": 1,
    },
};

const werewolfSlice = createSlice({
    "name": "werewolf",
    initialState,
    "reducers": {
        // ! DEV OPTION, TO DELETE
        "setAppSize": (state, action: PayloadAction<string>) => {
            state.gameData.appSize = action.payload;
        },
        // ! DEV OPTION, TO DELETE
        "setShowWakeSleepScreen": (state, action: PayloadAction<boolean>) => {
            state.gameData.showWakeSleepScreen = action.payload;
        },
        "changePlayerNumber": (state, action: PayloadAction<number>) => {
            state.gameData.playerNumber = action.payload;
        },
        "changeStepNumber": (state, action: PayloadAction<number>) => {
            state.gameData.stepNumber = action.payload;
        },
        "changeNextStepNumber": (state, action: PayloadAction<number>) => {
            state.gameData.nextStepNumber = action.payload;
        },
        "changeCycleCount": (state, action: PayloadAction<number>) => {
            state.gameData.cycleCount = action.payload;
        },
        "updateCompositionArray": (
            state,
            action: PayloadAction<CompositionTypes[]>
        ) => {
            state.gameData.composition = action.payload;
        },
    },
});

// Export all state in one object to have only to imports : Action and State.
export const werewolfState = {
    "GameData": (state: RootState) => {
        return state.werewolf.gameData;
    },
};
export const werewolfActions = werewolfSlice.actions;
export default werewolfSlice.reducer;
