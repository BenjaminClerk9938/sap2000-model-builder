import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const Steps = () => {
  return (
    <Box>
      <Typography variant="h6">Steps</Typography>
      <Card sx={{ padding: 2, marginY: 1 }}>
        <Typography variant="body1">Set coordinates for plates</Typography>
      </Card>
      <Card sx={{ padding: 2, marginY: 1 }}>
        <Typography variant="body1">Set coordinates for plates</Typography>
      </Card>
      <Card sx={{ padding: 2, marginY: 1 }}>
        <Typography variant="body1">Set coordinates for plates</Typography>
      </Card>
    </Box>
  );
};

export default Steps;
