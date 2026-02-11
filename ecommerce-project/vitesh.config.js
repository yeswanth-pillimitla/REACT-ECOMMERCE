import { defineConfig } from 'vitest/config.js'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',//compoenst test or integration tests to work
    globals: true,
    setupFiles: './setupTests.js',
  }
});