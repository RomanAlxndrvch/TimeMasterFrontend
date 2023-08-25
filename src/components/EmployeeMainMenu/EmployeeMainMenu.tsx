import React, {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoginPassword} from "components/LoginPassword/LoginPassword";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";

import {Menu} from "components/Menu/Menu";
import {EmployeeType, IFormInput} from "utils/types";


export const EmployeeMainMenu = () => {
    const [state, setState] = useState('')
    //hooks
    const navigate = useNavigate()

    //Data from state
    const selectedEmployee = useSelector<AppRootStateType, EmployeeType>(state => state.app.selectedEmployee)

    // Logic
    useEffect(() => {
        selectedEmployee.isLoggedIn ? navigate('/employee-menu') : navigate('/employee-password')
    }, [selectedEmployee, navigate])

    return (
        <div>
            <Routes>
                <Route path={'/employee-menu'} element={<Menu/>}/>
                <Route path={'/employee-password'} element={<LoginPassword onSubmit={setState}/>}/>
            </Routes>
        </div>
    )
}