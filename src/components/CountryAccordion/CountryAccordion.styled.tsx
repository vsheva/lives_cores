import {
  Typography,
  AccordionSummary as MuiAccordionSummary,
} from "@mui/material";
import styled from "styled-components";

export const AccordionSummary = styled(MuiAccordionSummary)`
  .MuiAccordionSummary-content {
    margin: ${({ theme }) => theme.spacing(0)};
  }
`;

export const CountryTitle = styled((props) => (
  <Typography variant="subtitle1" component="span" {...props} />
))`
  text-transform: none;
  font-size: 0.9rem;
`;
