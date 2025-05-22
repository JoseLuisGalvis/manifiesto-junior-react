import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/manifiesto-junior-react/", // 👈 importante: usa el nombre del repo exacto
});
