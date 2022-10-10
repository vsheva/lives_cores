import { add, format, toDate } from "date-fns";
import ukLocale from "date-fns/locale/uk";

export const generateDatesRange = (
  startDate: Date,
  endDate: Date,
  duration: keyof Duration
): Date[] => {
  let tempStartDate = toDate(startDate);
  const configDuration = { [duration]: 1 };
  const datesRange = [];

  while (tempStartDate < endDate) {
    datesRange.push(tempStartDate);
    tempStartDate = add(tempStartDate, configDuration);
  }

  return datesRange;
};

export const formatDate = (weekDate: Date, dateFormat: string) =>
  format(weekDate, dateFormat, { locale: ukLocale });
