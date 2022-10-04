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
      dark: "#00141e",
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
          padding: "5px 14px",
          minWidth: 52,
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0,
          height: 48,
          ".MuiTabs-flexContainer": {
            gap: 24,
          },
          ".MuiTabs-indicator": {
            height: 4,
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: 0,
          borderRadius: 8,
          padding: 0,
          "&:before": {
            display: "none",
          },
          background: "transparent",
        },
      },
      defaultProps: { disableGutters: true },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0 8px",
          minHeight: 28,
          ".MuiAccordionSummary-content": {
            margin: 0,
          },
          borderRadius: 8,
          backgroundColor: "#eee",
          "&:hover": {
            backgroundColor: "rgba(200, 205, 205, .3)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 16,
        },
      },
      defaultProps: { elevation: 0 },
    },
  },
});
export default theme;
