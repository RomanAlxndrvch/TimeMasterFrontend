import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI} from "api/timeMaster-api";
import {EmployeeRespondType, EmployeeType} from "utils/types";


//rtk
const slice = createSlice({
    name: 'app',
    initialState: {},
    reducers: {}
})


//action and reducer
export const appReducer = slice.reducer
export const appActions = slice.actions

//thunk

