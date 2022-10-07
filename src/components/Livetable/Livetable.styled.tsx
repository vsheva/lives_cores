import { Box, Paper as MuiPaper } from "@mui/material";
import styled from "styled-components";

export const Paper = styled((props) => (
  <MuiPaper component="section" {...props} />
))``;

export const FiltersGroup = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SportEvents = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.2)};
`;
