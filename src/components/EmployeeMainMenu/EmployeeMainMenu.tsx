import React, {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoginPassword} from "components/LoginPassword/LoginPassword";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";

import {Menu} from "components/Menu/Menu";
import {EmployeeType, IFormInput} from "utils/types";
import {useAppDispatch} from "hooks/useAppDispatch";
import {appActions} from "app/app-reducer";
import {logDOM} from "@testing-library/react";


export const EmployeeMainMenu = () => {
    //hooks
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //Data from state
    const selectedEmployee = useSelector<AppRootStateType, EmployeeType>(state => state.app.selectedEmployee)

    // Logic
    useEffect(() => {
        selectedEmployee.isLoggedIn ? navigate('/employee-menu') : navigate('/employee-password')
    }, [selectedEmployee, navigate])


    const checkPassword = (password: string | undefined) => {
        if (password === selectedEmployee.password.toString()) {
            dispatch(appActions.changeLoginInStatus({isLoginIn: true}))
        }
    }

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<div>Select one</div>}/>
                <Route path={'/employee-menu'} element={<Menu/>}/>
                <Route path={'/employee-password'} element={<LoginPassword onSubmit={checkPassword}/>}/>
            </Routes>
        </div>
    )
}