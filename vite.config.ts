import { defineConfig } from 'vite'

export default defineConfig({
  // Konfigurasi dasar tanpa plugin tambahan untuk menghindari bentrok dependensi
  build: {
    outDir: 'dist',
  }
})
