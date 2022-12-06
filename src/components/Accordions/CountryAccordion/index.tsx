import type { AccordionProps } from '@mui/material';
import React from 'react';
import { AccordionDetails } from '@mui/material';

import type { CountrySportEvent as CountrySportEventType } from '@entities/Country';
import CountriesListSkeleton from './CountriesListSkeleton';
import CountrySportEvent from './SportEvent';

import * as Styled from './CountryAccordion.styled';

type CountryAccordionProps = {
  countryName: React.ReactNode;
  sportEvents: CountrySportEventType[];
} & Omit<AccordionProps, 'children'>;

const CountryAccordion: React.FC<CountryAccordionProps> = ({
  countryName,
  sportEvents,
  ...props
}) => {
  return (
    <Styled.Accordion {...props}>
      <Styled.AccordionSummary>
        <Styled.CountryTitle>{countryName}</Styled.CountryTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>
        {sportEvents.length > 0 ? (
          sportEvents.map(countryEvent => (
            <CountrySportEvent key={countryEvent.id} countryEvent={countryEvent} />
          ))
        ) : (
          <CountriesListSkeleton />
        )}
      </AccordionDetails>
    </Styled.Accordion>
  );
};

export default CountryAccordion;
