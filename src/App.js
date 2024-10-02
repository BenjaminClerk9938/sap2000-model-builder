import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  Grid,
} from "@mui/material";
import Header from "./components/Header";
import CardSelector from "./components/CardSelector";
import Steps from "./components/Steps";
import Output from "./components/Output";
import { getTheme, lightTheme, darkTheme } from "./theme";
import { Title } from "@mui/icons-material";
import ModifiedTitle from "./components/ModifiedTitle";
import InputField from "./components/inputFields";
import ModifiedProgressBar from "./components/modifiedProgressbar";
import ProjectsComponent from "./components/ProjectsComponent/index";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ padding: "20px", maxWidth: "762px" }}>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <ProjectsComponent />
        <div style={{width: "100%", borderBottom: '1px solid #8B8B8B', padding: '1rem 0' }} ></div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
