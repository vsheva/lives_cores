import { isSameDay, parseISO } from "date-fns";

import { countries, sportEvents } from "./index";

export default function handler(req, res) {
  res.status(200).json({
    countries,
    sportEvents: sportEvents.filter(({ date }) =>
      isSameDay(date, parseISO(req.query.date))
    ),
  });
}
