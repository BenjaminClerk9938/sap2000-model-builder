import React from "react";
import { Card, Typography, Box, Icon } from "@mui/material";

const ProjectComponent = ({ name, time }) => {
  return (
    <Card sx={{ padding: 1.5 }} style={{ width: "10rem" }}>
      <Box display="flex" flexDirection={"column"} alignItems="start" justifyContent={"space-between"} >
        <Box>
          <Typography fontSize={"10px"}>Project1-{name}</Typography>
        </Box>
        <Box display="flex" alignItems={"center"} gap={".5rem"} >
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_556_213)">
              <path
                d="M7.56667 4.5L6.90017 3.83333L6.23333 4.5M7 4C7 5.65687 5.65687 7 4 7C2.34315 7 1 5.65687 1 4C1 2.34315 2.34315 1 4 1C5.10063 1 6.06283 1.59271 6.58483 2.47636M4 2.33333V4L5 4.66667"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_556_213">
                <rect width="8" height="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography fontSize="10px">{time} </Typography>{" "}
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectComponent;
