import { createTheme } from "@mui/material/styles";
import { grey, common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0046",
      contrastText: common.white,
    },
    secondary: {
      main: grey.A200,
      contrastText: "#00141e",
    },
    background: {
      default: "#001E28",
      paper: grey.A200,
    },
    text: {
      primary: common.white,
      secondary: "#00141e",
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
