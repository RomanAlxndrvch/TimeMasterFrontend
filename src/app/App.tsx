import React, {memo, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchAllEmployees} from "components/EmployeesList/employees-reducer";
import {EmployeesList} from "components/EmployeesList/EmployeesList";
import {LinearProgress} from "@mui/material";
import classes from './App.module.css'
import {LoginPassword} from "components/LoginPassword/LoginPassword";
import {EmployeeType} from "utils/types";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Menu} from "components/Menu/Menu";
import {appActions} from "app/app-reducer";

const App = memo(function () {
    console.log('app')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const isEmployeeSelected = useSelector<AppRootStateType, boolean>(state => state.app.isEmployeeSelected)
    const isAppInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isAppInitialized)
    const selectedEmployee = useSelector<AppRootStateType, EmployeeType>(state => state.employees.selectedEmployee)

    useEffect(() => {
        dispatch(fetchAllEmployees())
    }, [dispatch])


    const onSubmit = (password: string | undefined) => {
        if (password) {
            if (selectedEmployee.password === +password) navigate('/employee-menu')
            dispatch(appActions.changeIsEmployeeBeenSelected({status: false}))
        }
    }

    return (
        <div>
            {!isAppInitialized && <LinearProgress/>}
            <div className={classes.mainAppBlock}>

                {isAppInitialized && <EmployeesList/>}

                {isEmployeeSelected && <LoginPassword onSubmit={onSubmit}/>}

                <Routes>
                    <Route path={'/'} element={!isEmployeeSelected && <div>Select One</div>}/>
                    <Route path={'/employee-menu'} element={<Menu/>}/>
                </Routes>
            </div>
        </div>


    );


})


export default App;
