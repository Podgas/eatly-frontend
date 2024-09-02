import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signUpUser } from "@/lib/apiClient";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const { dispatch, state } = useAuthContext();

    const signUp = async function (
        name: string,
        email: string,
        password: string
    ) {
        setIsloading(true);
        setError(null);

        try {
            const data = await signUpUser(name, email, password);
            dispatch({ type: "LOGIN", payload: data });
            localStorage.setItem("user", JSON.stringify(data));
            setIsloading(false);
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || "Signup failed";
            setError(errorMessage);
            setIsloading(false);
        }
    };

    return { signUp, error, isLoading };
};
