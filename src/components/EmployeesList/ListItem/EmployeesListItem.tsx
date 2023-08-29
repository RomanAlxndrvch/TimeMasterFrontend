import React from "react";
import {Divider, ListItemButton, ListItemText} from "@mui/material";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchSelectedEmployee} from "components/EmployeesList/employees-reducer";
import {useNavigate} from "react-router-dom";


type ListItemPropsType = {
    name: string,
    id: string
}

const EmployeesListItemBM = (props: ListItemPropsType) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const setSelectedEmployee = () => {
        dispatch(fetchSelectedEmployee(props.id))
        navigate('/')
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

export const EmployeesListItem = React.memo(EmployeesListItemBM)