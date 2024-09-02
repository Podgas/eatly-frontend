import React from "react";
import styles from "./logo.module.scss";
import logo from "@/assets/eatly-logo.svg";

interface LogoProps {
    showText?: boolean;
}

export const Logo = ({ showText = true }: LogoProps) => {
    return (
        <div className={styles.logoContainer}>
            <img className={styles.image} src={logo} alt="eatly" />
            {showText && <span className={styles.text}>eatly</span>}
        </div>
    );
};
