import { ChangeEvent } from "react";
import styles from "./textField.module.scss";
import { generateClassNames } from "@/utils/componentUtils";

interface TextFieldProps {
    name: string;
    label: string;
    inputType?: "text" | "password";
    variant?: "standard" | "outlined" | "filled";
    value?: string;
    size?: "sm" | "lg";
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
}

export const TextField = ({ ...props }: TextFieldProps) => {
    const className = generateClassNames(props, styles["input"], styles);
    const helperTextClassName = generateClassNames(
        { error: props.error },
        styles["helperText"],
        styles
    );

    return (
        <div className={styles.fieldRoot}>
            <div className={styles.inputContainer}>
                <input
                    className={className}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    placeholder=" "
                    name={props.name}
                    type={props.inputType}
                />
                <label className={styles.label}>{props.label}</label>
            </div>
            {props.error && (
                <span className={helperTextClassName}>{props.helperText}</span>
            )}
        </div>
    );
};
