import type { AccordionProps } from "@mui/material";
import React from "react";
import { Accordion, AccordionDetails } from "@mui/material";
import Image from "next/image";

import type SportEvent from "@entities/SportEvent";
import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import * as Styled from "./SportEventAccordion.styled";

type CountryAccordionProps = {
  sportEvent: Omit<SportEvent, "matches">;
  children: React.ReactNode;
} & AccordionProps;

const SportEventAccordion: React.FC<CountryAccordionProps> = ({
  sportEvent,
  children,
  ...props
}) => {
  return (
    <Accordion {...props}>
      <Styled.AccordionSummary>
        <FavoriteCheckbox />
        <Styled.EventTitle>
          <Image
            src={`/images/flags/${sportEvent.countryCode}.svg`}
            alt={sportEvent.country}
            width="18"
            height="13"
          />
          {sportEvent.country.toUpperCase()}: {sportEvent.title}
        </Styled.EventTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default SportEventAccordion;
