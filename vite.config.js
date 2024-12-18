import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/weatherMyProject',
  plugins: [vue()],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url)),
      '@assets':fileURLToPath(new URL('./src/assets',import.meta.url))
    }
  }
})
