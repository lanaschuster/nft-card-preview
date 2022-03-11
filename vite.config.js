import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nft-card-preview/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/_variables.scss";
        `
      }
    }
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
})
