import styles from "./register.module.scss";
import { Logo } from "@/components/UI/logo";
import RegisterForm from "@/features/auth/registerForm";
import { useNavigate } from "react-router-dom";

export const RegisterRoute = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.textContainer}>
                    <h5>Create an account</h5>
                    <p>Setup a new account in a minute. </p>
                </div>
                <RegisterForm onSuccess={() => navigate("/app")} />
            </div>
        </div>
    );
};
