import { AuthContextProvider } from "@/features/auth/context/AuthContext";
import { AuthLoader } from "@/lib/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {import.meta.env.DEV && <ReactQueryDevtools />}
            <AuthContextProvider>
                <AuthLoader>{children}</AuthLoader>
            </AuthContextProvider>
            ;
        </QueryClientProvider>
    );
};
