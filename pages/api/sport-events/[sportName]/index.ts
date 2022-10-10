import type SportEvents from "@entities/SportEvents";
import type SportEvent from "@entities/SportEvent";
import type Country from "@entities/Country";
import generateCountries from "@common/utils/mock/generateCountries";
import generateSportEvents from "@common/utils/mock/generateSportEvents";

const MOCK_SPORT_EVENTS_COUNT = 200;
const MOCK_COUNTRIES_COUNT = 40;

export const eventsList: SportEvent[] = generateSportEvents(
  MOCK_SPORT_EVENTS_COUNT,
  generateCountries(MOCK_COUNTRIES_COUNT)
);

export let countries: Country[] = eventsList.map(
  ({ country, countryCode }) => ({
    name: country,
    code: countryCode,
  })
);
const countryNames = countries.map(({ name }) => name);

countries = countries.filter(
  ({ name }, index) => countryNames.indexOf(name) === index
);

const sportEventsData: SportEvents = { eventsList, countries };

export default function handler(req, res) {
  res.status(200).json(sportEventsData);
}
