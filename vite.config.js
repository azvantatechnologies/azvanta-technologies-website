import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Allows EMAILJS_ variables to be used in frontend code.
  envPrefix: ["VITE_", "EMAILJS_"],
});
