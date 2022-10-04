import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

import * as Styled from "./CountryAccordion.styled";

type CountryAccordionProps = {
  country: string;
  children: React.ReactNode;
};

const CountryAccordion: React.FC<CountryAccordionProps> = ({
  country,
  children,
  ...props
}) => {
  return (
    <Accordion {...props}>
      <Styled.AccordionSummary>
        <Styled.CountryTitle>{country}</Styled.CountryTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CountryAccordion;
