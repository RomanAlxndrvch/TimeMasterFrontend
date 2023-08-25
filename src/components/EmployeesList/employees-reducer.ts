import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI} from "api/timeMaster-api";
import {EmployeeRespondType} from "utils/types";


//rtk
const slice = createSlice({
    name: 'employees',
    initialState: {
        allEmployees: []
    },
    reducers: {
        fetchAllEmployees: (state: {
            allEmployees: EmployeeRespondType[]
        }, action: PayloadAction<EmployeeRespondType[]>) => {
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
        dispatch(employeesActions.fetchAllEmployees(res.data.data.allEmployees))
    })
}

