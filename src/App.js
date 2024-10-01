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
        <ModifiedTitle />
        <InputField />
        <Box display="flex" gap={2} mb={4}>
          <CardSelector />
        </Box>
        <ModifiedProgressBar />
        {/* Steps and Output Sections */}

        <Grid
          container
          spacing={6}
          display="flex"
          justifyContent={["center", "space-between"]}
        >
          <Grid item xs={12} md={7}>
            <Steps />
          </Grid>
          <Grid item xs={12} md={5}>
            <Output />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
