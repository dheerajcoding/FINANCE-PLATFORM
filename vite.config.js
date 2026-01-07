import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',
  // Load `.env` from the repository root (one level above `client/`).
  // Vite loads env files from `envDir` (default: `root`).
  envDir: '..',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
