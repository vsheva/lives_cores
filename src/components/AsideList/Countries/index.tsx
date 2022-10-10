import React, { useEffect, useState } from "react";

import type Country from "@entities/Country";
import DataCountryAccordion from "@components/Accordions/CountryAccordion/DataCountryAccordion";
import type SportNameId from "@entities/SportNameId";
import AsideList from "@components/AsideList";
import * as CountriesGateway from "@gateways/sport-events/countries";

type CountriesListProps = {
  sportNameId: SportNameId;
};

const CountriesList: React.FC<CountriesListProps> = ({ sportNameId }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    (async () => {
      const countries = await CountriesGateway.getCountries(sportNameId);
      setCountries(countries);
    })();
  }, [sportNameId]);

  return (
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
    )
  );
};

export default CountriesList;
