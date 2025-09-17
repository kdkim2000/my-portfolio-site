// src/App.tsx - 최종 수정 버전
import React, { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

// Skills와 Projects 임시 컴포넌트 (파일이 없는 경우 대체용)
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

// 로딩 컴포넌트
const LoadingSpinner: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
    <CircularProgress />
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
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;