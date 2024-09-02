import { AuthContextProvider } from "@/features/auth/context/AuthContext";
import React from "react";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};
