import axios from "axios";

import type SportNameId from "@entities/SportNameId";
import type SportEvents from "@entities/SportEvents";

export const getSportEvents = async (
  sportName: SportNameId,
  date: Date
): Promise<SportEvents> => {
  const { data } = await axios.get(
    `/api/sport-events/${sportName}/${date.toISOString()}`
  );
  return data;
};
