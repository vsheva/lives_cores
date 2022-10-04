import { Box, Button, Container, Tab, Tabs } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import styled from "styled-components";

export const Header = styled((props) => <Box component="header" {...props} />)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const HeaderContent = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = styled((props) => <Box component="nav" {...props} />)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const NavbarContent = styled(Container)``;

export const NavTabs = styled((props) => (
  <Tabs indicatorColor="primary" {...props} />
))`
  .MuiTab-root {
    color: ${({ theme }) => theme.palette.text.disabled};
  }

  .Mui-selected {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`;

export const NavTab = styled((props) => (
  <Tab iconPosition="start" disableRipple {...props} />
))``;

export const HeaderButtons = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const HeaderButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  min-width: auto;
  padding: ${({ theme }) => theme.spacing(1, 1.5)};
`;

const HeaderIconButton = styled(HeaderButton)`
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const SearchButton = styled((props) => (
  <HeaderIconButton {...props}>
    <Search />
  </HeaderIconButton>
))``;

export const LoginButton = styled(({ children, ...props }) => (
  <HeaderButton {...props}>
    <Person /> {children}
  </HeaderButton>
))`
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const MenuButton = styled((props) => (
  <HeaderIconButton {...props}>
    <Menu />
  </HeaderIconButton>
))``;
