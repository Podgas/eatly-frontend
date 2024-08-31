import React from "react";
import styles from "./button.module.scss";
import { generateClassNames } from "@/utils/componentUtils";

export interface ButtonProps {
    label: string;
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
}

export const Button = (props: ButtonProps) => {
    const cn = generateClassNames(props, styles["btn"], styles);
    return <button className={cn}>{props.label}</button>;
};
