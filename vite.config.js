import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario para GitHub Pages: ajusta rutas de assets bajo /<repo>/
  base: '/Portfolio-personal/',
})
