import {createSlice} from "@reduxjs/toolkit";

interface CounterState {}

const initialState: CounterState = {};

const counterSlice = createSlice({
    "name": "counter",
    initialState,
    "reducers": {},
});

// Export all state in one object to have only to imports : Action and State.
export const counterState = {};
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
