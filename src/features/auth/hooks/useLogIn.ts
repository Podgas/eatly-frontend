import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { logInUser } from "@/lib/apiClient";
import { useNavigate } from "react-router-dom";

export const useLogIn = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const { dispatch, state } = useAuthContext();
    const navigate = useNavigate();

    const logIn = async function (email: string, password: string) {
        setIsloading(true);
        setError(null);

        try {
            const data = await logInUser(email, password);
            dispatch({ type: "LOGIN", payload: data });
            localStorage.setItem("user", JSON.stringify(data));
            setIsloading(false);
            console.log("Login successful", data);
            navigate("/app");
        } catch (err: any) {
            const errorMessage = err.message || "Signup failed";
            setError(errorMessage);
            setIsloading(false);
        }
    };

    return { logIn, error, isLoading };
};
