import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react(), viteTsconfigPaths()],
    server: {
        port: 5173,
    },
    preview: {
        port: 5173,
    },
    optimizeDeps: { exclude: ["fsevents"] },
    build: {
        rollupOptions: {
            external: ["fs/promises"],
            output: {
                experimentalMinChunkSize: 3500,
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/styles/global" as c;`,
            },
        },
    },
});
