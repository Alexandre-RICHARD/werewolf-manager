import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState} from "@/IndexImporter";

interface GameState {
    "appStep": string;
    "gameData": {
        "playerNumber": number;
    };
    "showWakeSleepScreen": boolean;
}

const initialState: GameState = {
    "appStep": "starting",
    "gameData": {"playerNumber": 8},
    "showWakeSleepScreen": true,
};

const gameSlice = createSlice({
    "name": "game",
    initialState,
    "reducers": {
        "changeAppStep": (state, action: PayloadAction<string>) => {
            state.appStep = action.payload;
        },
        "changePlayerNumber": (state, action: PayloadAction<number>) => {
            state.gameData.playerNumber = action.payload;
        },
        "setShowWakeSleepScreen": (state, action: PayloadAction<boolean>) => {
            state.showWakeSleepScreen = action.payload;
        },
    },
});

// Export all state in one object to have only to imports : Action and State.
export const gameState = {
    "AppStep": (state: RootState) => state.game.appStep,
    "GameData": (state: RootState) => state.game.gameData,
    "ShowWakeSleepScreen": (state: RootState) => state.game.showWakeSleepScreen,
};
export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
