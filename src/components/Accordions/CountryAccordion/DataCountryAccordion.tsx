import React, { useEffect, useState } from "react";

import type { CountrySportEvent as CountrySportEventType } from "@entities/Country";
import type SportNameId from "@entities/SportNameId";
import type Country from "@entities/Country";
import CountryAccordion from "@components/Accordions/CountryAccordion";
import * as CountriesGateway from "@gateways/sport-events/countries";

type DataCountryAccordionProps = {
  country: Country;
  sportNameId: SportNameId;
};

const DataCountryAccordion: React.FC<DataCountryAccordionProps> = ({
  country,
  sportNameId,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [countrySportEvents, setCountrySportEvents] = useState<
    CountrySportEventType[]
  >([]);

  useEffect(() => {
    if (expanded && !countrySportEvents.length) {
      (async () => {
        const countryEvents = await CountriesGateway.getCountryEvents(
          sportNameId,
          country.name
        );

        setCountrySportEvents(countryEvents);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, country, sportNameId]);

  return (
    <CountryAccordion
      countryName={country.name}
      sportEvents={countrySportEvents}
      expanded={expanded}
      onChange={(_, expanded) => setExpanded(expanded)}
    />
  );
};

export default DataCountryAccordion;
