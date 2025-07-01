import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const coinColors = {
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
};

function Leaderboard({ leaderboard = [] }) {
  if (!leaderboard.length) return null;
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Leaderboard
      </Typography>
      <Stack spacing={2} alignItems="center">
        {leaderboard.map((entry, idx) => (
          <Box key={idx} display="flex" alignItems="center" width="100%" justifyContent="center">
            {entry.coin_type && (
              <EmojiEventsIcon sx={{ color: coinColors[entry.coin_type], mr: 1 }} />
            )}
            <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
              {entry.user_name ? entry.user_name[0].toUpperCase() : '?'}
            </Avatar>
            <Typography variant="body1" sx={{ minWidth: 120 }}>{entry.user_name}</Typography>
            <Typography variant="body2" sx={{ ml: 2, fontWeight: 'bold' }}>{entry.score} pts</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Leaderboard; 