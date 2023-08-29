import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "app/store";
import {allEmployeesAPI} from "api/timeMaster-api";
import {EmployeeRespondType, EmployeeType} from "utils/types";
import {appActions} from "app/app-reducer";


//rtk
const slice = createSlice({
    name: 'employees',
    initialState: {
        allEmployees: [],
        selectedEmployee: {} as EmployeeType
    },
    reducers: {
        fetchAllEmployees: (state: {
            allEmployees: EmployeeRespondType[]
        }, action: PayloadAction<EmployeeRespondType[]>) => {
            state.allEmployees = action.payload
        },
        selectedEmployee: (state, action: PayloadAction<{ employee: EmployeeRespondType }>) => {
            state.selectedEmployee = {...action.payload.employee, isLoggedIn: false}
        },
        changeLoginInStatus: (state, action: PayloadAction<{ isLoginIn: boolean }>) => {
            state.selectedEmployee.isLoggedIn = action.payload.isLoginIn
        }
    }
})


//actions and reducer
export const employeesReducer = slice.reducer
export const employeesActions = slice.actions


//thunk
export const fetchAllEmployees = (): AppThunk => (dispatch) => {
    //dispatch(appActions.changeAppInitializedStatus({status: false}))

    allEmployeesAPI.getEmployeesList().then((res) => {
        dispatch(employeesActions.fetchAllEmployees(res.data.data.allEmployees))
        dispatch(appActions.changeAppInitializedStatus({status: true}))
    })
}

export const fetchSelectedEmployee = (id: string): AppThunk => async (dispatch) => {
    try {
        const res = await allEmployeesAPI.getEmployeeById(id)
        dispatch(employeesActions.selectedEmployee(res.data.data))
        dispatch(appActions.changeIsEmployeeBeenSelected({status: true}))
    } catch (e) {
        console.log(e)
    }


}