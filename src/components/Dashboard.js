import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Science as ScienceIcon,
  Biotech as BiotechIcon,
  Quiz as QuizIcon,
  Visibility,
  WbSunny as WbSunnyIcon,
  Nightlight as NightlightIcon,
} from '@mui/icons-material';
import { modulesData } from './moduleData';
import { useThemeMode } from '../contexts/ThemeContext';
import VisualizationModal from './VisualizationModal';
import QuizModal from './QuizModal';
import ChatbotModal from './ChatbotModal';

function Dashboard() {
  const [userProfile, setUserProfile] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('Chemistry'); // Default value
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [visualizationOpen, setVisualizationOpen] = useState(false);
  const [visualizationLinks, setVisualizationLinks] = useState([]);
  const [visualizationTitle, setVisualizationTitle] = useState('');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  const { currentUser, userProfile: authUserProfile, logout, isInitialized } = useAuth();
  const { mode, toggleTheme } = useThemeMode();

  // Module images for visual enhancement
  const moduleImages = {
    'The Solid State': 'https://picsum.photos/seed/solidstate/800/600',
    'Solutions': 'https://picsum.photos/seed/solutions/800/600',
    'Electrochemistry': 'https://picsum.photos/seed/electrochemistry/800/600',
    'Chemical Kinetics': 'https://picsum.photos/seed/chemkinetics/800/600',
    'Surface Chemistry': 'https://picsum.photos/seed/surfacechem/800/600',
    'General Principles and Processes of Isolation of Elements': 'https://picsum.photos/seed/metallurgy/800/600',
    'The p-Block Elements': 'https://picsum.photos/seed/pblock/800/600',
    'The d-and f-Block Elements': 'https://picsum.photos/seed/dfblock/800/600',
    'Coordination Compounds': 'https://picsum.photos/seed/coordination/800/600',
    'Haloalkanes and Haloarenes': 'https://picsum.photos/seed/haloalkanes/800/600',
    'Alcohols, Phenols and Ethers': 'https://picsum.photos/seed/alcohols/800/600',
    'Aldehydes, Ketones and Carboxylic Acids': 'https://picsum.photos/seed/aldehydes/800/600',
    'Amines': 'https://picsum.photos/seed/amines/800/600',
    'Biomolecules': 'https://picsum.photos/seed/biomolecules/800/600',
    'Polymers': 'https://picsum.photos/seed/polymers/800/600',
    'Chemistry in Everyday Life': 'https://picsum.photos/seed/chemlife/800/600',
    'Sexual Reproduction in Flowering Plants': 'https://picsum.photos/seed/plantrepro/800/600',
    'Human Reproduction': 'https://picsum.photos/seed/humanrepro/800/600',
    'Reproductive Health': 'https://picsum.photos/seed/reprohealth/800/600',
    'Principles of Inheritance and Variation': 'https://picsum.photos/seed/inheritance/800/600',
    'Molecular Basis of Inheritance': 'https://picsum.photos/seed/molecularinheritance/800/600',
    'Evolution': 'https://picsum.photos/seed/evolution/800/600',
    'Human Health and Disease': 'https://picsum.photos/seed/healthdisease/800/600',
    'Strategies for Enhancement in Food Production': 'https://picsum.photos/seed/foodproduction/800/600',
    'Microbes in Human Welfare': 'https://picsum.photos/seed/microbes/800/600',
    'Biotechnology: Principles and Processes': 'https://picsum.photos/seed/biotechprinciples/800/600',
    'Biotechnology and Its Applications': 'https://picsum.photos/seed/biotechapps/800/600',
    'Organisms and Populations': 'https://picsum.photos/seed/organismspopulations/800/600',
    'Ecosystem': 'https://picsum.photos/seed/ecosystem/800/600',
    'Biodiversity and Conservation': 'https://picsum.photos/seed/biodiversity/800/600',
    'Environmental Issues': 'https://picsum.photos/seed/enviroissues/800/600',
    'Electric Charges and Fields': 'https://picsum.photos/seed/electriccharges/800/600',
    'Electrostatic Potential and Capacitance': 'https://picsum.photos/seed/electrostatics/800/600',
    'Current Electricity': 'https://picsum.photos/seed/currentelectricity/800/600',
    'Moving Charges and Magnetism': 'https://picsum.photos/seed/magnetism/800/600',
    'Magnetism and Matter': 'https://picsum.photos/seed/magnetismmatter/800/600',
    'Electromagnetic Induction': 'https://picsum.photos/seed/eminduction/800/600',
    'Alternating Current': 'https://picsum.photos/seed/acurrent/800/600',
    'Electromagnetic Waves': 'https://picsum.photos/seed/emwaves/800/600',
    'Ray Optics and Optical Instruments': 'https://picsum.photos/seed/rayoptics/800/600',
    'Wave Optics': 'https://picsum.photos/seed/waveoptics/800/600',
    'Dual Nature of Radiation and Matter': 'https://picsum.photos/seed/dualnature/800/600',
    'Atoms': 'https://picsum.photos/seed/atoms/800/600',
    'Nuclei': 'https://picsum.photos/seed/nuclei/800/600',
    'Semiconductor Electronics: Materials, Devices and Simple Circuits': 'https://picsum.photos/seed/semiconductors/800/600',
    'Communication Systems': 'https://picsum.photos/seed/commsystems/800/600',
  };

  useEffect(() => {
    const loadProfileAndModules = async () => {
      try {
        if (!currentUser) {
          navigate('/login', { replace: true });
          return;
        }
        const profileData = authUserProfile || {};
        setUserProfile(profileData);
        const availableSubjects = profileData.subjects || ['Chemistry', 'Biology', 'Physics'];
        setSubjects(availableSubjects);
        // Set initial selectedSubject only if not in available subjects
        if (!availableSubjects.includes(selectedSubject)) {
          setSelectedSubject(availableSubjects[0] || 'Chemistry');
        }
        // Use hardcoded "XII" for consistency
        const initialKey = `${selectedSubject.toLowerCase()}XII`;
        const initialModules = modulesData[initialKey] || [];
        setModules(initialModules);
      } catch (error) {
        setError(`Failed to load profile: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    loadProfileAndModules();
  }, [currentUser, authUserProfile, navigate, selectedSubject]);

  const handleSubjectChange = (event, newSubject) => {
    setSelectedSubject(newSubject);
  };

  const handleVisualize = (mod) => {
    if (mod.visualizationLinks && mod.visualizationLinks.length > 0) {
      setVisualizationLinks(mod.visualizationLinks);
      setVisualizationTitle(mod.title);
      setVisualizationOpen(true);
    }
  };

  const handleQuiz = (mod) => {
    setQuizOpen(true);
    setQuizTitle(mod.title);
    setQuizQuestions(mod.quiz || []);
  };

  const handleLogout = async () => {
    try {
      setError('');
      await logout();
      localStorage.removeItem('userProfile');
      navigate('/login', { replace: true });
    } catch (err) {
      setError(`Failed to log out: ${err.message}`);
    }
  };

  const handleChatbotOpen = () => {
    setChatbotOpen(true);
  };

  const getSubjectIcon = (subject) => {
    switch (subject.toLowerCase()) {
      case 'physics': return <ScienceIcon />;
      case 'chemistry': return <BiotechIcon />;
      case 'biology': return <BiotechIcon />;
      default: return <ScienceIcon />;
    }
  };

  const getModuleIcon = (icon) => {
    if (icon === 'flask') return <BiotechIcon color="primary" />;
    if (icon === 'dna') return <BiotechIcon color="success" />;
    if (icon === 'atom') return <ScienceIcon color="secondary" />;
    return null;
  };

  if (!isInitialized) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ ml: 2 }}>Initializing...</Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box sx={{ mt: 4 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      </Container>
    );
  }

  if (!userProfile) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', background: mode === 'dark' ? '#181818' : '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            Welcome, {userProfile?.name || 'Student'}
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              startIcon={mode === 'dark' ? <WbSunnyIcon /> : <NightlightIcon />}
              onClick={toggleTheme}
              variant="outlined"
              color="secondary"
            >
              {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <Button variant="contained" color="primary" onClick={handleChatbotOpen}>
              Chatbot
            </Button>
            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
        <Box mb={2}>
          <Typography variant="h5" color="textSecondary">
            Class: {userProfile?.standard || 'XII'} | Subjects: {subjects.join(', ')}
          </Typography>
        </Box>
        <Tabs
          value={selectedSubject}
          onChange={handleSubjectChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ mb: 3 }}
        >
          {subjects.map((subject) => (
            <Tab key={subject} value={subject} label={subject} icon={getSubjectIcon(subject)} />
          ))}
        </Tabs>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {modules.length === 0 ? (
              <Grid item xs={12}>
                <Alert severity="info">No modules found for this subject/class.</Alert>
              </Grid>
            ) : (
              modules.map((mod) => (
                <Grid item xs={12} sm={6} md={4} key={mod.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: 6,
                      borderRadius: 3,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': { transform: 'translateY(-8px) scale(1.03)', boxShadow: 12 },
                      background: mode === 'dark' ? '#23272f' : '#fff',
                    }}
                  >
                    <Box
                      sx={{
                        height: 180,
                        background: `url(${moduleImages[mod.title] || 'https://picsum.photos/seed/default/800/600'}) center/cover no-repeat`,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box display="flex" alignItems="center" gap={1} mb={1}>
                        {getModuleIcon(mod.icon)}
                        <Typography variant="h6" fontWeight="bold">{mod.title}</Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary" mb={1}>{mod.summary}</Typography>
                      <Box mb={1}>
                        <Typography variant="subtitle2" color="primary">Topics:</Typography>
                        <List dense>
                          {mod.keyTopics.map((topic, i) => (
                            <ListItem key={i} sx={{ pl: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>{getSubjectIcon(selectedSubject)}</ListItemIcon>
                              <ListItemText primary={topic} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        startIcon={<Visibility />}
                        onClick={() => handleVisualize(mod)}
                      >
                        Visualize
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        startIcon={<QuizIcon />}
                        onClick={() => handleQuiz(mod)}
                      >
                        Quiz
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        )}
        <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} title={quizTitle} questions={quizQuestions} />
        <VisualizationModal open={visualizationOpen} onClose={() => setVisualizationOpen(false)} title={visualizationTitle} urls={visualizationLinks} />
        <ChatbotModal open={chatbotOpen} onClose={() => setChatbotOpen(false)} subjects={subjects} />
      </Container>
    </div>
  );
}

export default Dashboard;