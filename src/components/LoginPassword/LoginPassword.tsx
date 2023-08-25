import React from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, FormControl, Input, InputLabel, OutlinedInput} from "@mui/material";
import {IFormInput} from "utils/types";
import * as yup from "yup"
import classes from "./LoginPassword.module.css";
import {yupResolver} from "@hookform/resolvers/yup";

type LoginPasswordPropsType = {
    onSubmit: (e: string) => void
}

export const LoginPassword = (props: LoginPasswordPropsType) => {

    const schema = yup.object({
        password: yup.string().min(4)
    }).required()

    const {
        control, handleSubmit,
        formState: {errors}
    } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });
    console.log(errors)

    const onSubmit = handleSubmit((data) => {
        console.log(data.password)
    })


    return (
        <div>
            {/*    <form className={classes.formBlock} onSubmit={onSubmit}>
                <Controller
                    render={({field}) => <Input  {...field} className="materialUIInput"/>}
                    name="password"
                    control={control}
                    defaultValue=''
                />

                <Button type={"submit"} variant="contained">Contained</Button>

            </form>*/}


            <div>
                <form className={classes.formBlock} onSubmit={onSubmit}>
                    <Controller
                        render={({field}) => <FormControl
                            className={classes.input}>
                            <InputLabel
                                htmlFor="component-outlined">Password</InputLabel>
                            <OutlinedInput
                                {...field}
                                id="component-outlined"
                                label="Name"
                            />
                        </FormControl>}
                        name="password"
                        control={control}
                        defaultValue=''
                    />

                    <Button className={classes.btn} type={"submit"} variant="contained">Contained</Button>

                </form>
            </div>
        </div>


    )
}