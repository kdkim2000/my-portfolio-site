// src/components/Skills.tsx - 자격증 섹션 추가
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Stack,
  useTheme,
  Tab,
  Tabs,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  Psychology,
  Palette,
  Build,
  EmojiEvents,
  Verified,
  Security,
  Business,
  Analytics,
  AccountTree,
} from '@mui/icons-material';

interface Skill {
  name: string;
  level: number;
  experience: string;
  color: string;
}

interface Certification {
  name: string;
  category: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  year?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactElement;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <Palette />,
      color: '#2563eb',
      skills: [
        { name: 'React', level: 85, experience: '1년', color: '#61DAFB' },
        { name: 'TypeScript', level: 80, experience: '8개월', color: '#3178C6' },
        { name: 'JavaScript', level: 90, experience: '1.5년', color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 95, experience: '2년', color: '#E34F26' },
        { name: 'Vue.js', level: 70, experience: '6개월', color: '#4FC08D' },
        { name: 'Tailwind CSS', level: 85, experience: '1년', color: '#06B6D4' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <Code />,
      color: '#059669',
      skills: [
        { name: 'Node.js', level: 75, experience: '1년', color: '#339933' },
        { name: 'Python', level: 80, experience: '1.5년', color: '#3776AB' },
        { name: 'Java', level: 70, experience: '1년', color: '#ED8B00' },
        { name: 'Spring Boot', level: 65, experience: '6개월', color: '#6DB33F' },
        { name: 'Express.js', level: 75, experience: '8개월', color: '#000000' },
        { name: 'Django', level: 60, experience: '4개월', color: '#092E20' },
      ],
    },
    {
      id: 'database',
      name: 'Database',
      icon: <Storage />,
      color: '#dc2626',
      skills: [
        { name: 'MySQL', level: 80, experience: '1.5년', color: '#4479A1' },
        { name: 'PostgreSQL', level: 70, experience: '8개월', color: '#336791' },
        { name: 'MongoDB', level: 65, experience: '6개월', color: '#47A248' },
        { name: 'Redis', level: 60, experience: '4개월', color: '#DC382D' },
      ],
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      icon: <Cloud />,
      color: '#7c3aed',
      skills: [
        { name: 'Docker', level: 75, experience: '8개월', color: '#2496ED' },
        { name: 'AWS', level: 60, experience: '6개월', color: '#FF9900' },
        { name: 'Git/GitHub', level: 90, experience: '2년', color: '#F05032' },
        { name: 'Linux', level: 70, experience: '1년', color: '#FCC624' },
        { name: 'Nginx', level: 55, experience: '3개월', color: '#009639' },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Others',
      icon: <Build />,
      color: '#ea580c',
      skills: [
        { name: 'VS Code', level: 95, experience: '2년', color: '#007ACC' },
        { name: 'Figma', level: 75, experience: '1년', color: '#F24E1E' },
        { name: 'Postman', level: 85, experience: '1.5년', color: '#FF6C37' },
        { name: 'Slack', level: 90, experience: '2년', color: '#4A154B' },
        { name: 'Notion', level: 85, experience: '1.5년', color: '#000000' },
      ],
    },
    {
      id: 'certifications',
      name: 'Certifications',
      icon: <EmojiEvents />,
      color: '#f59e0b',
      skills: [], // 자격증은 별도 렌더링
    },
  ];

  const certifications: Certification[] = [
    {
      name: 'SW Architect',
      category: '아키텍처',
      icon: <AccountTree />,
      color: '#1e293b',
      description: '소프트웨어 아키텍처 설계 및 구현 전문 자격',
    },
    {
      name: 'Associate Architect',
      category: '아키텍처',
      icon: <AccountTree />,
      color: '#64748b',
      description: '아키텍처 설계 보조 전문 자격',
    },    
    {
      name: 'SCP - Engineer - Associate',
      category: '클라우드',
      icon: <Cloud />,
      color: '#dc2626',
      description: '삼성 클라우드 플랫폼 엔지니어 자격',
    },
    {
      name: 'SCP - Business Leader',
      category: '클라우드',
      icon: <Cloud />,
      color: '#dc2626',
      description: '삼성 클라우드 플랫폼 비즈니스 리더',
    },
    {
      name: 'AWS Certified Developer',
      category: '클라우드',
      icon: <Cloud />,
      color: '#FF9900',
      description: 'AWS 클라우드 개발자 공식 인증',
    },
    {
      name: 'SAP PP',
      category: 'ERP',
      icon: <Business />,
      color: '#0073e6',
      description: 'SAP 생산계획',
    },
    {
      name: 'SAP MM',
      category: 'ERP',
      icon: <Business />,
      color: '#0073e6',
      description: 'SAP 자재관리',
    },
    {
      name: 'SAP ABAP',
      category: 'ERP',
      icon: <Business />,
      color: '#0073e6',
      description: 'ABAP 개발',
    },
    {
      name: 'Data Scientist (Level 1)',
      category: '데이터 분석',
      icon: <Analytics />,
      color: '#059669',
      description: '데이터 분석 및 머신러닝 전문 역량',
    },
    {
      name: 'SW 검정 (Professional)',
      category: '소프트웨어',
      icon: <Verified />,
      color: '#2563eb',
      description: '소프트웨어 개발 전문 역량 인증',
    },
    {
      name: 'PMP',
      category: '프로젝트 관리',
      icon: <Business />,
      color: '#7c3aed',
      description: '프로젝트 매니지먼트 전문가 자격',
    },
    {
      name: 'SDS-ITIL',
      category: 'IT 서비스',
      icon: <Security />,
      color: '#ea580c',
      description: 'IT 서비스 관리 모범사례 자격',
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const getSkillLevelText = (level: number): string => {
    if (level >= 80) return '숙련';
    if (level >= 60) return '중급';
    return '초급';
  };

  const getSkillLevelColor = (level: number): string => {
    if (level >= 80) return '#059669';
    if (level >= 60) return '#2563eb';
    return '#ea580c';
  };

  const getCertificationsByCategory = () => {
    const categories = [...new Set(certifications.map(cert => cert.category))];
    return categories.map(category => ({
      category,
      certifications: certifications.filter(cert => cert.category === category),
    }));
  };

  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'white' }}>
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
            Skills & Certifications
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
            SSAFY 교육과정과 개인 학습을 통해 습득한{' '}
            <Box component="span" sx={{ color: '#2563eb', fontWeight: 700 }}>
              기술 스택과 전문 자격증
            </Box>
            입니다.
          </Typography>
        </Box>

        {/* Skills Tabs */}
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTabs-indicator': {
                backgroundColor: skillCategories[activeTab]?.color || '#2563eb',
                height: 3,
              },
            }}
          >
            {skillCategories.map((category, index) => (
              <Tab
                key={category.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                      sx={{
                        bgcolor: category.color + '15',
                        color: category.color,
                        width: 32,
                        height: 32,
                      }}
                    >
                      {category.id === 'certifications' ? (
                        <Badge badgeContent={certifications.length} color="error" max={99}>
                          {category.icon}
                        </Badge>
                      ) : (
                        category.icon
                      )}
                    </Avatar>
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
                      {category.name}
                    </Typography>
                  </Box>
                }
                sx={{
                  textTransform: 'none',
                  minHeight: 60,
                  '&.Mui-selected': {
                    color: category.color,
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Skills Content */}
        <Box sx={{ minHeight: 400 }}>
          {skillCategories.map((category, categoryIndex) => (
            <Box
              key={category.id}
              sx={{
                display: activeTab === categoryIndex ? 'block' : 'none',
              }}
            >
              {category.id === 'certifications' ? (
                // Certifications Content
                <Box>
                  {getCertificationsByCategory().map(({ category: catName, certifications: certs }) => (
                    <Box key={catName} sx={{ mb: 6 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 3,
                          color: '#1e293b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: '#f59e0b',
                            borderRadius: '50%',
                          }}
                        />
                        {catName}
                        <Chip
                          label={certs.length}
                          size="small"
                          sx={{
                            bgcolor: '#f59e0b15',
                            color: '#f59e0b',
                            fontWeight: 600,
                            ml: 1,
                          }}
                        />
                      </Typography>
                      <Grid container spacing={3}>
                        {certs.map((cert) => (
                          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={cert.name}>
                            <Card
                              sx={{
                                height: '100%',
                                transition: 'all 0.3s ease',
                                border: '1px solid #e2e8f0',
                                borderRadius: 3,
                                position: 'relative',
                                overflow: 'visible',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                  borderColor: cert.color + '40',
                                },
                                '&::before': {
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  height: 4,
                                  bgcolor: cert.color,
                                  borderRadius: '12px 12px 0 0',
                                },
                              }}
                            >
                              <CardContent sx={{ p: 3, pt: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                  <Avatar
                                    sx={{
                                      bgcolor: cert.color + '15',
                                      color: cert.color,
                                      width: 48,
                                      height: 48,
                                      mr: 2,
                                      border: `2px solid ${cert.color}20`,
                                    }}
                                  >
                                    {cert.icon}
                                  </Avatar>
                                  <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        color: '#1e293b',
                                        mb: 0.5,
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {cert.name}
                                    </Typography>
                                    <Chip
                                      label="인증 완료"
                                      size="small"
                                      icon={<Verified sx={{ fontSize: '14px !important' }} />}
                                      sx={{
                                        bgcolor: '#059669' + '15',
                                        color: '#059669',
                                        fontWeight: 600,
                                        fontSize: '0.7rem',
                                        height: 24,
                                      }}
                                    />
                                  </Box>
                                </Box>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: '#64748b',
                                    lineHeight: 1.5,
                                    fontSize: '0.9rem',
                                  }}
                                >
                                  {cert.description}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  ))}
                </Box>
              ) : (
                // Skills Content (기존 코드)
                <Grid container spacing={3}>
                  {category.skills.map((skill, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={skill.name}>
                      <Card
                        sx={{
                          height: '100%',
                          transition: 'all 0.3s ease',
                          border: '1px solid #e2e8f0',
                          borderRadius: 3,
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            borderColor: category.color + '40',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: 2,
                                bgcolor: skill.color + '15',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                border: `2px solid ${skill.color}20`,
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: 700,
                                  fontSize: '0.75rem',
                                  color: skill.color,
                                }}
                              >
                                {skill.name.charAt(0)}
                              </Typography>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, fontSize: '1rem', color: '#1e293b' }}
                              >
                                {skill.name}
                              </Typography>
                              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                                <Chip
                                  label={getSkillLevelText(skill.level)}
                                  size="small"
                                  sx={{
                                    bgcolor: getSkillLevelColor(skill.level) + '15',
                                    color: getSkillLevelColor(skill.level),
                                    fontWeight: 600,
                                    fontSize: '0.7rem',
                                  }}
                                />
                                <Chip
                                  label={skill.experience}
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    borderColor: '#cbd5e1',
                                    color: '#64748b',
                                    fontSize: '0.7rem',
                                  }}
                                />
                              </Stack>
                            </Box>
                          </Box>

                          <Box sx={{ mb: 1 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 1,
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{ color: '#64748b', fontWeight: 500 }}
                              >
                                숙련도
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ color: '#1e293b', fontWeight: 600 }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                bgcolor: '#f1f5f9',
                                '& .MuiLinearProgress-bar': {
                                  bgcolor: category.color,
                                  borderRadius: 4,
                                },
                              }}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          ))}
        </Box>

        {/* Skills Summary */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: '#f8fafc',
            borderRadius: 3,
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 100,
              height: 100,
              opacity: 0.1,
              transform: 'translate(20px, -20px) rotate(15deg)',
            }}
          >
            <EmojiEvents sx={{ fontSize: 80, color: '#f59e0b' }} />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: '#1e293b', textAlign: 'center' }}
          >
            💡 역량 현황
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#64748b', textAlign: 'center', lineHeight: 1.7 }}
          >
            SSAFY 교육과정을 통해 <strong>풀스택 개발 역량</strong>을 기르고 있으며, 
            특히 <strong>React 기반 프론트엔드 개발</strong>에 집중하고 있습니다. 
            다양한 전문 자격증을 통해 <strong>체계적인 기술 역량</strong>을 갖추고 있으며,
            지속적인 학습을 통해 실무에 필요한 기술들을 꾸준히 습득하고 있습니다.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, flexWrap: 'wrap' }}>
            <Chip
              icon={<Code />}
              label={`${skillCategories.filter(cat => cat.id !== 'certifications').reduce((acc, cat) => acc + cat.skills.length, 0)}개 기술 스택`}
              sx={{
                bgcolor: '#2563eb15',
                color: '#2563eb',
                fontWeight: 600,
              }}
            />
            <Chip
              icon={<EmojiEvents />}
              label={`${certifications.length}개 전문 자격증`}
              sx={{
                bgcolor: '#f59e0b15',
                color: '#f59e0b',
                fontWeight: 600,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;