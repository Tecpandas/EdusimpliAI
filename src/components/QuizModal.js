import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

function QuizModal({ open, onClose, questions = [], moduleTitle }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setAnswers([]);
    setShowScore(false);
  };

  const score = questions.reduce((acc, q, idx) => acc + (answers[idx] === q.correct ? 1 : 0), 0);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{moduleTitle ? `${moduleTitle} Quiz` : 'Quiz'}</DialogTitle>
      <DialogContent>
        {showScore ? (
          <Box textAlign="center" py={4}>
            <Typography variant="h5">Your Score: {score} / {questions.length}</Typography>
            <Button onClick={handleRestart} sx={{ mt: 2 }}>Restart Quiz</Button>
          </Box>
        ) : questions.length > 0 ? (
          <Box>
            <Typography variant="subtitle1" mb={2}>Q{current + 1}. {questions[current].question}</Typography>
            <RadioGroup
              value={answers[current] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
            >
              {questions[current].options.map((opt, idx) => (
                <FormControlLabel key={idx} value={opt} control={<Radio />} label={opt} />
              ))}
            </RadioGroup>
          </Box>
        ) : (
          <Typography>No questions available.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {!showScore && questions.length > 0 && (
          <Button onClick={handleNext} disabled={!answers[current]}>Next</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default QuizModal;