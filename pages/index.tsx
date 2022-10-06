import type { NextPage } from "next";
import {
  SportsSoccer,
  SportsBasketball,
  SportsTennis,
  SportsHockey,
  SportsVolleyball,
  SportsHandball,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";

import * as Styled from "@components/MainPage/MainPage.styled";
import CountrySportEvent from "@components/Accordions/CountryAccordion/SportEvent";
import SportEventAccordion from "@components/Accordions/SportEventAccordion";
import CountryAccordion from "@components/Accordions/CountryAccordion";
import FilterButton from "@components/Buttons/FilterButton";
import MOCK_SPORT_EVENTS from "@common/data/mock/sport-events";
import MOCK_COUNTRIES from "@common/data/mock/countries";
import { ACTIVE_TABS } from "@common/data/navbar";
import DatePicker from "@components/DatePicker";
import Logo from "public/images/logo.svg";
import Match from "@components/Match";

const Home: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Styled.Header>
        <Styled.HeaderContent>
          <Logo />
          <Styled.HeaderButtons>
            <Styled.SearchButton />
            <Styled.LoginButton>Вхід</Styled.LoginButton>
            <Styled.MenuButton />
          </Styled.HeaderButtons>
        </Styled.HeaderContent>
      </Styled.Header>
      <Styled.Navbar>
        <Styled.NavbarContent>
          <Styled.NavTabs value={asPath}>
            <Styled.NavTab
              icon={<SportsSoccer />}
              value={ACTIVE_TABS.football}
              label="Футбол"
            />
            <Styled.NavTab
              icon={<SportsBasketball />}
              value={ACTIVE_TABS.basketball}
              label="Баскетбол"
            />
            <Styled.NavTab
              icon={<SportsTennis />}
              value={ACTIVE_TABS.tenis}
              label="Теніс"
            />
            <Styled.NavTab
              icon={<SportsHockey />}
              value={ACTIVE_TABS.hokey}
              label="Хокей"
            />
            <Styled.NavTab
              icon={<SportsVolleyball />}
              value={ACTIVE_TABS.volleyball}
              label="Волейбол"
            />
            <Styled.NavTab
              icon={<SportsHandball />}
              value={ACTIVE_TABS.handball}
              label="Гандбол"
            />
          </Styled.NavTabs>
        </Styled.NavbarContent>
      </Styled.Navbar>
      <Styled.MainSection>
        <Styled.CountriesSection>
          <Styled.CountriesTitle>
            Країни
            <Divider />
          </Styled.CountriesTitle>
          <Styled.CountriesList>
            {MOCK_COUNTRIES.map((country) => (
              <CountryAccordion key={country} country={country}>
                <CountrySportEvent title="Лига 1" />
                <CountrySportEvent title="Лига 2" />
                <CountrySportEvent title="Лига 3" />
              </CountryAccordion>
            ))}
          </Styled.CountriesList>
        </Styled.CountriesSection>
        <Styled.LivetableSection>
          <Styled.Paper>
            <Styled.FiltersGroup>
              <FilterButton active>Всі</FilterButton>
              <FilterButton>Live</FilterButton>
              <FilterButton>Коефіцієнти</FilterButton>
              <FilterButton>Завершені</FilterButton>
              <FilterButton>Заплановані</FilterButton>
              <DatePicker />
            </Styled.FiltersGroup>
            <Styled.SportEvents>
              {MOCK_SPORT_EVENTS.map(({ matches, ...sportEvent }) => (
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
        </Styled.LivetableSection>
      </Styled.MainSection>
    </>
  );
};

export default Home;
