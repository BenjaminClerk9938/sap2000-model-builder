import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = ({ darkMode, handleThemeChange }) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={4}>
      <Typography variant="h4">SAP2000 AI Model Builder</Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained">Model Builder</Button>
        <Button variant="outlined">PM/PV Analysis</Button>
        <IconButton onClick={handleThemeChange}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
