import type SportEvent from "@entities/SportEvent";
import type Country from "@entities/Country";
import generateCountries from "@common/utils/mock/generateCountries";
import generateSportEvents from "@common/utils/mock/generateSportEvents";

const fs = require("fs");

const MOCK_SPORT_EVENTS_COUNT = 20;
const MOCK_COUNTRIES_COUNT = 40;

const sportEvents: SportEvent[] = generateSportEvents(
  MOCK_SPORT_EVENTS_COUNT,
  generateCountries(MOCK_COUNTRIES_COUNT)
);
const countries: Country[] = sportEvents.map(({ country, countryCode }) => ({
  name: country,
  code: countryCode,
}));

let data = JSON.stringify(sportEvents, null, 2);

fs.writeFile("src/common/data/mock/sport-events.json", data, (err) => {
  if (err) throw err;
});

export default function handler(req, res) {
  res.status(200).json({ sportEvents, countries });
}
