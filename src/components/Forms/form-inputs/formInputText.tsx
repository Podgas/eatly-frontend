import { TextField } from "../../UI/textField";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./formInputProps";

export const FormInputText = ({ name, label, type }: FormInputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
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
