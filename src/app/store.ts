import {AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {employeesReducer} from "components/EmployeesList/employees-reducer";
import {appReducer} from "app/app-reducer";


const RootReducer = combineReducers({
    app: appReducer,
    employees: employeesReducer
})

export const store = configureStore({reducer: RootReducer})

//store type
export type AppRootStateType = ReturnType<typeof store.getState>


export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
