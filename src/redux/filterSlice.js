import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter: {
            reducer(state, action) {
                state = action.payload
            }
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;