import React from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, Input} from "@mui/material";
import {IFormInput} from "utils/types";
import classes from "./LoginPassword.module.css";

type LoginPasswordPropsType = {
    onSubmit: (e: string) => void
}

export const LoginPassword = (props: LoginPasswordPropsType) => {

    const {control, handleSubmit} = useForm<IFormInput>({});


    const onSubmit = handleSubmit((data) => {
        console.log(data.password)
    })


    return (
        <div>
            <form className={classes.formBlock} onSubmit={onSubmit}>
                <Controller
                    render={({field}) => <Input  {...field} className="materialUIInput"/>}
                    name="password"
                    control={control}
                    defaultValue=''
                />

                <Button type={"submit"} variant="contained">Contained</Button>

            </form>
        </div>
    )
}