import type SportEvent from "@entities/SportEvent";
import generateMatches from "@common/utils/mock/generateMatches";
import { faker } from "@faker-js/faker";

const generateSportEvents = (count: number, matchesCount = 5): SportEvent[] =>
  Array(count)
    .fill(0)
    .map(() => ({
      id: faker.datatype.uuid() as unknown as SportEvent["id"],
      title: faker.company.name(),
      country: faker.address.country(),
      countryCode: faker.address.countryCode(),
      isFavorite: faker.datatype.boolean(),
      matches: generateMatches(matchesCount),
    }));

export default generateSportEvents;
