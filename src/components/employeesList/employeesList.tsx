import React from "react";
import classes from './employeesList.module.css'
import {Button} from "@mui/material";

export const EmployeesList = () => {
    return (
        <div className={classes.mainBlock}>
            <Button variant={"contained"} className={classes.listButton}>FOR ADMIN</Button>
            LIST
        </div>
    )
}