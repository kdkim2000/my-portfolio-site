// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Download,
  KeyboardArrowDown,
  ArrowForward,
} from '@mui/icons-material';
import AvatarImage from '../assets/images/Avatar.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const texts = [
    'SSAFY 멘토',
    'Full Stack Developer',
    'SW Architect',
    'Problem Solver',
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#fafafa',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          {/* Profile Image */}
          <Avatar
            src={AvatarImage}
            alt="프로필 이미지"
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              mx: 'auto',
              mb: 4,
              bgcolor: '#f1f5f9',
              border: '4px solid #e2e8f0',
            }}
          />

          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
              color: '#1e293b',
              letterSpacing: '-0.02em',
            }}
          >
            안녕하세요!
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
              color: '#1e293b',
            }}
          >
            <Box component="span" sx={{ color: '#2563eb' }}>
              좋은길벗
            </Box>
            입니다
          </Typography>

          {/* Typing Animation */}
          <Box sx={{ mb: 6, minHeight: '40px' }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: '#64748b',
                fontWeight: 500,
              }}
            >
              저는{' '}
              <Box component="span" sx={{ color: '#2563eb', fontWeight: 600 }}>
                {displayText}
                <Box
                  component="span"
                  sx={{
                    animation: 'blink 1s infinite',
                    '@keyframes blink': {
                      '0%, 50%': { opacity: 1 },
                      '51%, 100%': { opacity: 0 },
                    },
                  }}
                >
                  |
                </Box>
              </Box>{' '}
              입니다
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#64748b',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            사용자 중심의 웹 경험을 만들고, 지속적인 학습을 통해{' '}
            <Box component="span" sx={{ color: '#2563eb', fontWeight: 600 }}>
              임팩트 있는 소프트웨어
            </Box>
            를 개발하는 것이 목표입니다.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 8 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToAbout}
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: '#2563eb',
                color: 'white',
                fontWeight: 600,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#1e40af',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              더 알아보기
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download />}
              href="/resume.pdf"
              download
              sx={{
                borderColor: '#2563eb',
                color: '#2563eb',
                fontWeight: 600,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: '#1e40af',
                  bgcolor: '#f0f9ff',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              이력서 다운로드
            </Button>
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 8 }}>
            <IconButton
              href="https://github.com/kdkim2000"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64748b',
                bgcolor: 'white',
                border: '1px solid #e2e8f0',
                width: 48,
                height: 48,
                '&:hover': {
                  color: '#1e293b',
                  borderColor: '#cbd5e1',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHub />
            </IconButton>
            
            <IconButton
              href="https://linkedin.com/in/kdkim2000"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64748b',
                bgcolor: 'white',
                border: '1px solid #e2e8f0',
                width: 48,
                height: 48,
                '&:hover': {
                  color: '#1e293b',
                  borderColor: '#cbd5e1',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedIn />
            </IconButton>
            
            <IconButton
              href="mailto:kdkim2000@gmail.com"
              sx={{
                color: '#64748b',
                bgcolor: 'white',
                border: '1px solid #e2e8f0',
                width: 48,
                height: 48,
                '&:hover': {
                  color: '#1e293b',
                  borderColor: '#cbd5e1',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Email />
            </IconButton>
          </Stack>

          {/* Scroll Indicator */}
          <IconButton
            onClick={scrollToAbout}
            sx={{
              color: '#94a3b8',
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 53%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%, 43%': {
                  transform: 'translateY(-8px)',
                },
                '70%': {
                  transform: 'translateY(-4px)',
                },
                '90%': {
                  transform: 'translateY(-2px)',
                },
              },
              '&:hover': {
                color: '#64748b',
              },
            }}
          >
            <KeyboardArrowDown />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;