// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', href: '#home', label: '홈' },
    { name: 'About', href: '#about', label: '소개' },
    { name: 'Skills', href: '#skills', label: '기술' },
    { name: 'Projects', href: '#projects', label: '프로젝트' },
    { name: 'Contact', href: '#contact', label: '연락처' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Button
              fullWidth
              onClick={() => scrollToSection(item.href)}
              sx={{
                justifyContent: 'flex-start',
                py: 2,
                px: 3,
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? 2 : 0,
          transition: 'all 0.3s ease-in-out',
          color: scrolled ? 'primary.main' : 'white',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: '70px !important' }}>
            <Typography
              variant="h6"
              component="button"
              onClick={() => scrollToSection('#home')}
              sx={{
                fontWeight: 700,
                fontSize: '1.4rem',
                color: scrolled ? 'primary.main' : 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              좋은길벗
            </Typography>

            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: scrolled ? 'text.primary' : 'white',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: scrolled ? 'primary.light' : 'rgba(255, 255, 255, 0.1)',
                        color: scrolled ? 'white' : 'white',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="메뉴 열기"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? 'primary.main' : 'white',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;