import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0046",
      contrastText: common.white,
    },
    secondary: {
      main: "#001e28",
      light: "#0f2d37",
      contrastText: common.white,
    },
    background: {
      default: "#eee",
      paper: common.white,
    },
    text: {
      primary: "#00141e",
      secondary: "#555e61",
      disabled: "#c8cdcd",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0,
          height: 48,
          ".MuiTabs-flexContainer": {
            gap: 24,
          },
          ".MuiTabs-indicator": {
            height: 5,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 2,
          minHeight: 42,
          height: 46,
        },
      },
    },
  },
});
export default theme;
