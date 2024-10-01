import React from "react";
import { Box, Card, Icon, IconButton, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CheckIcon from "@mui/icons-material/Check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
import CopyAllIcon from "@mui/icons-material/CopyAll";

const Output = () => {
  return (
    <Box display="flex" flexDirection="column" sx={{}}>
      <Typography variant="h6" fontSize="1.5rem" pb="2rem">
        Output
      </Typography>
      <div style={{ position: "relative" }}>
        <Card sx={{ padding: 2 }}>
          <IconButton
            fontSize="medium"
            sx={{
              position: "absolute",
              top: 0,
              right: "-2rem",
              zIndex: 1000000,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41281 10.7123L6.5878 11.5372C5.44879 12.6763 3.60206 12.6763 2.46304 11.5372C1.32401 10.3982 1.32401 8.55151 2.46304 7.41249L3.28799 6.58754M10.7126 7.41249L11.5376 6.58754C12.6766 5.44849 12.6766 3.60176 11.5376 2.46273C10.3985 1.3237 8.55182 1.3237 7.41281 2.46273L6.5878 3.28769M4.95864 9.04163L9.042 4.95832"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </IconButton>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column">
              <Typography>
                <Icon size="small">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 6H9L7.5 10.5L4.5 1.5L3 6H1"
                      stroke="#8B8B8B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
                Running
              </Typography>
              <Typography>
                <Icon>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#8B8B8B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
                Ready
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2">
            SAP2000 Disconnected
            <Icon>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_50)">
                  <path
                    d="M4.5 2V1M7.5 10V11M2 4.5H1M10 7.5H11M2.4571 2.4571L1.75 1.75M9.5429 9.5429L10.25 10.25M6 8.82845L4.93934 9.8891C4.15829 10.6702 2.89196 10.6702 2.11091 9.8891C1.32986 9.10805 1.32986 7.8417 2.11091 7.06065L3.17158 6M8.82845 6L9.8891 4.93934C10.6702 4.15829 10.6702 2.89196 9.8891 2.11091C9.10805 1.32986 7.8417 1.32986 7.06065 2.11091L6 3.17158"
                    stroke="#8B8B8B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Icon>
          </Typography>
          <Typography variant="body2">
            Set coordinates for plates, output 1.0
          </Typography>
          <Typography variant="body2">
            Set coordinates for plates, output 1.0
          </Typography>
        </Card>
      </div>
    </Box>
  );
};

export default Output;
