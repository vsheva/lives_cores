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
import * as StyledPaper from "@components/Paper/Paper.styled";
import CountryAccordion from "@components/CountryAccordion";
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
          <StyledPaper.Paper>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </StyledPaper.Paper>
        </Styled.LivetableSection>
      </Styled.MainSection>
    </>
  );
};

export default Home;
