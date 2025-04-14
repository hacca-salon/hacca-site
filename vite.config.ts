import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && /\.(jpg|png|gif)$/.test(assetInfo.name)) {
            return 'assets/images/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
      ignored: ['!**/node_modules/**', '**/dist/**', '**/.git/**'],
      followSymlinks: false,
    },
    hmr: {
      overlay: true,
    },
  },
});