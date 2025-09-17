// src/components/Skills.tsx
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
} from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  Psychology,
  Palette,
  Build,
} from '@mui/icons-material';

interface Skill {
  name: string;
  level: number;
  experience: string;
  color: string;
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
            Skills
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
              기술 스택과 역량 수준
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
                      {category.icon}
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
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: '#1e293b', textAlign: 'center' }}
          >
            💡 학습 현황
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#64748b', textAlign: 'center', lineHeight: 1.7 }}
          >
            SSAFY 교육과정을 통해 <strong>풀스택 개발 역량</strong>을 기르고 있으며, 
            특히 <strong>React 기반 프론트엔드 개발</strong>에 집중하고 있습니다. 
            지속적인 학습을 통해 실무에 필요한 기술들을 꾸준히 습득하고 있습니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;