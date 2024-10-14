import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Pastikan tidak ada konflik port
    strictPort: true, // Gagal jika port sudah dipakai
  },
});
