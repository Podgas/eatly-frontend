import { AuthLayout } from "@/components/layouts/authLayout";
import LoginForm from "@/features/auth/loginForm";
import { useNavigate } from "react-router-dom";

export const LoginRoute = () => {
    const navigate = useNavigate();
    return (
        <AuthLayout>
            <LoginForm onSuccess={() => navigate("/app")} />
        </AuthLayout>
    );
};
