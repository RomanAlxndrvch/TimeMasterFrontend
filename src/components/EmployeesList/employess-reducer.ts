import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI, EmployeeType} from "api/timeMaster-api";


//rtk
const slice = createSlice({
    name: 'employees',
    initialState: {
        allEmployees: []
    },
    reducers: {
        fetchAllEmployees: (state: { allEmployees: EmployeeType[] }, action: PayloadAction<EmployeeType[]>) => {
            state.allEmployees = action.payload
        }
    }
})


//actions and reducer
export const employeesReducer = slice.reducer
export const employeesActions = slice.actions


//thunk
export const fetchAllEmployees = (): AppThunk => (dispatch) => {
    allEmployeesAPI.getEmployeesList().then((res) => {
        console.log(res)
        dispatch(employeesActions.fetchAllEmployees(res.data.data.allEmployees))
    })
}