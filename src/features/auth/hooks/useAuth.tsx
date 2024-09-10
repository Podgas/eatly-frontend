import {
    MutationFunction,
    QueryFunction,
    QueryKey,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { saveToLocalStorage } from "@/lib/localStorage";

type UseAuthProps = {
    onSuccess: () => void;
};

export interface AuthConfig {
    userFn: QueryFunction<User, QueryKey>;
    loginFn: MutationFunction<User, TLoginInput>;
    signUpFn: MutationFunction<User, TSignUpInput>;
    logoutFn: MutationFunction<unknown, unknown>;
    userKey?: QueryKey;
}

export function useAuth(config: AuthConfig) {
    const { userFn, loginFn, signUpFn, logoutFn, userKey = ["user"] } = config;
    function useUser() {
        return useQuery({
            queryKey: userKey,
            queryFn: userFn,
        });
    }

    function useLogin({ onSuccess }: UseAuthProps) {
        const queryClient = useQueryClient();

        const { mutate: loginMutation, error } = useMutation({
            mutationFn: loginFn,
            onSuccess: (data: User) => {
                queryClient.setQueryData<User>(userKey, data);
                saveToLocalStorage("user", data.accessToken);
                console.log("User logged in: ", data);
                onSuccess();
            },
            onError: (error) => {
                console.error("Error on SignUp hook: ", error.message);
            },
        });

        return { loginMutation, error };
    }

    function useSignUp({ onSuccess }: UseAuthProps) {
        const queryClient = useQueryClient();

        const { mutate: signUpMutation, error } = useMutation({
            mutationFn: signUpFn,
            onSuccess: (data: User) => {
                queryClient.setQueryData<User>(userKey, data);
                saveToLocalStorage("user", data.accessToken);
                console.log("User signed up: ", data);
                onSuccess();
            },
            onError: (error) => {
                console.error("Error on SignUp hook: ", error.message);
            },
        });

        return { signUpMutation, error };
    }

    function AuthLoader({ children }: { children: React.ReactNode }) {
        const { isSuccess, isFetched, status, data, error } = useUser();

        if (isSuccess) {
            return <>{children}</>;
        }
        if (!isFetched) {
            return <>Loading...</>;
        }
        if (status === "error") {
            return <>Error: {error?.message}</>;
        }
        return null;
    }

    return { AuthLoader, useUser, useLogin, useSignUp };
}
