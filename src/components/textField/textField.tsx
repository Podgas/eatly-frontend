import React, { ChangeEvent, useState } from "react";
import styles from "./textField.module.scss";
import { generateClassNames } from "@/utils/componentUtils";

interface TextFieldProps {
    label: string;
    variant?: "standard" | "outlined" | "filled";
    value?: string;
    size?: "sm" | "lg";
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: boolean;
}

export const TextField = ({ ...props }: TextFieldProps) => {
    const className = generateClassNames(props, styles["input"], styles);

    //State hooks
    const [inputValue, setInputValue] = useState("");

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);

        setInputValue(event.target.value);
    };

    return (
        <div className={styles.fieldRoot}>
            <div className={styles.inputContainer}>
                <input
                    className={className}
                    value={inputValue}
                    onChange={handleValueChange}
                    disabled={props.disabled}
                    placeholder=" "
                />
                <label className={styles.label}>{props.label}</label>
            </div>
        </div>
    );
};
