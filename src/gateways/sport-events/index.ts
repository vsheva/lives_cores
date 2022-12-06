import axios from 'axios';

import type SportNameId from '@entities/SportNameId';
import type SportEvent from '@entities/SportEvent';

export const getSportEvents = async (sportName: SportNameId, date: Date): Promise<SportEvent[]> => {
  const { data } = await axios.get(`/api/sport-events/${sportName}/${date.toISOString()}`);
  return data;
};
