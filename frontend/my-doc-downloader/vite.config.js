import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // or 0.0.0.0 to expose to your network
    port: 5173,
  },
});
