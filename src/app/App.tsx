import React, {memo, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchAllEmployees} from "components/EmployeesList/employees-reducer";
import {EmployeesList} from "components/EmployeesList/EmployeesList";
import {LinearProgress} from "@mui/material";
import classes from './App.module.css'
import {EmployeeMainMenu} from "components/EmployeeMainMenu/EmployeeMainMenu";

const App = memo(function () {
    console.log('app')
    const dispatch = useAppDispatch()
    const isEmployeeSelected = useSelector<AppRootStateType, boolean>(state => state.app.isEmployeeSelected)

    useEffect(() => {
        dispatch(fetchAllEmployees())
    }, [dispatch])


    const isAppInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isAppInitialized)

    return (
        <div className={classes.mainAppBlock}>
            {isAppInitialized ? <EmployeesList/> : <LinearProgress/>}

            {isEmployeeSelected && <EmployeeMainMenu/>} {/* Do all logic with MainMenu and password component here. Main
            problem is useEffect in Main Menu component. Depends with some state it should do routing.*/}
        </div>

    );


})


export default App;
