import { faker } from "@faker-js/faker";

import type Match from "@entities/Match";
import generateTeams from "./generateTeams";

const generateMatches = (count: number): Match[] =>
  Array(count)
    .fill(0)
    .map(() => ({
      id: faker.datatype.uuid() as unknown as Match["id"],
      isFavorite: faker.datatype.boolean(),
      teams: generateTeams(),
      status: faker.helpers.arrayElement([
        "CANCELLED",
        "PLANNED",
        "FINISHED",
        "FINISHING",
        "MOVED",
        "BREAK",
      ]),
      isOngoing: faker.datatype.boolean(),
      plannedDate: +new Date(),
      isFinalResultOnly: faker.datatype.boolean(),
      isForeignStadium: faker.datatype.boolean(),
      isNeutralStadium: faker.datatype.boolean(),
    }));

export default generateMatches;
