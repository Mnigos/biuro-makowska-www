import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    exclude: ['**/node_modules/**'],
    coverage: {
      exclude: [
        '**/node_modules/**',
        '**/modules/**',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
      reporter: ['text', 'json', 'html'],
    },
  },
  define: {
    global: 'globalThis',
  },
})
