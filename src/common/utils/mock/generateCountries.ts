import isoCountries from "i18n-iso-countries";
import { faker } from "@faker-js/faker";

import type Country from "@entities/Country";

function getCountry(countries: Country[]) {
  const newCountry = faker.address.country();
  if (countries.map(({ name }) => name).includes(newCountry)) {
    return getCountry(countries);
  }

  return newCountry;
}

const generateCountries = (count: number): Country[] =>
  Array(count)
    .fill(0)
    .map((_1, _2, countries) => {
      const name = getCountry(countries);

      return {
        name,
        code: isoCountries.getAlpha2Code(name, "en"),
      };
    });

export default generateCountries;
