import React from "react";
import { Accordion, AccordionDetails } from "@mui/material";
import Image from "next/image";

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
          {/* TODO: Should be replaced with local flag icons, replace with next/image then */}
          <img
            src={`https://cdn.statically.io/flags/${sportEvent.countryCode}.svg`}
            alt={sportEvent.country}
            width="20"
            height="10"
            style={{ marginRight: 8 }}
          />
          {sportEvent.country}: {sportEvent.title}
        </Styled.EventTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default SportEventAccordion;
