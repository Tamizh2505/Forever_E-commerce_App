import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
  // root is default (project root) so no need to set it explicitly
  build: {
    outDir: 'dist', // default, must match Vercel output
  },
});
