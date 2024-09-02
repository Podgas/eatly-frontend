import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const signUpUser = async function (
    name: string,
    email: string,
    password: string
) {
    try {
        const response = await apiClient.post("users/signup", {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.error || "Signup failed";
        console.log(errorMessage);
    }
};

const logInUser = async function (email: string, password: string) {
    try {
        const response = await apiClient.post("users/login", {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.error || "Login failed";
        console.log(errorMessage);
    }
};

// Export API methods
export { signUpUser, logInUser };
