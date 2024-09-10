import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./authLayout.module.scss";
import { Logo } from "@/components/UI";
import { useUser } from "@/features/auth/hooks/useUser";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    //const user = useUser();

    const navigate = useNavigate();

    /* useEffect(() => {
        if (user.data) navigate("/app", { replace: true });
    }, [user.data, navigate]);  */

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                {children}
            </div>
        </div>
    );
};
