import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
    label: string;
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
}

function generateClassNames({ ...props }: ButtonProps): string {
    const className = `${styles["btn"]} ${styles[props.variant]} ${styles[props.size]}`;
    return className;
}

export const Button = (props: ButtonProps) => {
    return <button className={generateClassNames(props)}>{props.label}</button>;
};
