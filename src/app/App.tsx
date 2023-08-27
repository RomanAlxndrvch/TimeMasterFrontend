import React from 'react';
import classes from './App.module.css'
import {EmployeeMainMenu} from "components/EmployeeMainMenu/EmployeeMainMenu";
import {EmployeesList} from 'components/EmployeesList/EmployeesList';

function AppBM() {
    console.log('app')
    return (
        <div className={classes.mainAppBlock}>
            <EmployeesList/>
            {/*<EmployeeMainMenu/>*/}
        </div>

    );
}

const App = React.memo(AppBM)

export default App;
