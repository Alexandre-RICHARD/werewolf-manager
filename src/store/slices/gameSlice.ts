import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState} from "@/IndexImporter";

interface GameState {
    appStep: string;
    gameData: {
        playerNumber: number;
    };
}

const initialState: GameState = {
    "appStep": "starting",
    "gameData": {"playerNumber": 8},
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
    },
});

// Export all state in one object to have only to imports : Action and State.
export const gameState = {
    "AppStep": (state: RootState) => state.game.appStep,
    "GameData": (state: RootState) => state.game.gameData,
};
export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
