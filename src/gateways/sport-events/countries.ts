import axios from 'axios';

import type { CountrySportEvent } from '@entities/Country';
import type SportNameId from '@entities/SportNameId';
import type Country from '@entities/Country';

export const getCountries = async (sportName: SportNameId): Promise<Country[]> => {
  const { data } = await axios.get(`/api/sport-events/${sportName}/countries`);
  return data;
};

export const getCountryEvents = async (
  sportName: SportNameId,
  countryName: Country['name'],
): Promise<CountrySportEvent[]> => {
  const { data } = await axios.get(`/api/sport-events/${sportName}/countries/${countryName}`);
  return data;
};
