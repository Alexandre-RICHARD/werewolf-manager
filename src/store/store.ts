import {combineReducers, configureStore} from "@reduxjs/toolkit";
import type {PreloadedState} from "@reduxjs/toolkit";

import werewolfSlice from "@slices/werewolfSlice";

// Create the root reducer independently to obtain the RootState type
// This is the only place where it is necessary to declare each slice
const rootReducer = combineReducers({"werewolf": werewolfSlice});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        "reducer": rootReducer,
        preloadedState,
    });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
