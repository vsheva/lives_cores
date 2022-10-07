import type SportEvent from "@entities/SportEvent";
import { faker } from "@faker-js/faker";

import type Country from "@entities/Country";

const generateCountries = (count: number): Country[] =>
  Array(count)
    .fill(0)
    .map((_1, _2, countries) => ({
      id: faker.datatype.uuid() as unknown as Country["id"],
      name: (function getCountry() {
        const newCountry = faker.address.country();
        if (countries.map(({ name }) => name).includes(newCountry)) {
          getCountry();
        }

        return newCountry;
      })(),
    }));

export default generateCountries;
