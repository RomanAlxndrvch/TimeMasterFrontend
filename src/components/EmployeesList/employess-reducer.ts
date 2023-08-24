import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI, EmployeeRespondType} from "api/timeMaster-api";


//rtk
const slice = createSlice({
    name: 'employees',
    initialState: {
        allEmployees: []
    },
    reducers: {
        fetchAllEmployees: (state: { allEmployees: EmployeeType[] }, action: PayloadAction<EmployeeRespondType[]>) => {
            state.allEmployees = action.payload.map(el => ({...el, isLoggedIn: false}))
        }
    }
})


//actions and reducer
export const employeesReducer = slice.reducer
export const employeesActions = slice.actions


//thunk
export const fetchAllEmployees = (): AppThunk => (dispatch) => {
    allEmployeesAPI.getEmployeesList().then((res) => {
        dispatch(employeesActions.fetchAllEmployees(res.data.data.allEmployees))
    })
}

//types
export type EmployeeType = EmployeeRespondType &
    { isLoggedIn: boolean }
