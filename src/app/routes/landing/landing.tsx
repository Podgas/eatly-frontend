import React from "react";
import styles from "./landing.module.scss";
import { Button } from "@/components/UI/button";
import { Link } from "react-router-dom";

const LandingRoute = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h4>
                    Welcome to <b>e</b>atly!
                </h4>
                <p>This is a simple landing page for the app.</p>
                <div className={styles.buttonContainer}>
                    <Link to="/auth/login">
                        <Button variant="primary" size="md" label="Login" />
                    </Link>
                    <Link to="/auth/register">
                        <Button variant="primary" size="md" label="Register" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingRoute;
