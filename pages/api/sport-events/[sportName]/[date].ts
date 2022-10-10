import { isSameDay, parseISO } from "date-fns";

import type SportEvents from "@entities/SportEvents";
import { countries, eventsList } from "./index";

export default function handler(req, res) {
  const data: SportEvents = {
    countries,
    eventsList: eventsList.filter(({ date }) =>
      isSameDay(date, parseISO(req.query.date))
    ),
  };

  res.status(200).json(data);
}
