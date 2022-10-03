import { createTheme } from "@mui/material/styles";
import { red, grey, common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red.A400,
    },
    secondary: {
      main: grey.A200,
    },
    background: {
      default: "#001E28",
      paper: grey.A200,
    },
    text: {
      primary: common.white,
      secondary: common.black,
    },
  },
});
export default theme;
