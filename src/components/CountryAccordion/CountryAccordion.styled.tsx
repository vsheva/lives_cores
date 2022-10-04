import {
  Typography,
  AccordionSummary as MuiAccordionSummary,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import styled from "styled-components";

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowDropDown />} {...props} />
))`
  padding-right: ${({ theme }) => theme.spacing(0.5)};

  .MuiAccordionSummary-content {
    margin: ${({ theme }) => theme.spacing(0)};
  }

  .MuiAccordionSummary-expandIconWrapper {
    display: none;
  }

  &:hover .MuiAccordionSummary-expandIconWrapper {
    display: inherit;
  }
`;

export const CountryTitle = styled((props) => (
  <Typography variant="subtitle1" component="span" {...props} />
))`
  text-transform: none;
  font-size: 0.9rem;
`;
