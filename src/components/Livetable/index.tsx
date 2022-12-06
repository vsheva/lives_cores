import React from 'react';

import type SportNameId from '@entities/SportNameId';
import SportEventAccordion from '@components/Accordions/SportEventAccordion';
import FilterButton from '@components/Buttons/FilterButton';
import useSportEvents from '@common/hooks/useSportEvents';
import WeekDatePicker from '@components/WeekDatePicker';
import Match from '@components/Match';

import * as Styled from './Livetable.styled';

type LivetableProps = {
  sportNameId: SportNameId;
};

const Livetable: React.FC<LivetableProps> = ({ sportNameId }) => {
  const { sportEvents, date, setDate } = useSportEvents(sportNameId);

  return (
    <Styled.Paper>
      <Styled.FiltersGroup>
        <FilterButton $active>Всі</FilterButton>
        <FilterButton>Live</FilterButton>
        <FilterButton>Коефіцієнти</FilterButton>
        <FilterButton>Завершені</FilterButton>
        <FilterButton>Заплановані</FilterButton>
        <WeekDatePicker date={date} onChange={setDate} style={{ marginLeft: 'auto' }} />
      </Styled.FiltersGroup>
      <Styled.SportEvents>
        {sportEvents.map(({ matches, ...sportEvent }) => (
          <SportEventAccordion key={sportEvent.id} sportEvent={sportEvent} defaultExpanded>
            {matches.map(match => (
              <Match key={match.id} match={match} />
            ))}
          </SportEventAccordion>
        ))}
      </Styled.SportEvents>
    </Styled.Paper>
  );
};

export default Livetable;
