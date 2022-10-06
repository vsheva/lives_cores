import {
  CalendarMonthOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Box, ButtonBase, Button, IconButton } from "@mui/material";
import React from "react";

type DatePickerProps = {};

const DatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #eee",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Button
        color="inherit"
        style={{ borderRadius: 0, padding: 0, height: 28, width: 30 }}
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
      >
        <CalendarMonthOutlined />
        06/10 ЧТ
      </Button>
      <Button
        color="inherit"
        style={{ borderRadius: 0, padding: 0, height: 28, width: 30 }}
      >
        <KeyboardArrowRight sx={{ opacity: 0.5 }} />
      </Button>
    </Box>
  );
};

export default DatePicker;
