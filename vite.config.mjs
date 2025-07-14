// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

console.log('📦 Vite config loaded – server.port will be', process.env.PORT || 'from config')

export default defineConfig({
  base: '/healthcare-ar-proto/',
  root: '.',      
  plugins: [ react() ],
  server: { 
    port: 4000,         
    strictPort: true,   
    host: '127.0.0.1', 
    open: true        
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }

})