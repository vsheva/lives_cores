import { addDays, subDays } from "date-fns";
import { faker } from "@faker-js/faker";

import type SportEvent from "@entities/SportEvent";
import type Country from "@entities/Country";
import generateMatches from "@common/utils/mock/generateMatches";
import { generateDatesRange } from "../dates";

const datesRange = generateDatesRange(
  subDays(new Date(), 7),
  addDays(new Date(), 8),
  "days"
);

const generateSportEvents = (
  count: number,
  countries: Country[],
  matchesCount = 5
): SportEvent[] =>
  Array(count)
    .fill(0)
    .map(() => {
      const { name: country, code: countryCode } =
        faker.helpers.arrayElement(countries);

      return {
        id: faker.datatype.uuid() as unknown as SportEvent["id"],
        name: faker.company.name(),
        date: +faker.helpers.arrayElement(datesRange),
        country,
        countryCode,
        isFavorite: faker.datatype.boolean(),
        matches: generateMatches(matchesCount),
      };
    });

export default generateSportEvents;
