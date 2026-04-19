import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/fsq': {
        target: 'https://places-api.foursquare.com', // ✅ FIXED
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/fsq/, '')
      },
      // IP Location API
      '/ipapi': {
        target: 'https://ipinfo.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ipapi/, '')
      }
    }
  }
})