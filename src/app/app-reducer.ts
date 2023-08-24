import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";

//rtk
const slice = createSlice({
    name: 'app',
    initialState: {
        selectedEmployee: ''
    },
    reducers: {
        selectedEmployee: (state, action: PayloadAction<{ id: string }>) => {
            state.selectedEmployee = action.payload.id
        }
    }
})


//action and reducer
export const appReducer = slice.reducer
export const appActions = slice.actions

//thunk
export const fetchSelectedEmployee = (): AppThunk => (dispatch) => {

}

//types