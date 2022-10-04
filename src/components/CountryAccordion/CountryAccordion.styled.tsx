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
    white-space: nowrap;
    overflow: hidden;
    margin: ${({ theme }) => theme.spacing(0)};
  }

  .MuiAccordionSummary-expandIconWrapper {
    opacity: 0;
    transition: opacity 0.1s;
  }

  &:hover .MuiAccordionSummary-expandIconWrapper {
    opacity: 1;
  }
`;

export const CountryTitle = styled((props) => (
  <Typography variant="subtitle1" component="span" {...props} />
))`
  text-transform: none;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
