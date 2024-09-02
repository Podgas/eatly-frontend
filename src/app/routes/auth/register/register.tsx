import styles from "./register.module.scss";
import { Logo } from "@/components/UI/logo";
import RegisterForm from "@/features/auth/registerForm";

export const RegisterRoute = () => {
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
                <RegisterForm />
            </div>
        </div>
    );
};
