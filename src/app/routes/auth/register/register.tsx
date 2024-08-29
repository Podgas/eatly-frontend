import React from "react";
import styles from "./register.module.scss";

export const RegisterRoute = () => {
    return (
        <div className={styles["register-container"]}>
            <div className={styles["form-container"]}>
                <form className={styles["form"]}>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />

                    <button>Register</button>
                </form>
            </div>
        </div>
    );
};
