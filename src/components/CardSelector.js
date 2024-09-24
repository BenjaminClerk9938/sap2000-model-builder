import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const CardSelector = () => {
  return (
    <Box display="flex" gap={2}>
      <Card sx={{ padding: 2 }}>
        <Typography variant="body1">Plate that has 20ft by 12 ft, apply soil pressures, pin ends</Typography>
      </Card>
      <Card sx={{ padding: 2 }}>
        <Typography variant="body1">Plate that has 20ft by 12 ft, apply soil pressures, pin ends</Typography>
      </Card>
      <Card sx={{ padding: 2 }}>
        <Typography variant="body1">Plate that has 20ft by 12 ft, apply soil pressures, pin ends</Typography>
      </Card>
    </Box>
  );
};

export default CardSelector;
