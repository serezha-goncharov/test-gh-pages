import { defineConfig } from 'vite';
import { sync } from 'glob';

export default defineConfig({
  root: './src',
  base: '/serezha-goncharov-JSFE2024Q4/christmas-shop/',
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: '../dist',
    rollupOptions: {
      input: sync('./src/**/*.html'.replace(/\\/g, '/')),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
