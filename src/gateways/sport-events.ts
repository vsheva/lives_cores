import axios from "axios";

export const getSportEvents = async () => {
  const { data } = await axios.get(`/api/sport-events`);
  return data;
};
