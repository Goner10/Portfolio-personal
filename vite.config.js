import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario para GitHub Pages en subcarpeta del usuario
  base: '/Portfolio-personal/',
  build: { outDir: 'docs' }
})
