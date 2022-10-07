import axios from "axios";

import type SportName from "@entities/SportName";

export const getSportEvents = async (sportName: SportName) => {
  const { data } = await axios.get(`/api/sport-events/${sportName}`);
  return data;
};
