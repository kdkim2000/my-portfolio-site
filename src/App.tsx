// src/App.tsx - useDocumentHead 훅 사용 버전
import React, { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

// Skills와 Projects 임시 컴포넌트
const TemporarySkills: React.FC = () => (
  <Box id="skills" sx={{ py: 10, px: 4, bgcolor: '#f0f0f0', textAlign: 'center' }}>
    <h2 style={{ color: '#1e293b', marginBottom: '16px' }}>Skills Section (임시)</h2>
    <p style={{ color: '#64748b' }}>
      Skills.tsx 파일을 생성해주세요. 
      <br />
      <code>src/components/Skills.tsx</code>
    </p>
  </Box>
);

const TemporaryProjects: React.FC = () => (
  <Box id="projects" sx={{ py: 10, px: 4, bgcolor: '#e0e0e0', textAlign: 'center' }}>
    <h2 style={{ color: '#1e293b', marginBottom: '16px' }}>Projects Section (임시)</h2>
    <p style={{ color: '#64748b' }}>
      Projects.tsx 파일을 생성해주세요.
      <br />
      <code>src/components/Projects.tsx</code>
    </p>
  </Box>
);

// 로딩 컴포넌트 최적화
const LoadingSpinner: React.FC = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      py: 8,
      minHeight: '200px' 
    }}
    role="status"
    aria-label="콘텐츠 로딩 중"
  >
    <CircularProgress size={40} thickness={4} />
  </Box>
);

// 에러 경계 컴포넌트
const ErrorFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ py: 8, px: 4, textAlign: 'center', bgcolor: '#fef2f2' }}>
    <h3 style={{ color: '#dc2626', marginBottom: '8px' }}>컴포넌트 로딩 실패</h3>
    <p style={{ color: '#7f1d1d' }}>페이지를 새로고침해주세요.</p>
    {children}
  </Box>
);

// 동적 import를 위한 lazy loading
const Skills = React.lazy(() => 
  import('./components/Skills').catch(() => ({
    default: TemporarySkills
  }))
);

const Projects = React.lazy(() => 
  import('./components/Projects').catch(() => ({
    default: TemporaryProjects
  }))
);

// Contact 섹션 (간단한 연락처)
const Contact: React.FC = () => (
  <Box 
    id="contact" 
    component="section"
    sx={{ 
      py: { xs: 8, md: 12 }, 
      bgcolor: '#1e293b',
      color: 'white',
      textAlign: 'center' 
    }}
  >
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
      Let's Connect
    </h2>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
      새로운 기회와 협업에 열려있습니다.
    </p>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
      <a 
        href="mailto:kdkim2000@gmail.com" 
        style={{ 
          color: '#60a5fa', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 500
        }}
      >
        📧 kdkim2000@gmail.com
      </a>
      <a 
        href="https://github.com/kdkim2000" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: '#60a5fa', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 500
        }}
      >
        🐙 GitHub
      </a>
      <a 
        href="https://linkedin.com/in/kdkim2000" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: '#60a5fa', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 500
        }}
      >
        💼 LinkedIn
      </a>
    </Box>
  </Box>
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#3b82f6',
      dark: '#1e40af',
    },
    secondary: {
      main: '#dc2626',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEOHead />
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <Contact />
        </main>
        <footer style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          backgroundColor: '#f8fafc',
          color: '#64748b',
          fontSize: '0.9rem'
        }}>
          <p>© 2024 좋은길벗. Built with React + TypeScript + MUI</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Last updated: {new Date().toLocaleDateString('ko-KR')}
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;