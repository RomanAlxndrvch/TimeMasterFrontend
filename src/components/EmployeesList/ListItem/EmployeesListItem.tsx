import React from "react";
import {Divider, ListItemButton, ListItemText} from "@mui/material";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchSelectedEmployee} from "app/app-reducer";

type ListItemPropsType = {
    name: string,
    id: string
}

export const EmployeesListItem = (props: ListItemPropsType) => {
    const dispatch = useAppDispatch()

    const setSelectedEmployee = () => {
        dispatch(fetchSelectedEmployee(props.id))
    }

    return (
        <div>
            <ListItemButton onClick={setSelectedEmployee}>
                <ListItemText primary={props.name}/>
            </ListItemButton>
            <Divider/>
        </div>

    )
}