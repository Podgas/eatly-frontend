import { AppProvider } from "./provider";
import { AppRouter } from "./router";
export function App() {
    return (
        <div>
            <AppProvider>
                <AppRouter />
            </AppProvider>
        </div>
    );
}
