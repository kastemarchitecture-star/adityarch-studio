import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

// Konfigurasi standar tanpa pengecekan modul eksternal
export default defineConfig({
  plugins: [react()],
})
