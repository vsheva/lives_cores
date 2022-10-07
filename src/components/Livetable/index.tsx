import React from "react";

import type SportEvents from "@entities/SportEvents";
import SportEventAccordion from "@components/Accordions/SportEventAccordion";
import FilterButton from "@components/Buttons/FilterButton";
import WeekDatePicker from "@components/WeekDatePicker";
import Match from "@components/Match";

import * as Styled from "./Livetable.styled";

type LivetableProps = {
  sportEvents: SportEvents["sportEvents"];
  date: Date;
  onDateChange: (newDate: Date) => void;
};

const Livetable: React.FC<LivetableProps> = ({
  sportEvents,
  date,
  onDateChange,
}) => {
  return (
    <Styled.Paper>
      <Styled.FiltersGroup>
        <FilterButton active>Всі</FilterButton>
        <FilterButton>Live</FilterButton>
        <FilterButton>Коефіцієнти</FilterButton>
        <FilterButton>Завершені</FilterButton>
        <FilterButton>Заплановані</FilterButton>
        <WeekDatePicker
          date={date}
          onChange={onDateChange}
          style={{ marginLeft: "auto" }}
        />
      </Styled.FiltersGroup>
      <Styled.SportEvents>
        {sportEvents.map(({ matches, ...sportEvent }) => (
          <SportEventAccordion
            key={sportEvent.id}
            sportEvent={sportEvent}
            defaultExpanded
          >
            {matches.map((match) => (
              <Match key={match.id} match={match} />
            ))}
          </SportEventAccordion>
        ))}
      </Styled.SportEvents>
    </Styled.Paper>
  );
};

export default Livetable;
