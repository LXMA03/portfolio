import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // also add to index.css
import path from "path"


export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Helps with imports, don't need to type out the entire path for folder in /src
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
