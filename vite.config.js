import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin()],
  server: {
    open: true,
    proxy: {
      '/assets': {
        target: 'http://localhost:5173', // Replace with your development server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, ''),
      },
    },
  }
})
