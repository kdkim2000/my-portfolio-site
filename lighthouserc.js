// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      numberOfRuns: 3,
      url: [
        'http://localhost/index.html',
      ]
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['warn', { minScore: 0.6 }],
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

// package.json 스크립트 추가 내용
/*
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "lighthouse": "lhci autorun",
    "analyze": "npx vite-bundle-analyzer"
  },
  "devDependencies": {
    "@lhci/cli": "^0.12.0",
    "react-helmet": "^1.3.0",
    "vite-plugin-pwa": "^0.17.0"
  }
}
*/

// .gitignore 추가 내용
/*
# Lighthouse
.lighthouseci/
lhci_reports/

# Bundle analyzer
dist-analyze/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*/

// robots.txt (public 폴더에 추가)
/*
User-agent: *
Allow: /

Sitemap: https://yourusername.github.io/sitemap.xml
*/

// sitemap.xml (public 폴더에 추가)
/*
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourusername.github.io</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourusername.github.io/#about</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourusername.github.io/#skills</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourusername.github.io/#projects</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
*/

// _headers (Netlify 배포용 - public 폴더에 추가)
/*
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css  
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable
*/