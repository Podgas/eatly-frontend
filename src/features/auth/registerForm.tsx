import { Button } from "@/components/UI/button";
import { FormInputText } from "@/components/Forms/form-inputs";
import { signUpSchema, SignUpInput } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./auth.module.scss";
import { useSignUp } from "@/lib/auth";

type RegisterFormProps = {
    onSuccess: () => void;
};

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
    const methods = useForm<SignUpInput>({
        resolver: zodResolver(signUpSchema),
    });

    const { control, handleSubmit } = methods;
    const { signUpMutation, error } = useSignUp({ onSuccess });

    const onSubmit = function async(data: TSignUpInput) {
        signUpMutation(data);
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
                {error && <p className={styles.error}>{error.message}</p>}
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
