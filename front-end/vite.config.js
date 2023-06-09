import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
      build: {
        manifest: true,
        rollupOptions: {
          input: {
            main: './index.html',
          },
        },

        assetsInclude:[
          '*.jpg',
          './assets/images',]
      },
      // external: [
      //   'react',
      //   'react-dom',
      //   'react-router-dom',
      //   'Formik',
      //   'yup',
      //   'react-awesome-reveal',
      //   '@fortawesome/react-fontawesome',
      //   '@fortawesome/free-brands-svg-icons',
      //   'swiper',
      //   'axios',
      // ],
  },
);
