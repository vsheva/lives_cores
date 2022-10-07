import type { NextPage } from "next";
import { useEffect, useState } from "react";

import type SportEvents from "@entities/SportEvents";
import type SportNameId from "@entities/SportNameId";
import * as SportEventsGateway from "@gateways/sport-events";
import CountriesList from "@components/AsideList/Countries";
import Livetable from "@components/Livetable";
import Layout from "@components/Layout";

const SPORT_NAME_ID: SportNameId = "football";

const Home: NextPage = () => {
  const [footballSportEvents, setFootballSportEvents] = useState<SportEvents>({
    sportEvents: [],
  } as SportEvents);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    (async () => {
      const sportEvents = await SportEventsGateway.getSportEvents(
        SPORT_NAME_ID,
        date
      );
      setFootballSportEvents(sportEvents);
    })();
  }, [date]);

  return (
    <Layout
      aside={
        <CountriesList
          countries={footballSportEvents.countries}
          sportNameId={SPORT_NAME_ID}
        />
      }
    >
      <Livetable
        sportEvents={footballSportEvents.sportEvents}
        date={date}
        onDateChange={(newDate) => setDate(newDate)}
      />
    </Layout>
  );
};

export default Home;
