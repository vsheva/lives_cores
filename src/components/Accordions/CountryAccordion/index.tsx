import type { AccordionProps } from "@mui/material";
import React from "react";
import { AccordionDetails } from "@mui/material";

import * as Styled from "./CountryAccordion.styled";

type CountryAccordionProps = {
  countryName: string;
  children: React.ReactNode;
} & AccordionProps;

const CountryAccordion: React.FC<CountryAccordionProps> = ({
  countryName,
  children,
  ...props
}) => {
  return (
    <Styled.Accordion {...props}>
      <Styled.AccordionSummary>
        <Styled.CountryTitle>{countryName}</Styled.CountryTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Styled.Accordion>
  );
};

export default CountryAccordion;
