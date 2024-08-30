"use client";
import { useForm } from "react-hook-form";
import styles from "./register.module.scss";

export const RegisterRoute = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        console.log(JSON.stringify(data));
        const res = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resJSON = await res.json();
        console.log(resJSON);
    });

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={onSubmit} className={styles["form"]}>
                <input
                    type="text"
                    {...register("username", {
                        required: "Username is required",
                    })}
                    placeholder="Username"
                />
                {errors.username && (
                    <span className={styles["error"]}>
                        {errors.username.message as string}
                    </span>
                )}
                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email"
                />
                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    placeholder="Password"
                />
                <input
                    type="password"
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                    })}
                    placeholder="Confirm Password"
                />

                <button>Register</button>
            </form>
        </div>
    );
};
