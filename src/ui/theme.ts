import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#074741",
    },
    secondary: {
      main: "#dd6949",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
