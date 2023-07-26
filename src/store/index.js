import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {counter: 0};
const timerInitialState = {
    hour: 0, min:0, sec:0,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            if(state.counter<=0)
                state.counter=0;
            else
            state.counter--;
        }
    }
});

const timerSlice = createSlice({
    name:'timer',
    initialState: timerInitialState,
    reducers: {
        iHour(state,action){
            state.hour=action.payload;
        },
        iMin(state, action){
            state.min=action.payload;
        },
        iSec(state, action) {
            state.sec=action.payload;
        }
    }
});

const store = configureStore({
    reducer: {'counter': counterSlice.reducer, 'timer':timerSlice.reducer}
});

export const counterAction = counterSlice.actions;
export const timerAction = timerSlice.actions;
export default store;