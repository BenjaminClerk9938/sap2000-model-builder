import React from "react";
import { Card, Typography, Box, Icon } from "@mui/material";

const CardSelector = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={2}
      sx={{
        "& .MuiCard-root": {
          // Target all direct children with class 'MuiCard-root'
          // Example styles:
          border: "1px solid black",
          borderRadius: "8px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Card sx={{ padding: 2 }} style={{ width: "10rem" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Icon>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.35 6.75L10.3503 5.75L9.35 6.75M10.5 6C10.5 8.4853 8.4853 10.5 6 10.5C3.51472 10.5 1.5 8.4853 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C7.65095 1.5 9.09425 2.38907 9.87725 3.71455M6 3.5V6L7.5 7"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Icon>
          </Box>
          <Box display="flex">
            <Typography fontSize="10px">
              Plate that has 20ft by 12 ft, apply soil pressures, pin ends
            </Typography>{" "}
          </Box>
        </Box>
      </Card>
      <Card sx={{ padding: 2 }} style={{ width: "10rem" }}>
        <Typography fontSize="10px">
          Plate that has 20ft by 12 ft, apply soil pressures, pin ends
        </Typography>
      </Card>
      <Card sx={{ padding: 2 }} style={{ width: "10rem" }}>
        <Typography fontSize="10px">
          Plate that has 20ft by 12 ft, apply soil pressures, pin ends
        </Typography>
      </Card>
    </Box>
  );
};

export default CardSelector;
