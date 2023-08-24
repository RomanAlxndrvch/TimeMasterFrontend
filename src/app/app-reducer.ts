import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI, EmployeeRespondType} from "api/timeMaster-api";
import {EmployeeType} from "components/EmployeesList/employees-reducer";

//rtk
const slice = createSlice({
    name: 'app',
    initialState: {
        selectedEmployee: {} as EmployeeRespondType
    },
    reducers: {
        selectedEmployee: (state, action: PayloadAction<{ employee: EmployeeRespondType }>) => {
            state.selectedEmployee = action.payload.employee
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

//types