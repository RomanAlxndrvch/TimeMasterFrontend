import React, {memo, useCallback, useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoginPassword} from "components/LoginPassword/LoginPassword";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";

import {Menu} from "components/Menu/Menu";
import {EmployeeRespondType, EmployeeType, IFormInput} from "utils/types";
import {useAppDispatch} from "hooks/useAppDispatch";
import {appActions} from "app/app-reducer";
import {employeesActions} from "components/EmployeesList/employees-reducer";


export const EmployeeMainMenu = memo(function () {
        console.log('MainMenu')

        const navigate = useNavigate()
        const dispatch = useAppDispatch()

        //Data from state
        const selectedEmployee = useSelector<AppRootStateType, EmployeeType>((state) => state.employees.selectedEmployee)
        console.log(selectedEmployee)


        return (
            <div>
                <Routes>
                    <Route path={'/employee-menu'} element={<Menu/>}/>
                    <Route path={'/employee-password'} element={<LoginPassword onSubmit={() => {
                    }}/>}/>
                </Routes>
            </div>
        )
    }
)
