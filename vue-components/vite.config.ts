
// Plugins
import vue from '@vitejs/plugin-vue'

// Utilities
import { defineConfig } from 'vite'

export default defineConfig({    
  build: {
    lib: {
      entry: './src/use.js',
      name: 'trame_gantt',
      formats: ["umd"],
      fileName: 'trame-gantt',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
    },
    outDir: "../trame_gantt/module/serve",
    assetsDir: ".",
  },
  base: "./",
  plugins: [vue()]
});
