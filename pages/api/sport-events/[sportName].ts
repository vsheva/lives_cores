import generateSportEvents from "@common/utils/mock/generateSportEvents";
import type SportEvent from "@entities/SportEvent";

const MOCK_SPORT_EVENTS_COUNT = 20;
const sportEvents: SportEvent[] = generateSportEvents(MOCK_SPORT_EVENTS_COUNT);

export default function handler(req, res) {
  res.status(200).json({ sportEvents });
}
