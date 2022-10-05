import {
  Typography,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import styled from "styled-components";

import { getRgba } from "@common/utils/palette";

export const Accordion = styled(MuiAccordion)`
  .MuiAccordionDetails-root {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    border-bottom: 1px solid
      ${({ theme }) => getRgba(theme.palette.secondary.dark, 0.06)};
  }
`;

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowDropDown />} {...props} />
))`
  padding-right: ${({ theme }) => theme.spacing(0.5)};
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};

  .MuiAccordionSummary-content {
    white-space: nowrap;
    overflow: hidden;
    margin: ${({ theme }) => theme.spacing(0)};
  }

  .MuiAccordionSummary-expandIconWrapper {
    opacity: 0;
    transition: opacity 0.1s;
  }

  &.Mui-expanded {
    .MuiAccordionSummary-expandIconWrapper {
      opacity: 1;
    }

    background-color: ${({ theme }) =>
      `${getRgba(theme.palette.support.light, 0.3)}`};
  }

  &:hover {
    background-color: ${({ theme }) =>
      `${getRgba(theme.palette.support.light, 0.3)}`};
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
