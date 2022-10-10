import type { NextPage } from "next";

import CountriesList from "@components/AsideList/Countries";
import useSportEvents from "@common/hooks/useSportEvents";
import SPORT_NAME_IDS from "@common/data/sportNameIds";
import Livetable from "@components/Livetable";
import Layout from "@components/Layout";

const SPORT_NAME_ID = SPORT_NAME_IDS.football;

const Home: NextPage = () => {
  const { sportEvents, date, setDate } = useSportEvents(SPORT_NAME_ID);

  return (
    <Layout
      aside={
        <CountriesList
          countries={sportEvents.countries}
          sportNameId={SPORT_NAME_ID}
        />
      }
    >
      <Livetable
        eventsList={sportEvents.eventsList}
        date={date}
        onDateChange={(newDate) => setDate(newDate)}
      />
    </Layout>
  );
};

export default Home;
