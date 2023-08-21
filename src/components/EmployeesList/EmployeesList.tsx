import React from "react";
import classes from '../EmployeesList/EmployeesList.module.css'
import {Button, List} from "@mui/material";
import {ListItem} from "../ListItem/ListItem";


export const EmployeesList = () => {
    return (
        <div className={classes.mainBlock}>
            <List component="nav" aria-label="employees list">
                <ListItem/>
            </List>
            <Button variant={"contained"} className={classes.listButton}>FOR ADMIN</Button>
        </div>
    )
}