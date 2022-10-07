import type { NextPage } from "next";
import { useEffect, useState } from "react";

import type SportEvents from "@entities/SportEvents";
import * as SportEventsGateway from "@gateways/sport-events";
import CountriesList from "@components/AsideList/Countries";
import Livetable from "@components/Livetable";
import Layout from "@components/Layout";

const Home: NextPage = () => {
  const [footballSportEvents, setFootballSportEvents] = useState<SportEvents>({
    sportEvents: [],
  } as SportEvents);

  useEffect(() => {
    (async () => {
      const sportEvents = await SportEventsGateway.getSportEvents("football");
      setFootballSportEvents(sportEvents);
    })();
  }, []);

  return (
    <Layout aside={<CountriesList countries={footballSportEvents.countries} />}>
      <Livetable sportEvents={footballSportEvents.sportEvents} />
    </Layout>
  );
};

export default Home;
