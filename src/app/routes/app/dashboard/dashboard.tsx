import { Button } from "@/components/UI";

const DashboardRoute = () => {
    const handleLogout = () => {};

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
