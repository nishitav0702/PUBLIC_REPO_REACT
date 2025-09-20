import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/PUBLIC_REPO_REACT",
  plugins: [react()],
})
