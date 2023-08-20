import React from 'react';
import {EmployeesList} from '../components/employeesList/employeesList';
import classes from './App.module.css'
import {Button} from "@mui/material";
import {EmployeeMenu} from "../components/employeeMenu/employeeMenu";


function App() {
    return (
        <div className={classes.mainAppBlock}>
            <EmployeesList/>
            <EmployeeMenu/>
        </div>

    );
}

export default App;
