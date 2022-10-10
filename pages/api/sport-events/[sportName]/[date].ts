import { isSameDay, parseISO } from "date-fns";

import type SportEvent from "@entities/SportEvent";
import { sportEvents } from "./index";

export default function handler(req, res) {
  const data: SportEvent[] = sportEvents.filter(({ date }) =>
    isSameDay(date, parseISO(req.query.date))
  );

  res.status(200).json(data);
}
