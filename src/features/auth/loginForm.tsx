import { Button } from "@/components/UI/button";
import { FormInputText } from "@/components/Forms/form-inputs";
import { LoginInput, loginSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./auth.module.scss";
import { useLogin } from "@/lib/auth";

type LoginFormProps = {
    onSuccess: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const methods = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });
    const { control, handleSubmit } = methods;

    const { loginMutation, error } = useLogin({ onSuccess });

    const onSubmit = function async(data: TLoginInput) {
        loginMutation(data);
    };

    return (
        <>
            <div className={styles.textContainer}>
                <p>Please sign-in to your account.</p>
            </div>
            <FormProvider {...methods}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <FormInputText label="Email" name="email" />
                    <FormInputText
                        label="Password"
                        name="password"
                        type="password"
                    />
                    {error && <p className={styles.error}>{error.message}</p>}
                    <Button
                        label="Login"
                        variant="primary"
                        size="lg"
                        type="submit"
                    />
                </form>
                <DevTool control={control} />
            </FormProvider>
        </>
    );
}
