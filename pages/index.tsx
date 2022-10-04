import type { NextPage } from "next";
import {
  SportsSoccer,
  SportsBasketball,
  SportsTennis,
  SportsHockey,
  SportsVolleyball,
  SportsHandball,
} from "@mui/icons-material";
import { useRouter } from "next/router";

import Logo from "public/images/logo.svg";
import * as Styled from "./index.styled";
import { Divider } from "@mui/material";

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
        </Styled.CountriesSection>
        <Styled.LivetableSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </Styled.LivetableSection>
      </Styled.MainSection>
    </>
  );
};

export default Home;
