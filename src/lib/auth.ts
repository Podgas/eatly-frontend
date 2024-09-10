import { AuthConfig, useAuth } from "@/features/auth/hooks/useAuth";
import { apiClient } from "./api/apiClient";

const getUser = async (): Promise<User> => {
    console.log("getUser: ");
    const response = await apiClient.get(`users/me`);
    return response.data;
};

const logOut = async (): Promise<void> => {
    return apiClient.post("users/logout");
};

const logInUser = async (data: TLoginInput): Promise<User> => {
    const response = await apiClient.post("/users/login", data);
    return response.data;
};

const signUpUser = async (data: TSignUpInput): Promise<User> => {
    const response = await apiClient.post("/users/signup", data);
    return response.data;
};

const authConfig: AuthConfig = {
    userFn: getUser,
    loginFn: logInUser,
    signUpFn: signUpUser,
    logoutFn: logOut,
};

export const { AuthLoader, useLogin, useSignUp, useUser } = useAuth(authConfig);

//////////////////////////////////////////////
