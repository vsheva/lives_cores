import { generateDatesRange } from "@common/utils/dates";
import {
  CalendarMonthOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Box, BoxTypeMap, Button, Popover } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { addDays, format, isSameDay, subDays } from "date-fns";
import ukLocale from "date-fns/locale/uk";
import React from "react";

type DatePickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
};

const DATE_FORMAT = "dd/MM eeeeee";

const DatePicker: OverridableComponent<BoxTypeMap<DatePickerProps, "div">> = ({
  date,
  onChange,
  ...props
}) => {
  // TODO: Refactor to styled components

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const weekDates = generateDatesRange(
    subDays(new Date(), 7),
    addDays(new Date(), 8),
    "days"
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #eee",
          borderRadius: 2,
          overflow: "hidden",
        }}
        {...props}
      >
        <Button
          color="inherit"
          style={{
            borderRadius: 0,
            padding: 0,
            height: 28,
            width: 30,
            visibility: isSameDay(date, weekDates[0]) ? "hidden" : "visible",
            pointerEvents: isSameDay(date, weekDates[0]) ? "none" : "all",
          }}
          onClick={() => onChange(subDays(date, 1))}
        >
          <KeyboardArrowLeft sx={{ opacity: 0.5 }} />
        </Button>
        <Button
          color="inherit"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            opacity: 0.7,
            fontWeight: 600,
            fontSize: "0.875rem",
            whiteSpace: "nowrap",
            borderRadius: 0,
            padding: "0 8px",
            height: "100%",
          }}
          onClick={handleClick}
        >
          <CalendarMonthOutlined />
          {format(date, DATE_FORMAT, { locale: ukLocale })}
        </Button>
        <Button
          color="inherit"
          style={{
            borderRadius: 0,
            padding: 0,
            height: 28,
            width: 30,
            visibility: isSameDay(date, weekDates[weekDates.length - 1])
              ? "hidden"
              : "visible",
            pointerEvents: isSameDay(date, weekDates[weekDates.length - 1])
              ? "none"
              : "all",
          }}
          onClick={() => onChange(addDays(date, 1))}
        >
          <KeyboardArrowRight sx={{ opacity: 0.5 }} />
        </Button>
      </Box>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{ sx: { padding: "12px 8px", width: 160 } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.2,
          }}
        >
          {/* TODO: DRY some code */}
          {weekDates.map((weekDate) => (
            <Button
              color={isSameDay(weekDate, date) ? "primary" : "inherit"}
              variant={isSameDay(weekDate, date) ? "contained" : "text"}
              sx={{
                flex: 1,
                padding: "4px 24px",
                fontWeight: isSameDay(weekDate, date) ? 600 : 400,
              }}
              key={weekDate}
              onClick={() => onChange(weekDate)}
            >
              {isSameDay(weekDate, new Date())
                ? "Сьогодні"
                : format(weekDate, DATE_FORMAT, { locale: ukLocale })}
            </Button>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default DatePicker;
