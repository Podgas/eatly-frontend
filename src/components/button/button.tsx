import React from "react";
import styles from "./button.module.scss";
import { generateClassNames } from "@/utils/componentUtils";

export interface ButtonProps {
    label: string;
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button = (props: ButtonProps) => {
    const cn = generateClassNames(props, styles["btn"], styles);
    return (
        <button className={cn} onClick={props.onClick} type={props.type}>
            {props.label}
        </button>
    );
};
