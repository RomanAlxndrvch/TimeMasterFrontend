import React from 'react';
import classes from './App.module.css'
import {EmployeeMainMenu} from "components/EmployeeMainMenu/EmployeeMainMenu";
import {EmployeesList} from 'components/EmployeesList/EmployeesList';

function App() {
    return (
        <div className={classes.mainAppBlock}>
            <EmployeesList/>
            <EmployeeMainMenu/>
        </div>

    );
}

export default App;
