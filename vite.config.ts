import { defineConfig } from 'vite'

export default defineConfig({
  monaco: {
    languages: ['typescript', 'javascript', 'python']
  },
  optimizeDeps: {
      exclude: ["pyodide"]
  },
  server: {
      fs: {
          allow: ["..."]  // Allow serving files from node_modules
      }
  }
})
