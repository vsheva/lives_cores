import generateSportEvents from "@common/utils/mock/generateSportEvents";
import type SportEvent from "@entities/SportEvent";

const sportEvents: SportEvent[] = generateSportEvents(20);

export default function handler(req, res) {
  res.status(200).json(sportEvents);
}
