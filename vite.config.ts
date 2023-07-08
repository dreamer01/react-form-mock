/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as vite from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default vite.defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
