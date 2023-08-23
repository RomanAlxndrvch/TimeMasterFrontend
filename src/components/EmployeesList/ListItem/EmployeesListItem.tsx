import React from "react";
import {Divider, ListItemButton, ListItemText} from "@mui/material";

type ListItemPropsType = {
    name: string
}

export const EmployeesListItem = (props: ListItemPropsType) => {
    return (
        <div>
            <ListItemButton>
                <ListItemText primary={props.name}/>
            </ListItemButton>
            <Divider/>
        </div>

    )
}