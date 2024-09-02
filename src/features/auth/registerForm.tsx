import { Button } from "@/components/UI/button";
import { FormInputText } from "@/components/Forms/form-inputs";
import { signUpSchema, TSignUpSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./auth.module.scss";
import { useSignUp } from "./hooks/useSignup";

export default function RegisterForm() {
    const methods = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const { control, reset, handleSubmit, setError } = methods;
    const { signUp, error, isLoading } = useSignUp();

    const onSubmit = async function async(data: TSignUpSchema) {
        await signUp(data.name, data.email, data.password);
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
