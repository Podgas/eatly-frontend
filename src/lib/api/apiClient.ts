import Axios, { InternalAxiosRequestConfig } from "axios";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    const accessToken = JSON.parse(localStorage.getItem("user")!);

    config.headers.Accept = "application/json";
    console.log("accessToken: ", accessToken);
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    config.withCredentials = true;
    return config;
}

export const apiClient = Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        const errorMessage =
            error.response?.data?.error || "Authentication failed";
        throw new Error(errorMessage);
    }
);
