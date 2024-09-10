import styles from "./landing.module.scss";
import { Button } from "@/components/UI/button";
import { useUser } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

const LandingRoute = () => {
    const user = useUser();
    const navigate = useNavigate();

    const handleStart = () => {
        if (user.data) {
            navigate("/app");
        } else {
            navigate("/auth/login");
        }
    };
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h4>
                    Welcome to <b>e</b>atly! 🍔
                </h4>
                <p>This is a simple landing page for the app.</p>
                <div className={styles.buttonContainer}>
                    <Button
                        variant="primary"
                        size="md"
                        label="Enter"
                        onClick={handleStart}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingRoute;
