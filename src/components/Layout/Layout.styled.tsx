import { Box, Button, Container, Tab, Tabs, Grid } from "@mui/material";
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

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
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

export const MainSection = styled((props) => (
  <Container component="main">
    <Grid container spacing={2} {...props} />
  </Container>
))`
  margin-top: 0;
`;

export const AsideSection = styled((props) => (
  <Grid item xs={1.9} component="aside" {...props} />
))`
  padding-left: 0 !important;
`;

export const CenterSection = styled((props) => <Grid item xs={8} {...props} />)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
