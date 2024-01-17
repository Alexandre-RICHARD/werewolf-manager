import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        "server": {"port": parseInt(env.VITE_PORT)},
        "resolve": {
            "alias": {
                "@": path.resolve(__dirname, "./src"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@page": path.resolve(__dirname, "./src/components/page"),
                "@parts": path.resolve(__dirname, "./src/components/parts"),
                "@store": path.resolve(__dirname, "./src/store"),
                "@slices": path.resolve(__dirname, "./src/store/slices"),
                "@styles": path.resolve(__dirname, "./src/styles"),
                "@tests": path.resolve(__dirname, "./src/tests"),
                "@utilities": path.resolve(__dirname, "./src/utilities"),
            },
        },
        "plugins": [react()],
        "build": {
            "assetsDir": "./",
            "outDir": "./build",
            "cssCodeSplit": false,
            "rollupOptions": {"input": {"app": "./index.html"}},
        },
        "test": {
            "globals": true,
            "environment": "jsdom",
            "setupFiles": ["src/tests/setup.ts"],
            "env": {"IS_REACT_ACT_ENVIRONMENT": "true"},
        },
    };
});
