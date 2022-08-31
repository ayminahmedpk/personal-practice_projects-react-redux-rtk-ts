import { createSlice } from "@reduxjs/toolkit";

type GlobalState = {};

const initialState: GlobalState = {};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    reset: () => {},
  }
})


export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;