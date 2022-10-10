import { useMemo } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { addDays, isSameDay, subDays } from "date-fns";
import { BoxTypeMap } from "@mui/material";

import { formatDate, generateDatesRange } from "@common/utils/dates";
import { DATE_FORMAT } from "@common/data/date-picker";
import usePopover from "@common/hooks/usePopover";

import * as Styled from "./WeekDatePicker.styled";

type DatePickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
};

const DatePicker: OverridableComponent<BoxTypeMap<DatePickerProps, "div">> = ({
  date,
  onChange,
  ...props
}) => {
  const { anchor, handleOpen, handleClose } = usePopover();

  const currentDate = new Date();

  const weekDates = useMemo(() => {
    return generateDatesRange(
      subDays(currentDate, 7),
      addDays(currentDate, 8),
      "days"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Styled.Picker {...props}>
        <Styled.ArrowButton
          onClick={() => onChange(subDays(date, 1))}
          disabled={isSameDay(date, weekDates[0])}
        >
          <Styled.LeftArrowIcon />
        </Styled.ArrowButton>
        <Styled.PickerButton onClick={handleOpen}>
          <CalendarMonthOutlined />
          {formatDate(date, DATE_FORMAT)}
        </Styled.PickerButton>
        <Styled.ArrowButton
          onClick={() => onChange(addDays(date, 1))}
          disabled={isSameDay(date, weekDates[weekDates.length - 1])}
        >
          <Styled.RightArrowIcon />
        </Styled.ArrowButton>
      </Styled.Picker>
      <Styled.Popover open={!!anchor} anchorEl={anchor} onClose={handleClose}>
        <Styled.WeekDays>
          {weekDates.map((weekDate) => (
            <Styled.WeekDayButton
              onClick={() => onChange(weekDate)}
              active={isSameDay(weekDate, date)}
              key={+weekDate}
            >
              {isSameDay(weekDate, currentDate)
                ? "Сьогодні"
                : formatDate(weekDate, DATE_FORMAT)}
            </Styled.WeekDayButton>
          ))}
        </Styled.WeekDays>
      </Styled.Popover>
    </>
  );
};

export default DatePicker;
