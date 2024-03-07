import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
