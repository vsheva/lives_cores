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

  /*.MuiAccordionSummary-content {
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
  }*/
`;

export const EventTitle = styled((props) => (
  <Typography variant="subtitle1" component="span" {...props} />
))`
  /*text-transform: none;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;*/
`;
