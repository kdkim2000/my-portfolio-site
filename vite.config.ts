// vite.config.ts - GitHub Actions 최적화 버전
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages 배포 설정
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio-site/' : '/',
  
  // 빌드 최적화
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        // 기본 청크 분할
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material']
        }
      }
    }
  },
  
  // 개발 서버
  server: {
    port: 3000,
    host: true
  },
  
  // 경로 설정
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  // ESBuild 설정
  esbuild: {
    target: 'es2020'
  },
  
  // 의존성 최적화
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material']
  }
});