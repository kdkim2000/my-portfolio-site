// src/components/About.tsx (기술 스택 섹션 제거 버전)
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Divider,
  useTheme,
  Paper,
  LinearProgress,
} from '@mui/material';
import {
  Person,
  MenuBook,
  Handshake,
  Build,
  Work,
  Architecture,
  CloudQueue,
  DataObject,
  Star,
  Code,
  Psychology,
  BusinessCenter,
} from '@mui/icons-material';
import AvatarImage from '../assets/images/Avatar.png';

const About: React.FC = () => {
  const theme = useTheme();

  // 멘토 정보
  const mentorInfo = {
    title: '좋은길벗 멘토',
    role: '삼성SDS • SW 아키텍트 • 클라우드 엔지니어',
    experience: '25+ Years in Enterprise Software',
    specialties: [
      {
        title: 'SW 아키텍처 설계',
        description: '대규모 시스템 설계 및 구조 최적화',
        icon: <Architecture />,
        level: 95,
      },
      {
        title: 'SQL 성능 튜닝',
        description: 'Oracle DB 전문가로서 성능 최적화',
        icon: <DataObject />,
        level: 90,
      },
      {
        title: '클라우드 전환',
        description: 'AWS/SCP 기반 클라우드 마이그레이션',
        icon: <CloudQueue />,
        level: 85,
      },
    ],
  };

  // 주요 경험 프로젝트 (4개만)
  const mentorProjects = [
    {
      year: '2006',
      title: '삼성중공업 ERP 구축',
      description: '대규모 엔터프라이즈 시스템 구축 프로젝트',
      icon: <BusinessCenter />,
    },
    {
      year: '2012',
      title: 'S-ERP 시스템 구축',
      description: '차세대 ERP 시스템 설계 및 구현',
      icon: <Architecture />,
    },
    {
      year: '2016',
      title: 'S-EVM 시스템 구축',
      description: '프로젝트 관리 시스템 개발',
      icon: <Work />,
    },
    {
      year: '2024',
      title: 'SCP 클라우드 전환 프로젝트',
      description: '현재 진행 중인 클라우드 마이그레이션',
      icon: <CloudQueue />,
    },
  ];

  const coreValues = [
    {
      title: '사용자 중심 설계',
      description: '사용자 경험을 최우선으로 생각하는 인터페이스 개발',
      icon: <Person />,
    },
    {
      title: '지속적 학습',
      description: '새로운 기술 트렌드를 빠르게 습득하고 적용',
      icon: <MenuBook />,
    },
    {
      title: '효율적 협업',
      description: '명확한 소통으로 팀 생산성 향상에 기여',
      icon: <Handshake />,
    },
    {
      title: '문제 해결',
      description: '복잡한 문제를 체계적이고 창의적으로 해결',
      icon: <Build />,
    }
  ];

  return (
    <Box id="about" sx={{ py: { xs: 10, md: 16 }, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#1a1a1a',
              fontSize: { xs: '3rem', md: '4rem' },
              letterSpacing: '-0.02em',
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              mx: 'auto',
              mb: 4,
              bgcolor: '#2563eb',
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#64748b',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              fontWeight: 400,
            }}
          >
            <Box component="span" sx={{ color: '#2563eb', fontWeight: 700 }}>
              현업 전문가와 함께하는 성장 여정
            </Box>
            을 통해 실무 역량을 키워나가고 있는 SSAFY 맨토입니다.
          </Typography>
        </Box>

        {/* Mentor Introduction */}
        <Box sx={{ mb: 16 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              bgcolor: 'white',
              border: '1px solid #e2e8f0',
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Avatar
                src={AvatarImage}
                alt="멘토 프로필 이미지"
                sx={{
                  width: 100,
                  height: 100,
                  mx: 'auto',
                  mb: 3,
                  bgcolor: '#f1f5f9',
                  color: '#475569',
                  fontSize: '2.5rem',
                  border: '3px solid #e2e8f0',
                }}
              />
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1e293b' }}>
                {mentorInfo.title}
              </Typography>
              <Typography variant="h6" sx={{ color: '#64748b', mb: 1, fontSize: '1.1rem', fontWeight: 500 }}>
                {mentorInfo.role}
              </Typography>
              <Chip
                label={mentorInfo.experience}
                sx={{
                  bgcolor: '#dbeafe',
                  color: '#1e40af',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  px: 2,
                  py: 0.5,
                }}
              />
            </Box>

            {/* 멘토 전문 분야 */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {mentorInfo.specialties.map((specialty, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      bgcolor: '#f8fafc',
                      borderRadius: 2,
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                        borderColor: '#cbd5e1',
                      },
                    }}
                  >
                    <Avatar sx={{ bgcolor: '#2563eb', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                      {specialty.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem', color: '#1e293b' }}>
                      {specialty.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', mb: 2, lineHeight: 1.6 }}>
                      {specialty.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={specialty.level}
                        sx={{
                          flex: 1,
                          height: 6,
                          borderRadius: 3,
                          bgcolor: '#e2e8f0',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: '#2563eb',
                            borderRadius: 3,
                          },
                        }}
                      />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#475569' }}>
                        {specialty.level}%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* 성장형 멘토 메시지 */}
            <Box
              sx={{
                p: 4,
                bgcolor: '#f1f5f9',
                borderRadius: 2,
                border: '1px solid #cbd5e1',
                textAlign: 'center',
              }}
            >
              <Avatar sx={{ bgcolor: '#2563eb', mx: 'auto', mb: 2, width: 48, height: 48 }}>
                <Psychology />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem', color: '#1e293b' }}>
                성장형 멘토의 철학
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#475569', fontSize: '1rem' }}>
                지금까지 다양한 경험을 쌓아왔으나, 빠르게 변화하는 기술의 발전에 뒤처지지 않기 위해 
                <Box component="span" sx={{ fontWeight: 700, display: 'block', mt: 1, fontSize: '1.1rem', color: '#1e293b' }}>
                  아직도 열심히 공부하는 성장형 멘토입니다.
                </Box>
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Divider sx={{ my: 8, height: 2, bgcolor: '#e2e8f0' }} />

        {/* 주요 경험 프로젝트 */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3rem' },
              color: '#1e293b',
            }}
          >
            주요 경험 프로젝트
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {mentorProjects.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    borderRadius: 2,
                    border: '1px solid #e2e8f0',
                    boxShadow: 'none',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                      borderColor: '#cbd5e1',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: '#dbeafe',
                        color: '#1e40af',
                        mx: 'auto',
                        mb: 2,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {project.icon}
                    </Avatar>
                    <Chip
                      label={project.year}
                      sx={{
                        bgcolor: '#f0f9ff',
                        color: '#0369a1',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        mb: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem', color: '#1e293b' }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.9rem' }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Core Values */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3rem' },
              color: '#1e293b',
            }}
          >
            Core Values
          </Typography>

          <Grid container spacing={4}>
            {coreValues.map((value, index) => (
              <Grid item  xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'white',
                    transition: 'all 0.3s ease',
                    borderRadius: 2,
                    border: '1px solid #e2e8f0',
                    boxShadow: 'none',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                      borderColor: '#2563eb',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: '#dbeafe',
                          color: '#1e40af',
                          width: 56,
                          height: 56,
                        }}
                      >
                        {value.icon}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, fontSize: '1.2rem', color: '#1e293b' }}>
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ lineHeight: 1.7, color: '#64748b', fontSize: '1rem' }}
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Vision Card */}
        <Card
          sx={{
            bgcolor: '#1e293b',
            color: 'white',
            borderRadius: 3,
            border: 'none',
          }}
        >
          <CardContent sx={{ p: 6, textAlign: 'center' }}>
            <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto', mb: 3, width: 64, height: 64 }}>
              <Code />
            </Avatar>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
              개발자로서의 비전
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: 1.8, opacity: 0.9, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', fontWeight: 400 }}>
              현업 멘토님의 풍부한 경험과 지도를 바탕으로, 
              <Box component="span" sx={{ fontWeight: 700, display: 'block', mt: 2, fontSize: '1.2rem' }}>
                사용자의 일상을 개선하고 비즈니스 가치를 창출하는 소프트웨어
              </Box>
              를 만드는 것이 목표입니다. 체계적인 학습과 실무 경험을 통해 함께 성장하는 개발자가 되겠습니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default About;