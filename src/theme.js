import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    background: {
      paper: "#f1f1f1",
    },
    divider: "#ccc",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f0f0", // Global background for all inputs
          "&:hover": {
            backgroundColor: "#e0e0e0", // Change on hover
          },
          "&.Mui-focused": {
            backgroundColor: "#fff", // Change when focused
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      paper: "#121212",
    },
    divider: "#444",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212", // Global background for all inputs
          "&:hover": {
            backgroundColor: "#1f1f1f", // Change on hover
          },
          "&.Mui-focused": {
            backgroundColor: "#333333", // Change when focused
          },
        },
      },
    },
  },
});
