import type { Team } from "@entities/Match";
import { faker } from "@faker-js/faker";

const generateTeams = (): [Team, Team] =>
  Array(2)
    .fill(0)
    .map(() => ({
      id: faker.datatype.uuid() as unknown as Team["id"],
      name: faker.company.name(),
      logoUrl: faker.image.abstract(0, 0, true),
      score: faker.datatype.number(5),
    })) as [Team, Team];

export default generateTeams;
