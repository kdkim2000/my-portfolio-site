// src/components/Projects.tsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery,
  Avatar,
} from '@mui/material';
import {
  GitHub,
  Launch,
  PlayArrow,
  Close,
  Code,
  Timeline,
  TrendingUp,
  Group,
} from '@mui/icons-material';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  features: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  videoUrl?: string;
  duration: string;
  teamSize: string;
  role: string;
  challenges: string[];
  category: 'team' | 'personal';
}

const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'team' | 'personal'>('all');

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'SSAFY 팀 프로젝트',
      subtitle: '실시간 협업 도구 웹 애플리케이션',
      description: '팀원들과의 효율적인 협업을 위한 실시간 커뮤니케이션 및 프로젝트 관리 플랫폼',
      problem: '기존 협업 도구들의 복잡한 인터페이스와 높은 학습 비용으로 인한 팀 생산성 저하',
      solution: '직관적인 UI/UX와 실시간 알림 시스템을 통해 팀원 간 원활한 소통 환경 구축',
      results: [
        '팀 협업 효율성 40% 향상',
        '프로젝트 완료율 85% 달성',
        '사용자 만족도 4.5/5.0',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MySQL', 'Docker'],
      features: ['실시간 채팅', '칸반보드', '파일 공유', '일정 관리', '알림 시스템'],
      image: '/assets/images/project1.png',
      githubUrl: 'https://github.com/yourusername/ssafy-team-project',
      demoUrl: 'https://ssafy-team-project.vercel.app',
      videoUrl: 'https://youtube.com/watch?v=demo1',
      duration: '6주',
      teamSize: '5명',
      role: '팀장 & 프론트엔드 개발',
      challenges: [
        'Socket.io를 활용한 실시간 통신 구현',
        '대용량 파일 업로드 최적화',
        '반응형 UI 컴포넌트 설계',
      ],
      category: 'team',
    },
    {
      id: 'project2',
      title: '개인 포트폴리오 사이트',
      subtitle: 'React + TypeScript 기반 개인 브랜딩',
      description: 'MUI를 활용한 모던하고 반응형인 개인 포트폴리오 웹사이트',
      problem: '기존 정적 포트폴리오의 한계와 개발 역량을 효과적으로 어필할 수 있는 플랫폼 필요',
      solution: '인터랙티브한 UI와 체계적인 정보 구조로 개발자로서의 성장 과정을 스토리텔링',
      results: [
        '페이지 로딩 속도 2초 이내 달성',
        '모바일 최적화 100% 완성',
        'Lighthouse 성능 점수 95점',
      ],
      techStack: ['React', 'TypeScript', 'MUI', 'Vite', 'GitHub Pages'],
      features: ['타이핑 애니메이션', '반응형 디자인', '다크 모드', 'SEO 최적화'],
      image: '/assets/images/project2.png',
      githubUrl: 'https://github.com/yourusername/portfolio',
      demoUrl: 'https://yourname.github.io',
      duration: '3주',
      teamSize: '1명',
      role: '개인 프로젝트',
      challenges: [
        'MUI 커스터마이징을 통한 독창적 디자인 구현',
        'TypeScript 타입 안전성 확보',
        '성능 최적화 및 번들 사이즈 관리',
      ],
      category: 'personal',
    },
    {
      id: 'project3',
      title: 'E-Commerce 쇼핑몰',
      subtitle: '풀스택 온라인 쇼핑 플랫폼',
      description: '사용자 친화적인 쇼핑 경험을 제공하는 반응형 전자상거래 웹사이트',
      problem: '기존 쇼핑몰의 복잡한 결제 프로세스와 느린 로딩 속도로 인한 이탈률 증가',
      solution: '간소화된 결제 플로우와 최적화된 상품 검색/필터링 시스템 도입',
      results: [
        '결제 완료율 25% 개선',
        '페이지 로딩 속도 50% 향상',
        '사용자 재방문율 60% 증가',
      ],
      techStack: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'AWS'],
      features: ['상품 검색', '장바구니', '결제 시스템', '주문 관리', '리뷰 시스템'],
      image: '/assets/images/project3.png',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      demoUrl: 'https://ecommerce-demo.herokuapp.com',
      videoUrl: 'https://youtube.com/watch?v=demo3',
      duration: '8주',
      teamSize: '3명',
      role: '풀스택 개발자',
      challenges: [
        'Stripe API 결제 시스템 통합',
        '대용량 상품 데이터 최적화',
        'AWS 배포 및 CI/CD 파이프라인 구축',
      ],
      category: 'team',
    },
  ];

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const getCategoryColor = (category: string) => {
    return category === 'team' ? '#2563eb' : '#059669';
  };

  const getCategoryLabel = (category: string) => {
    return category === 'team' ? '팀 프로젝트' : '개인 프로젝트';
  };

  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 16 }, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#1e293b',
              fontSize: { xs: '3rem', md: '4rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Projects
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
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              fontWeight: 400,
            }}
          >
            문제 해결 과정과 기술적 도전을 담은{' '}
            <Box component="span" sx={{ color: '#2563eb', fontWeight: 700 }}>
              대표 프로젝트 쇼케이스
            </Box>
            입니다.
          </Typography>
        </Box>

        {/* Filter Buttons */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
            {[
              { value: 'all', label: '전체', icon: <Code /> },
              { value: 'team', label: '팀 프로젝트', icon: <Group /> },
              { value: 'personal', label: '개인 프로젝트', icon: <Timeline /> },
            ].map((item) => (
              <Button
                key={item.value}
                variant={filter === item.value ? 'contained' : 'outlined'}
                onClick={() => setFilter(item.value as any)}
                startIcon={item.icon}
                sx={{
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                  backgroundColor: filter === item.value ? '#2563eb' : 'transparent',
                  borderColor: '#2563eb',
                  color: filter === item.value ? 'white' : '#2563eb',
                  '&:hover': {
                    backgroundColor: filter === item.value ? '#1e40af' : '#f0f9ff',
                    borderColor: '#1e40af',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid #e2e8f0',
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderColor: '#cbd5e1',
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: getCategoryColor(project.category),
                      fontSize: '2rem',
                    }}
                  >
                    {project.category === 'team' ? <Group /> : <Code />}
                  </Avatar>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={getCategoryLabel(project.category)}
                      size="small"
                      sx={{
                        bgcolor: getCategoryColor(project.category) + '15',
                        color: getCategoryColor(project.category),
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </CardMedia>
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1, color: '#1e293b', fontSize: '1.1rem' }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#64748b', mb: 2, fontSize: '0.9rem' }}
                  >
                    {project.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      mb: 3,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.7rem',
                          height: 24,
                          borderColor: '#cbd5e1',
                          color: '#64748b',
                        }}
                      />
                    ))}
                    {project.techStack.length > 3 && (
                      <Chip
                        label={`+${project.techStack.length - 3}`}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: 24,
                          bgcolor: '#f1f5f9',
                          color: '#64748b',
                        }}
                      />
                    )}
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                    <IconButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        bgcolor: '#f1f5f9',
                        color: '#64748b',
                        '&:hover': { bgcolor: '#e2e8f0', color: '#1e293b' },
                      }}
                    >
                      <GitHub fontSize="small" />
                    </IconButton>
                    <IconButton
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        bgcolor: '#f1f5f9',
                        color: '#64748b',
                        '&:hover': { bgcolor: '#e2e8f0', color: '#1e293b' },
                      }}
                    >
                      <Launch fontSize="small" />
                    </IconButton>
                    {project.videoUrl && (
                      <IconButton
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          bgcolor: '#f1f5f9',
                          color: '#64748b',
                          '&:hover': { bgcolor: '#e2e8f0', color: '#1e293b' },
                        }}
                      >
                        <PlayArrow fontSize="small" />
                      </IconButton>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Detail Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          fullScreen={isMobile}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ p: 3, pb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
                      {selectedProject.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {selectedProject.subtitle}
                    </Typography>
                  </Box>
                  <IconButton onClick={handleCloseDialog} sx={{ color: '#64748b' }}>
                    <Close />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                        🎯 문제 정의
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                        {selectedProject.problem}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                        💡 해결 방안
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                        {selectedProject.solution}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                        📈 성과 및 결과
                      </Typography>
                      <Stack spacing={1}>
                        {selectedProject.results.map((result, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <TrendingUp sx={{ color: '#059669', fontSize: 16, mr: 1 }} />
                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                              {result}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                        🛠️ 기술적 도전
                      </Typography>
                      <Stack spacing={1}>
                        {selectedProject.challenges.map((challenge, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box sx={{ color: '#ea580c', fontSize: 16, mr: 1, mt: 0.5 }}>•</Box>
                            <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.5 }}>
                              {challenge}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                        📋 프로젝트 정보
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid size={{ xs: 6 }}>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            개발 기간
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                            {selectedProject.duration}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            팀 규모
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                            {selectedProject.teamSize}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            담당 역할
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                            {selectedProject.role}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                        🔧 기술 스택
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: '#2563eb15',
                              color: '#2563eb',
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 3, pt: 1 }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    코드 보기
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    라이브 데모
                  </Button>
                  {selectedProject.videoUrl && (
                    <Button
                      variant="outlined"
                      startIcon={<PlayArrow />}
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      시연 영상
                    </Button>
                  )}
                </Stack>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;