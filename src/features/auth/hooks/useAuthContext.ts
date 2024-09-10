import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used within an AuthContextProvider"
        );
    }

    return context;
};
