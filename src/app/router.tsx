import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: "/",
            lazy: async () => {
                const { LandingRoute } = await import("./routes");
                return { Component: LandingRoute };
            },
        },
        {
            path: "/auth/login",
            lazy: async () => {
                const { LoginRoute } = await import("./routes");
                return { Component: LoginRoute };
            },
        },
        {
            path: "/auth/register",
            lazy: async () => {
                const { RegisterRoute } = await import("./routes");
                return { Component: RegisterRoute };
            },
        },
        {
            path: "/app",
            lazy: async () => {
                const { DashboardRoute } = await import("./routes");
                return { Component: DashboardRoute };
            },
        },
    ]);

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return <RouterProvider router={router} />;
};
