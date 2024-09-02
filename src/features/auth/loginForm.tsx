import { Button } from "@/components/UI/button";
import { FormInputText } from "@/components/Forms/form-inputs";
import { loginSchema, TLoginSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./auth.module.scss";

export default function LoginForm() {
    const methods = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const { control, reset, handleSubmit, setError } = methods;

    const onSubmit = async (data: TLoginSchema) => {
        console.log(JSON.stringify(data));

        const res = await fetch("http://192.168.0.21:3000/api/users/login", {
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
        }

        console.log(resJSON);
    };

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <FormInputText label="Email" name="email" />
                <FormInputText
                    label="Password"
                    name="password"
                    type="password"
                />
                <Button
                    label="Login"
                    variant="primary"
                    size="lg"
                    type="submit"
                />
            </form>
            <DevTool control={control} />
        </FormProvider>
    );
}
