import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 5000,
      hmr: {
        overlay: true, // Show error overlay
        clientPort: 5000,
      },
      watch: {
        usePolling: false, // Use native file system events (faster)
        ignored: ["**/node_modules/**", "**/.git/**"],
      },
    },
  },
});
