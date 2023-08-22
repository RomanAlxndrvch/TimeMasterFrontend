import React, {useEffect} from "react";
import classes from '../EmployeesList/EmployeesList.module.css'
import {Button, List, ListItem} from "@mui/material";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchAllEmployees} from "components/EmployeesList/employess-reducer";


export const EmployeesList = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllEmployees())
    }, [])

    
    return (
        <div className={classes.mainBlock}>
            <List component="nav" aria-label="employees list">
                <ListItem/>
            </List>
            <Button variant={"contained"} className={classes.listButton}>FOR ADMIN</Button>
        </div>
    )
}