import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [
        'vue-i18n',
        '@intlify/vite-plugin-vue-i18n/messages',
        'fslightbox-vue/v3',
        '@fullcalendar/vue3',
        'vue3-apexcharts',
        'vue3-autocounter'
      ]
    }
  },
  server: {
    port: 3000
  }
})
