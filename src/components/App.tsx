import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "src/ui/theme";
import Header from "src/components/Header";
import AppRoutes from "src/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
