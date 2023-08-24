import React, {useEffect} from "react";
import classes from '../EmployeesList/EmployeesList.module.css'
import {Button, List} from "@mui/material";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchAllEmployees} from "components/EmployeesList/employess-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";

import {EmployeesListItem} from "components/EmployeesList/ListItem/EmployeesListItem";
import {EmployeeRespondType} from "api/timeMaster-api";


export const EmployeesList = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAllEmployees())
    }, [dispatch])


    const employeesList = useSelector<AppRootStateType, EmployeeRespondType[]>(state => state.employees.allEmployees)

    console.log(employeesList)

    return (
        <div className={classes.mainBlock}>
            <List component="nav" aria-label="employees list">
                {employeesList.map((el) => {
                    return <EmployeesListItem name={el.name} id={el._id} key={el._id}/>
                })}
            </List>
            <Button variant={"contained"} className={classes.listButton}>FOR ADMIN</Button>
        </div>
    )
}