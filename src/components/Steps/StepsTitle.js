import { Box, Button, colors, IconButton, Typography } from "@mui/material";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
function StepsTitle() {
  return (
    <Box
      display="flex"
      alignContent="center"
      justifyContent="space-between"
      paddingBottom="2rem"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" fontSize="1.5rem">
          Steps
        </Typography>
        <Button>
          <ControlPointIcon />
        </Button>
      </Box>
      <Box display={"flex"} flexDirection="row" alignItems="center" gap={1}>
        <Button variant="outlined">Save WorkFlow</Button>
        <Button variant="contained">Run All</Button>
      </Box>
    </Box>
  );
}

export default StepsTitle;
