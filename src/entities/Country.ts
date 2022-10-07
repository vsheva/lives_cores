import type SportName from "@entities/SportName";

type Country = {
  id: number;
  name: string;
};

/* 
  This type is associated with server response to get dynamic URL parts for country sport event
  Result URL should look like this: '/{sportName}/{countryName}/{eventName}' for each event in a list of names
*/
export type CountrySportEventNames = {
  sportName: SportName;
  countryName: string;
  sportEvents: string[];
};

export default Country;
