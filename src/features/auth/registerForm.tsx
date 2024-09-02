import { Button } from "@/components/UI/button";
import { FormInputText } from "@/components/Forms/form-inputs";
import { signUpSchema, TSignUpSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./auth.module.scss";

export default function RegisterForm() {
    const methods = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const { control, reset, handleSubmit, setError } = methods;

    const onSubmit = async (data: TSignUpSchema) => {
        console.log(JSON.stringify(data));

        const res = await fetch("http://192.168.0.21:3000/api/users/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resJSON = await res.json();
        if (!res.ok) {
            alert("Something went wrong");
            return;
        }

        if (resJSON.errors) {
            const errors = resJSON.errors;
            if (errors.email) {
                setError("email", {
                    type: "server",
                    message: errors.email,
                });
            }
            if (errors.password) {
                setError("password", {
                    type: "server",
                    message: errors.password,
                });
            }
            if (errors.password_confirm) {
                setError("password_confirm", {
                    type: "server",
                    message: errors.password_confirm,
                });
            }
        }

        console.log(resJSON);
    };

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <FormInputText label="Name" name="name" />
                <FormInputText label="Email" name="email" />
                <FormInputText
                    label="Password"
                    name="password"
                    type="password"
                />
                <FormInputText
                    label="Repeat Password"
                    name="password_confirm"
                    type="password"
                />
                <Button
                    label="Register"
                    variant="primary"
                    size="lg"
                    type="submit"
                />
            </form>
            <DevTool control={control} />
        </FormProvider>
    );
}
