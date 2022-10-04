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

import type SportEvent from "@entities/SportEvent";
import * as Styled from "@components/MainPage/MainPage.styled";
import SportEventAccordion from "@components/Accordions/SportEventAccordion";
import CountryAccordion from "@components/Accordions/CountryAccordion";
import FilterButton from "@components/Buttons/FilterButton";
import Logo from "public/images/logo.svg";

const MOCK_COUNTRIES = [
  "Афганістан",
  "Албанія",
  "Алжир",
  "Американське Самоа",
  "Андорра",
  "Ангола",
  "Ангілья",
  "Антарктида",
  "Антигуа і Барбуда",
  "Аргентина",
  "Вірменія",
  "Аруба",
  "Австралія",
  "Австрія",
  "Азербайджан",
  "Багамські острови (the)",
  "Бахрейн",
  "Бангладеш",
  "Барбадос",
  "Білорусь",
  "Бельгія",
  "Беліз",
  "Бенін",
  "Бермудські острови",
  "Бутан",
  "Болівія (Багатонаціональна Держава)",
  "Бонайре, Сінт-Естатіус і Саба",
  "Боснія і Герцеговина",
  "Ботсвана",
  "Острів Буве",
  "Бразилія",
];

const MOCK_SPORT_EVENTS: SportEvent[] = [
  {
    id: 1,
    title: "Регіональна ліга - Центр",
    country: "Австрія",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Регіональна ліга - Захід - Тіроль",
    country: "Австрія",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Перший дивізіон",
    country: "Азербайджан",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Чемпіоншип",
    country: "Англія",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Перша ліга",
    country: "Англія",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Друга ліга",
    country: "Англія",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Національна Ліга",
    country: "Англія",
    isFavorite: false,
  },
  {
    id: 8,
    title: "ПчПЛ Прем'єр-дивізіон",
    country: "Англія",
    isFavorite: false,
  },
  {
    id: 9,
    title: "Південна ліга - Центральний дивізіон",
    country: "Англія",
    isFavorite: false,
  },
  {
    id: 10,
    title: "Південна ліга - Південний дивізіон",
    country: "Англія",
    isFavorite: false,
  },
];

const ACTIVE_TABS = {
  football: "/",
  basketball: "/basketball",
  tenis: "/tennis",
  hokey: "/hokey",
  volleyball: "/valleyball",
  handball: "/handball",
};

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
                <div>1 Лига</div>
                <div>2 Лига</div>
                <div>3 Лига</div>
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
              <FilterButton>Заплановані</FilterButton>
            </Styled.FiltersGroup>
            {MOCK_SPORT_EVENTS.map((sportEvent) => (
              <SportEventAccordion key={sportEvent.id} sportEvent={sportEvent}>
                <div>1 Матч</div>
                <div>2 Матч</div>
                <div>3 Матч</div>
              </SportEventAccordion>
            ))}
          </Styled.Paper>
        </Styled.LivetableSection>
      </Styled.MainSection>
    </>
  );
};

export default Home;
