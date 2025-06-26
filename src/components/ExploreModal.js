import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  Divider,
} from '@mui/material';
import { Biotech as BiotechIcon, Science as ScienceIcon } from '@mui/icons-material';

const getSubjectIcon = (subject) => {
  switch (subject?.toLowerCase()) {
    case 'physics': return <ScienceIcon color="primary" />;
    case 'chemistry': return <BiotechIcon color="primary" />;
    case 'biology': return <BiotechIcon color="success" />;
    default: return <ScienceIcon color="primary" />;
  }
};

const getResourceLinks = (moduleTitle, subject) => {
  const resources = [];
  const lowerSubject = subject?.toLowerCase() || 'chemistry';
  const lowerTitle = moduleTitle?.toLowerCase() || '';

  // PhET Simulations
  if (lowerSubject === 'chemistry' && lowerTitle.includes('electrochemistry')) {
    resources.push({
      title: 'PhET: Electrochemistry Simulation',
      url: 'https://phet.colorado.edu/en/simulation/battery-voltage',
      description: 'Interactive simulation of battery voltage and electrochemistry concepts.',
      license: 'CC BY 4.0, Source: PhET, University of Colorado Boulder',
    });
  } else if (lowerSubject === 'physics' && lowerTitle.includes('electric charges')) {
    resources.push({
      title: 'PhET: Electric Field Simulation',
      url: 'https://phet.colorado.edu/en/simulation/charges-and-fields',
      description: 'Explore electric charges and fields interactively.',
      license: 'CC BY 4.0, Source: PhET, University of Colorado Boulder',
    });
  } else if (lowerSubject === 'biology' && lowerTitle.includes('molecular basis')) {
    resources.push({
      title: 'PhET: Gene Expression Simulation',
      url: 'https://phet.colorado.edu/en/simulation/gene-expression-essentials',
      description: 'Simulate the process of gene expression and molecular biology.',
      license: 'CC BY 4.0, Source: PhET, University of Colorado Boulder',
    });
  }

  // OpenStax
  if (lowerSubject === 'chemistry') {
    resources.push({
      title: 'OpenStax: Chemistry Textbook',
      url: 'https://openstax.org/books/chemistry-2e/pages/1-introduction',
      description: 'Comprehensive college-level chemistry textbook.',
      license: 'CC BY 4.0, Source: OpenStax, Rice University',
    });
  } else if (lowerSubject === 'physics') {
    resources.push({
      title: 'OpenStax: University Physics',
      url: 'https://openstax.org/books/university-physics-volume-1/pages/1-introduction',
      description: 'University-level physics textbook covering mechanics and electricity.',
      license: 'CC BY 4.0, Source: OpenStax, Rice University',
    });
  } else if (lowerSubject === 'biology') {
    resources.push({
      title: 'OpenStax: Biology Textbook',
      url: 'https://openstax.org/books/biology-2e/pages/1-introduction',
      description: 'College-level biology textbook with detailed explanations.',
      license: 'CC BY 4.0, Source: OpenStax, Rice University',
    });
  }

  // Khan Academy
  if (lowerSubject === 'chemistry' && lowerTitle.includes('chemical kinetics')) {
    resources.push({
      title: 'Khan Academy: Chemical Kinetics',
      url: 'https://www.khanacademy.org/science/chemistry/chem-kinetics',
      description: 'Video lessons on reaction rates and kinetics.',
      license: 'CC BY-NC-SA 3.0, Source: Khan Academy',
    });
  } else if (lowerSubject === 'biology' && lowerTitle.includes('evolution')) {
    resources.push({
      title: 'Khan Academy: Evolution',
      url: 'https://www.khanacademy.org/science/biology/heredity-and-genetics/evolution',
      description: 'Video lessons on evolutionary biology.',
      license: 'CC BY-NC-SA 3.0, Source: Khan Academy',
    });
  } else if (lowerSubject === 'physics' && lowerTitle.includes('ray optics')) {
    resources.push({
      title: 'Khan Academy: Geometric Optics',
      url: 'https://www.khanacademy.org/science/physics/geometric-optics',
      description: 'Video lessons on ray optics and lenses.',
      license: 'CC BY-NC-SA 3.0, Source: Khan Academy',
    });
  }

  // ChemCollective (Chemistry-specific)
  if (lowerSubject === 'chemistry' && lowerTitle.includes('solutions')) {
    resources.push({
      title: 'ChemCollective: Solutions Virtual Lab',
      url: 'http://chemcollective.org/activities/autograded/104',
      description: 'Virtual lab to explore solution chemistry.',
      license: 'CC BY-NC-SA, Source: ChemCollective',
    });
  }

  // Physics Classroom (Physics-specific)
  if (lowerSubject === 'physics' && lowerTitle.includes('current electricity')) {
    resources.push({
      title: 'Physics Classroom: Electric Circuits',
      url: 'https://www.physicsclassroom.com/class/circuits',
      description: 'Animations and explanations of electric circuits.',
      license: 'Free for non-commercial use, Source: Physics Classroom',
    });
  }

  return resources;
};

function ExploreModal({ open, onClose, module, subject }) {
  if (!module) return null;

  const explanation = module.explanation || `This module covers ${module.title} in detail, including key concepts and applications. Explore the resources below for interactive simulations and in-depth explanations.`;

  const resources = getResourceLinks(module.title, subject);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          {getSubjectIcon(subject)}
          <Typography variant="h5">{module.title}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6" gutterBottom>Summary</Typography>
        <Typography variant="body1" paragraph>{module.summary}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Detailed Explanation</Typography>
        <Typography variant="body1" paragraph>{explanation}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>External Resources</Typography>
        {resources.length > 0 ? (
          <List>
            {resources.map((resource, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </Link>
                  }
                  secondary={
                    <>
                      {resource.description}
                      <br />
                      <Typography variant="caption">{resource.license}</Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No external resources available for this module.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ExploreModal;