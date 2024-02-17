import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState} from "@/IndexImporter";

interface WerewolfState {
    "gameData": {
        "playerNumber": number;
    };
    "showWakeSleepScreen": boolean;
}

const initialState: WerewolfState = {
    "gameData": {"playerNumber": 8},
    "showWakeSleepScreen": true,
};

const werewolfSlice = createSlice({
    "name": "werewolf",
    initialState,
    "reducers": {
        "changePlayerNumber": (state, action: PayloadAction<number>) => {
            state.gameData.playerNumber = action.payload;
        },
        "setShowWakeSleepScreen": (state, action: PayloadAction<boolean>) => {
            state.showWakeSleepScreen = action.payload;
        },
    },
});

// Export all state in one object to have only to imports : Action and State.
export const werewolfState = {
    "GameData": (state: RootState) => state.werewolf.gameData,
    "ShowWakeSleepScreen": (state: RootState) => {
        return state.werewolf.showWakeSleepScreen;
    },
};
export const werewolfActions = werewolfSlice.actions;
export default werewolfSlice.reducer;
