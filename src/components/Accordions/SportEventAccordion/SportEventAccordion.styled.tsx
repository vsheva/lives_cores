import {
  Typography,
  AccordionSummary as MuiAccordionSummary,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import styled from "styled-components";

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMore />} {...props} />
))`
  padding-left: 0;
  align-items: center;

  .MuiAccordionSummary-content {
    display: flex;
    align-items: center;
  }
`;

export const EventTitle = styled((props) => (
  <Typography variant="subtitle1" component="span" {...props} />
))`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.95rem;
  font-weight: 500;
`;
