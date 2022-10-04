import { Accordion, AccordionDetails } from "@mui/material";
import React from "react";

import type SportEvent from "@entities/SportEvent";
import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import * as Styled from "./SportEventAccordion.styled";

type CountryAccordionProps = {
  sportEvent: SportEvent;
  children: React.ReactNode;
};

const SportEventAccordion: React.FC<CountryAccordionProps> = ({
  sportEvent,
  children,
  ...props
}) => {
  return (
    <Accordion {...props}>
      <Styled.AccordionSummary>
        <Styled.EventTitle>
          <FavoriteCheckbox />
          {sportEvent.country}: {sportEvent.title}
        </Styled.EventTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default SportEventAccordion;
