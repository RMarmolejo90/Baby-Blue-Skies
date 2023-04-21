import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
      build: {
        rollupOptions: {
          input: {
            main: './index.html',
          },
          output: {
            outDir: '../dist',
          }
        },
        assetsInclude: [
          '**/*.webp',
          '/assets/sliderImages',
        ],
      },
      
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
        './src/assets/sliderImages/',
        './src/assets/images/',
      ],
  },
);
