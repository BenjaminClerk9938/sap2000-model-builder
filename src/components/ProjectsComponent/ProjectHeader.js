import { Box, Button, colors, Typography } from "@mui/material";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ProjectHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingBottom="2rem"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
       
      >
        <Typography
          variant="h6"
          fontSize="20px"
          lineHeight="24.2px"
          fontWeight={500}
          sx={{paddingRight:"14px"}}
        >
          Projects
        </Typography>
        <Button sx={{ minWidth: "14px" }}>
          <ControlPointIcon
            sx={{ width: " 15px", height: "15px" }}
            fontSize="16px"
          />
        </Button>
        <Button sx={{ minWidth: "14px" }}>
          <ExpandMoreIcon
            fontSize="16px"
            sx={{ width: " 15px", height: "15px" }}
          />
        </Button>
      </Box>
    </Box>
  );
}

export default ProjectHeader;
