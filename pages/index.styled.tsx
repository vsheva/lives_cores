import { Box, Container, Tab, Tabs } from "@mui/material";
import styled from "styled-components";

export const Header = styled((props) => <Box component="header" {...props} />)`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const HeaderContent = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Navbar = styled((props) => <Box component="nav" {...props} />)`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const NavbarContent = styled(Container)``;

export const NavTabs = styled((props) => (
  <Tabs indicatorColor="primary" {...props} />
))`
  .MuiTab-root {
    color: ${({ theme }) => theme.palette.text.disabled};
  }

  .Mui-selected {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const NavTab = styled((props) => (
  <Tab iconPosition="start" disableRipple {...props} />
))``;
