import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  base: "/template-portfolio",
  plugins: [react(), tsconfigPaths()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ".vitest/setup",
    include: ["**/test.{ts,tsx}"],
  },
});
