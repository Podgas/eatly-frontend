import { Button } from "@/components/UI/button";
import { FormInputText } from "@/components/Forms/form-inputs";
import { loginSchema, TLoginSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./auth.module.scss";
import { useLogIn } from "./hooks/useLogIn";

export default function LoginForm() {
    const methods = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const { control, reset, handleSubmit, setError } = methods;
    const { logIn, error, isLoading } = useLogIn();

    const onSubmit = async function async(data: TLoginSchema) {
        await logIn(data.email, data.password);
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
                {error && <p className={styles.error}>{error}</p>}
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
