import React from 'react';
import classes from './App.module.css'
import {EmployeeMenu} from "components/EmployeeMenu/EmployeeMenu";
import {EmployeesList} from 'components/EmployeesList/EmployeesList';

import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import {EmployeeRespondType} from "api/timeMaster-api";
import {LoginPassword} from "components/LoginPassword/LoginPassword";


function App() {

    const employeesList = useSelector<AppRootStateType, EmployeeRespondType>(state => state.app.selectedEmployee)

    return (
        <div className={classes.mainAppBlock}>
            <EmployeesList/>
            {Object.keys(employeesList).length === 0 ? <LoginPassword/> : <EmployeeMenu/>}
        </div>

    );
}

export default App;
