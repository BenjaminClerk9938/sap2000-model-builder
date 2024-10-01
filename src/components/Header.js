import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = ({ darkMode, handleThemeChange }) => {
  return (
    <Box display="flex" justifyContent="space-between" padding="3rem 0">
      <Box display="flex" gap={1}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "50px", // This makes the button rounded
            padding: "10px 20px", // Custom padding for larger buttons
            fontSize: "14px",
          }}
        >
          Model Builder
        </Button>
        <Button
          sx={{
            borderRadius: "50px", // This makes the button rounded
            padding: "10px 20px", // Custom padding for larger buttons
            fontSize: "14px",
          }}
          variant="outlined"
        >
          PM/PV Analysis
        </Button>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button onClick={handleThemeChange} size="small">
          {darkMode ? <Brightness5Icon /> : <Brightness7Icon />}
        </Button>
        <Button>
          <AccountCircleIcon fontSize="large" />
        </Button>
        <Typography>v4.0</Typography>
      </Box>
    </Box>
  );
};

export default Header;
