import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defaultServerConditions, defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// The SSR bundle runs as a Cloudflare Worker, so npm deps must be bundled in
// (there is no node_modules at runtime). `node:` builtins stay external and are
// provided by the nodejs_compat flag.
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  ssr: {
    ...(command === "build"
      ? {
          target: "webworker" as const,
          resolve: {
            conditions: [
              "workerd",
              "worker",
              "browser",
              ...defaultServerConditions.filter((c) => c !== "node"),
            ],
          },
        }
      : {}),
    noExternal: command === "build" ? true : undefined,
    external: ["cloudflare:workers"],
  },
  build: {
    rollupOptions: { external: [/^cloudflare:/] },
  },
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    react(),
  ],
}));
