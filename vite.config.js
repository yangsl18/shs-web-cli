import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
    'comps': path.resolve(__dirname, 'src/components'),
    'route': path.resolve(__dirname, 'src/router'),
    'views': path.resolve(__dirname, 'src/views'),
    'styles': path.resolve(__dirname, 'src/styles'),
    'utils': path.resolve(__dirname, 'src/utils'),
    'api': path.resolve(__dirname, 'src/api'),
  },
  esbuild: {

  },
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
