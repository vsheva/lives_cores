import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Grid,
  Typography,
  Paper as MuiPaper,
} from "@mui/material";
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

export const CountriesSection = styled((props) => (
  <Grid item xs={2} {...props} />
))``;

export const LivetableSection = styled((props) => (
  <Grid item xs={8} {...props} />
))``;

export const LivetableSectionPaper = styled((props) => (
  <Paper elevation={0} {...props} />
))``;

export const CountriesTitle = styled((props) => (
  <Typography variant="overline" {...props} />
))`
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: ${({ theme }) => theme.spacing(1)};

  .MuiDivider-root {
    margin: ${({ theme }) => theme.spacing(0, 0, 2, 1)};
  }
`;

export const CountriesList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const Paper = styled((props) => (
  <MuiPaper component="section" {...props} />
))``;

export const FiltersGroup = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
