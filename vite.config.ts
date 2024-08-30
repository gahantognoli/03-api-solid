import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  // plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
