import { Container, Box, Tabs } from "@mui/material";
import styled from "styled-components";

export const Header = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Navbar = styled((props) => <Box component="nav" {...props} />)``;

export const NavTabs = styled(Tabs)`
  color: #fff;
`;
