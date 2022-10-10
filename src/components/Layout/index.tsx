import React from "react";
import {
  SportsBasketball,
  SportsHandball,
  SportsHockey,
  SportsSoccer,
  SportsTennis,
  SportsVolleyball,
} from "@mui/icons-material";
import { useRouter } from "next/router";

import { ACTIVE_TABS } from "@common/data/navbar";
import Logo from "public/images/logo.svg";

import * as Styled from "./Layout.styled";

type LayoutProps = {
  aside: React.ReactNode;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ aside, children }) => {
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
        <Styled.AsideSection>{aside}</Styled.AsideSection>
        <Styled.CenterSection>{children}</Styled.CenterSection>
      </Styled.MainSection>
    </>
  );
};

export default Layout;
