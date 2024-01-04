import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState} from "@/IndexImporter";

interface GameState {
    appStep: string;
}

const initialState: GameState = {"appStep": "starting"};

const gameSlice = createSlice({
    "name": "game",
    initialState,
    "reducers": {
        "changeAppStep": (state, action: PayloadAction<string>) => {
            state.appStep = action.payload;
        },
    },
});

// Export all state in one object to have only to imports : Action and State.
export const gameState = {"AppStep": (state: RootState) => state.game.appStep};
export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
