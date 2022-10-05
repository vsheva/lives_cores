import { Typography } from "@mui/material";
import React from "react";

import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";

type CountrySportEventProps = {
  children: React.ReactNode;
};

const CountrySportEvent: React.FC<CountrySportEventProps> = ({ children }) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "0.9rem",
        opacity: 0.8,
      }}
      variant="subtitle1"
      component="span"
    >
      {children}
      <FavoriteCheckbox disableRipple={false} sx={{ padding: 0.5 }} />
    </Typography>
  );
};

export default CountrySportEvent;
