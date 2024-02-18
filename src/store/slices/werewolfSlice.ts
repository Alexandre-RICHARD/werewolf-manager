import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {GameDataTypes, RootState} from "@/IndexImporter";

interface WerewolfState {
    "gameData": GameDataTypes;
}

const initialState: WerewolfState = {
    "gameData": {
        "appSize": "size-320",
        "showWakeSleepScreen": true,
        "playerNumber": 8,
        "stepNumber": 0,
        "nextStepNumber": 1,
        "cycleCount": 1,
    },
};

const werewolfSlice = createSlice({
    "name": "werewolf",
    initialState,
    "reducers": {
        "setAppSize": (state, action: PayloadAction<string>) => {
            state.gameData.appSize = action.payload;
        },
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
