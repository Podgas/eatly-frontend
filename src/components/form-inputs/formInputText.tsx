import { TextField } from "../textField";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./formInputProps";

export const FormInputText = ({ name, label, req, type }: FormInputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: { value: req, message: "This field is requried" },
                validate: (value) => {
                    if (type === "password" && value.length < 8) {
                        return "Password must be at least 8 characters";
                    }
                    return true;
                },
            }}
            render={({ field }) => (
                <>
                    <TextField
                        name={name}
                        label={label}
                        variant="outlined"
                        size="lg"
                        value={field.value}
                        onChange={field.onChange}
                        error={!!errors[name]}
                        helperText={errors[name]?.message?.toString()}
                        inputType={type}
                    />
                </>
            )}
        />
    );
};
