import { configureStore, createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:'toggle',
    initialState: {toggle: true},
    reducers: {
        toggle(state){
          state.toggle=!state.toggle;
        }
    }
});

const storeToggle = configureStore(
    {
        reducer: toggleSlice.reducer,
    }
);

export const toggleAction = toggleSlice.actions;

export default storeToggle;
