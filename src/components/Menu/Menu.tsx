import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import {EmployeeType} from "utils/types";

export const Menu = React.memo((function () {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //Data from state
    const selectedEmployee = useSelector<AppRootStateType, EmployeeType>((state) => state.employees.selectedEmployee)
    console.log(selectedEmployee)

    
    return (
        <div>MainMenu</div>
    )
}))