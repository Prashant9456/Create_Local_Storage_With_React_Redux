import {createSlice, configureStore } from '@reduxjs/toolkit';
const initialLocalState={
    locals:['abc','abdciswf','shfg','dsjbfurg'],
    
};

const LocalState=createSlice({
    name: 'locals',
    initialState: initialLocalState,
    reducers: {
        add(state,action){
            state.locals=[action.payload,...state.locals];
        },
    },
});
const store=configureStore({
    reducer:{
        locals:LocalState.reducer,
    },
});
export const LocalStates=LocalState.action;
export default store;
