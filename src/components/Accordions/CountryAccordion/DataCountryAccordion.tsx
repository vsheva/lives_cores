import React, { useEffect, useState } from "react";

import type { CountrySportEvent as CountrySportEventType } from "@entities/Country";
import type SportNameId from "@entities/SportNameId";
import type Country from "@entities/Country";
import CountriesListSkeleton from "@components/Accordions/CountryAccordion/CountriesListSkeleton";
import CountrySportEvent from "@components/Accordions/CountryAccordion/SportEvent";
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
  }, [expanded]);

  return (
    <CountryAccordion
      countryName={country.name}
      expanded={expanded}
      onChange={(_, expanded) => setExpanded(expanded)}
    >
      {countrySportEvents.length > 0 ? (
        countrySportEvents.map((countryEvent) => (
          <CountrySportEvent
            key={countryEvent.id}
            countryEvent={countryEvent}
          />
        ))
      ) : (
        <CountriesListSkeleton />
      )}
    </CountryAccordion>
  );
};

export default DataCountryAccordion;
