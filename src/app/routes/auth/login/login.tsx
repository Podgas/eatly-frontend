import styles from "./login.module.scss";
import { Logo } from "@/components/UI/logo";
import LoginForm from "@/features/auth/loginForm";

export const LoginRoute = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.textContainer}>
                    <p>Please sign-in to your account.</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};
