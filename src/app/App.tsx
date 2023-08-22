import React, {useEffect} from 'react';
import classes from './App.module.css'
import {Button} from "@mui/material";
import {EmployeeMenu} from "components/EmployeeMenu/EmployeeMenu";
import {EmployeesList} from 'components/EmployeesList/EmployeesList';
import {fetchAllEmployees} from "components/EmployeesList/employess-reducer";
import {useAppDispatch} from "hooks/useAppDispatch";


function App() {

    return (
        <div className={classes.mainAppBlock}>
            <EmployeesList/>
            <EmployeeMenu/>
        </div>

    );
}

export default App;
