import styled from "styled-components";
import { Paper as MuiPaper } from "@mui/material";

export const Paper = styled((props) => <MuiPaper elevation={0} {...props} />)`
  padding: ${({ theme }) => theme.spacing(2)};
`;
