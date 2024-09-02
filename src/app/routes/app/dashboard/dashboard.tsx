import { Button } from "@/components/UI";
import { useLogout } from "@/features/auth/hooks/useLogOut";

const DashboardRoute = () => {
    const { logOut } = useLogout();
    const handleLogout = () => {
        logOut();
    };

    return (
        <div>
            <h3>Dashboard</h3>
            <Button
                onClick={handleLogout}
                label="Logout"
                variant="primary"
                size="lg"
            />
        </div>
    );
};
export default DashboardRoute;
