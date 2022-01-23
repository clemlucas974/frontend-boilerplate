import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "src/ui/theme";
import Header from "src/components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <div className="app">
          {/* HEADER */}
          {/* BODY */}
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
