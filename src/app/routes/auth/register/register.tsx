"use client";
import styles from "./register.module.scss";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { FormInputText } from "@/components/form-inputs";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

import { DevTool } from "@hookform/devtools";

type FormValues = {
    username: string;
    email: string;
};

export const RegisterRoute = () => {
    const methods = useForm<FormValues>();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("submitted", data);
    };

    /*const onSubmit2 = handleSubmit(async (data) => {
        console.log(JSON.stringify(data));
        const res = await fetch("http://localhost:3000/auth/a", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resJSON = await res.json();
        console.log(resJSON);
    });*/

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.textContainer}>
                    <h5>Create an account</h5>
                    <p>Setup a new account in a minute. </p>

                    <FormProvider {...methods}>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <FormInputText label="Name" name="name" req />
                            <FormInputText label="Email" name="email" req />
                            <FormInputText
                                label="Password"
                                name="password"
                                req
                                type="password"
                            />
                            <FormInputText
                                label="Repeat Password"
                                name="password_repeat"
                                req
                                type="password"
                            />
                            <Button
                                label="Register"
                                variant="primary"
                                size="lg"
                                type="submit"
                            />
                        </form>
                        <DevTool control={control} />
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};
