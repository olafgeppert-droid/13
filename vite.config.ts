import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ganz wichtig für GitHub Pages:
  base: '/Google.AI.Studio_v1.23_inkl.Wappen/',
})
