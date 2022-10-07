import React from "react";

import type SportEvents from "@entities/SportEvents";
import CountrySportEvent from "@components/Accordions/CountryAccordion/SportEvent";
import CountryAccordion from "@components/Accordions/CountryAccordion";
import AsideList from "@components/AsideList";

type CountriesListProps = {
  countries: SportEvents["countries"];
};

const CountriesList: React.FC<CountriesListProps> = ({ countries }) =>
  countries && (
    <AsideList title="Країни">
      {countries.map((country) => (
        <CountryAccordion key={country.id} countryName={country.name}>
          <CountrySportEvent title="Лига 1" />
          <CountrySportEvent title="Лига 2" />
          <CountrySportEvent title="Лига 3" />
        </CountryAccordion>
      ))}
    </AsideList>
  );

export default CountriesList;
