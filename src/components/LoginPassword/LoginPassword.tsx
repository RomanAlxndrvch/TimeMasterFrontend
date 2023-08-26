import React from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {IFormInput} from "utils/types";
import * as yup from "yup"
import classes from "./LoginPassword.module.css";
import {yupResolver} from "@hookform/resolvers/yup";

type LoginPasswordPropsType = {
    onSubmit: (e: string | undefined) => void
}


export const LoginPassword = (props: LoginPasswordPropsType) => {

    const schema = yup.object({
        password: yup.string().min(4)
    }).required()

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>({
        defaultValues: {
            password: ''
        },
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit((data) => {
        props.onSubmit(data.password)
    })


    return (
        <div>
            <form className={classes.formBlock} onSubmit={onSubmit}>
                <Controller
                    render={({field}) => <TextField
                        {...field}
                        label={errors.password?.message ? 'Password to short' : 'Password'}
                        error={!!errors.password?.message}
                        variant="standard" type={'password'}
                        className={classes.input}/>}
                    name="password"
                    control={control}
                    defaultValue=''
                />

                <Button className={classes.btn} type={"submit"} variant="contained">Contained</Button>

            </form>

        </div>


    )
}