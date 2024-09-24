import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./components/Header";
import CardSelector from "./components/CardSelector";
import Steps from "./components/Steps";
import Output from "./components/Output";
import { getTheme } from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        {/* Header Section */}
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />

        {/* Card Selector and Start Thinking */}
        <Box display="flex" gap={2} mb={4}>
          <CardSelector />
          <Button variant="contained" color="primary">
            Start Thinking
          </Button>
        </Box>

        {/* Steps and Output Sections */}
        <Box display="flex" gap={2}>
          <Box flex={1}>
            <Steps />
          </Box>
          <Box flex={1}>
            <Output />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
