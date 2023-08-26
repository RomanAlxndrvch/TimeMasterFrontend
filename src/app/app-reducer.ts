import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI} from "api/timeMaster-api";
import {EmployeeRespondType, EmployeeType} from "utils/types";


//rtk
const slice = createSlice({
    name: 'app',
    initialState: {
        selectedEmployee: {} as EmployeeType
    },
    reducers: {
        selectedEmployee: (state, action: PayloadAction<{ employee: EmployeeRespondType }>) => {
            state.selectedEmployee = {...action.payload.employee, isLoggedIn: false}
        },
        changeLoginInStatus: (state, action: PayloadAction<{ isLoginIn: boolean }>) => {
            state.selectedEmployee.isLoggedIn = action.payload.isLoginIn
        }
    }
})


//action and reducer
export const appReducer = slice.reducer
export const appActions = slice.actions

//thunk
export const fetchSelectedEmployee = (id: string): AppThunk => async (dispatch) => {
    try {
        const res = await allEmployeesAPI.getEmployeeById(id)
        dispatch(appActions.selectedEmployee(res.data.data))
    } catch (e) {
        console.log(e)
    }


}
