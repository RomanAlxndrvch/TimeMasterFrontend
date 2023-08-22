import {createSlice} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI} from "api/timeMaster-api";


//rtk
const slice = createSlice({
    name: 'employees',
    initialState: {},
    reducers: {}
})


//actions and reducer
export const employeesReducer = slice.reducer
export const employeesActions = slice.actions


//thunk
export const fetchAllEmployees = (): AppThunk => (dispatch) => {
    allEmployeesAPI.getEmployeesList().then((res) => {
        console.log(res)
    })
}