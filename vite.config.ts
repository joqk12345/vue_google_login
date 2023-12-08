import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Server } from 'node:http'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: 'chrome',
    port: 8001,
    host: '0.0.0.0',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
