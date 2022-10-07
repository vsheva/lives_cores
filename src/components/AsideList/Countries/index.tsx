import React from "react";

import DataCountryAccordion from "@components/Accordions/CountryAccordion/DataCountryAccordion";
import type SportEvents from "@entities/SportEvents";
import type SportNameId from "@entities/SportNameId";
import AsideList from "@components/AsideList";

type CountriesListProps = {
  countries: SportEvents["countries"];
  sportNameId: SportNameId;
};

const CountriesList: React.FC<CountriesListProps> = ({
  countries,
  sportNameId,
}) =>
  countries && (
    <AsideList title="Країни">
      {countries.map((country) => (
        <DataCountryAccordion
          key={country.name}
          country={country}
          sportNameId={sportNameId}
        />
      ))}
    </AsideList>
  );

export default CountriesList;
