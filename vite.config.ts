import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // <-- 1. Impor plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Tambahkan plugin PWA
    VitePWA({
      registerType: 'autoUpdate', // Otomatis update service worker
      injectRegister: 'auto',
      // 'manifest' akan dibaca dari public/manifest.json
      manifest: {
        name: 'Perpustakaan Pribadi',
        short_name: 'MyLibrary',
        description: 'Aplikasi PWA Perpustakaan Pribadi',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      // 'workbox' akan men-cache semua file di folder 'dist'
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});