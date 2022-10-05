import type Match from "@entities/Match";

type SportEvent = {
  id: number;
  title: string;
  country: string;
  countryCode: string;
  isFavorite: boolean;
  matches: Match[];
};

export default SportEvent;
