import { add, toDate } from "date-fns";

export const generateDatesRange = (
  startDate: Date,
  endDate: Date,
  duration: keyof Duration
) => {
  let tempStartDate = toDate(startDate);
  const configDuration = { [duration]: 1 };
  const datesRange = [];

  while (tempStartDate < endDate) {
    datesRange.push(tempStartDate);
    tempStartDate = add(tempStartDate, configDuration);
  }

  return datesRange;
};
