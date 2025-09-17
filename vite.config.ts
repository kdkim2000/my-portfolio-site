// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: '좋은길벗 Portfolio',
        short_name: 'Portfolio',
        description: 'SSAFY 멘토 좋은길벗의 포트폴리오',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  
  // 빌드 최적화 설정
  build: {
    // 출력 디렉토리
    outDir: 'dist',
    
    // 소스맵 생성 (프로덕션에서는 false 권장)
    sourcemap: false,
    
    // 번들 사이즈 경고 임계값 (KB)
    chunkSizeWarningLimit: 1000,
    
    // Rollup 옵션
    rollupOptions: {
      output: {
        // 청크 분할 전략
        manualChunks: {
          // React 관련 라이브러리를 별도 청크로 분리
          'react-vendor': ['react', 'react-dom'],
          
          // MUI 관련 라이브러리를 별도 청크로 분리
          'mui-vendor': [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled'
          ],
          
          // 기타 라이브러리들
          'utils': ['lodash-es']
        },
        
        // 파일명 패턴 설정
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    
    // 압축 설정
    minify: 'terser',
    terserOptions: {
      compress: {
        // console.log 제거
        drop_console: true,
        // debugger 제거
        drop_debugger: true,
      },
    },
  },
  
  // 개발 서버 설정
  server: {
    port: 5173,
    host: true,
    open: true
  },
  
  // 미리보기 서버 설정
  preview: {
    port: 4173,
    host: true
  },
  
  // CSS 설정
  css: {
    devSourcemap: true,
  },
  
  // 종속성 최적화
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled'
    ],
  },
  
  // 환경별 설정
  define: {
    // 빌드 타임에 환경 변수 주입
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0')
  },
  
  // 기본 경로 설정 (GitHub Pages용)
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio-site/' : '/',
});