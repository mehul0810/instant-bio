import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/instant-bio/', // important for GH Pages
  build: {
    outDir: 'dist'
  }
});
