import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
function InputField() {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      padding="3rem 0"
      spacing={1}
    >
      <Grid item xs={12} sm={12} md={8} alignItems="center">
        <TextField
          required
          fullWidth
          id="outlined-required"
          defaultValue="What do you want to build?"
          style={{ width: "100%" }}
          InputProps={{
            inputProps: {
              style: {
                // width:"100%",
                padding: "10px", // Set padding to 0
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "14px",
              lineHeight: "20px",
              borderRadius: "50px", // Makes the TextField rounded
            },
          }}
        />
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={4}
        item
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // gap={1}
        width={100}
        // paddingLeft={1}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50px", // This makes the button rounded
            padding: "8px 20px", // Custom padding for larger buttons
            fontSize: "14px",
            height: "40px",
            textAlign: "center",
            lineHeight: "16px",
          }}
        >
          Start Thinking
        </Button>
        <IconButton sx={{}}>
          <RefreshIcon
            sx={{
              transform: "scaleX(-1)", // Flips the icon horizontally
            }}
            fontSize="small"
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default InputField;
