import {combineReducers, configureStore} from "@reduxjs/toolkit";
import type {PreloadedState} from "@reduxjs/toolkit";

import gameSlice from "@slices/gameSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({"game": gameSlice});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        // This is the only place where it is necessary to declare each slice
        "reducer": rootReducer,
        preloadedState,
    });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
