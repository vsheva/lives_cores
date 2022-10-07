import type SportEvent from "@entities/SportEvent";
import type Country from "@entities/Country";
import generateSportEvents from "@common/utils/mock/generateSportEvents";
import generateCountries from "@common/utils/mock/generateCountries";

const MOCK_SPORT_EVENTS_COUNT = 20;
const MOCK_COUNTRIES_COUNT = 40;

const sportEvents: SportEvent[] = generateSportEvents(MOCK_SPORT_EVENTS_COUNT);
const countries: Country[] = generateCountries(MOCK_COUNTRIES_COUNT);

export default function handler(req, res) {
  res.status(200).json({ sportEvents, countries });
}
