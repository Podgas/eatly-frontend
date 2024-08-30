import React from "react";
import styles from "./landing.module.scss";

const LandingRoute = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h1>
                    Welcome to <b>e</b>atly!
                </h1>
                <p>This is a simple landing page for the app.</p>
                <div className={styles.buttonContainer}>
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default LandingRoute;
