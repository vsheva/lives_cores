import { useEffect, useState } from "react";

import type SportNameId from "@entities/SportNameId";
import type SportEvent from "@entities/SportEvent";
import * as SportEventsGateway from "@gateways/sport-events";

const useSportEvents = (sportNameId: SportNameId) => {
  const [date, setDate] = useState<Date>(new Date());
  const [sportEvents, setSportEvents] = useState<SportEvent[]>([]);

  useEffect(() => {
    (async () => {
      const sportEventsData = await SportEventsGateway.getSportEvents(
        sportNameId,
        date
      );

      setSportEvents(sportEventsData);
    })();
  }, [date, sportNameId]);

  return { date, setDate, sportEvents };
};

export default useSportEvents;
