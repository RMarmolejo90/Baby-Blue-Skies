import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input:
        './src/main.jsx',
        
        
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        'Formik',
        'yup',
        'react-awesome-reveal',
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-brands-svg-icons',
        'swiper',
        'axios',
      ]
    }
  }
})
