import type Match from "@entities/Match";

type SportEvent = {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  date: number;
  isFavorite: boolean;
  matches: Match[];
};

export default SportEvent;
