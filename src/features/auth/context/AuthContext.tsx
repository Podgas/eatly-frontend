import { useUser } from "@/lib/auth";
import { createContext, Dispatch, useReducer, useEffect } from "react";

interface AuthState {
    user: User | null;
}

export interface AuthAction {
    type: "LOGIN" | "LOGOUT";
    payload?: User | null;
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
    const user = useUser();

    useEffect(() => {
        if (user) dispatch({ type: "LOGIN", payload: user.data });
    }, []);
    //console.log("AuthContext state: ", state);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
