import type { NextPage } from 'next';

import CountriesList from '@components/AsideList/Countries';
import SPORT_NAME_IDS from '@common/data/sportNameIds';
import Livetable from '@components/Livetable';
import Layout from '@components/Layout';

const SPORT_NAME_ID = SPORT_NAME_IDS.football;

const Home: NextPage = () => {
  return (
    <Layout aside={<CountriesList sportNameId={SPORT_NAME_ID} />}>
      <Livetable sportNameId={SPORT_NAME_ID} />
    </Layout>
  );
};

export default Home;
