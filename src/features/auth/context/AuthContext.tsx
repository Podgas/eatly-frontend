import { createContext, Dispatch, useReducer, useEffect } from "react";

interface AuthState {
    user: { id: string; name: string } | null;
}

export interface AuthAction {
    type: "LOGIN" | "LOGOUT";
    payload?: { id: string; name: string } | void;
}

const initialState: AuthState = {
    user: null,
};

interface AuthContextType {
    state: AuthState;
    dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType>({
    state: initialState,
    dispatch: () => undefined,
});

export const authReducer = (
    state: AuthState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload || null,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user) dispatch({ type: "LOGIN", payload: user });
    }, []);
    console.log("AuthContext state: ", state);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
