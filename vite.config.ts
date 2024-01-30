import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "Murasso.github.io" : "./",
  plugins: [react()],
  optimizeDeps: {
    include: ['react-type-animation'],
  },
});
