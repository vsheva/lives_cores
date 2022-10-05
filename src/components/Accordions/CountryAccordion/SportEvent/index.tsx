import { Link, Typography } from "@mui/material";
import React from "react";

import type SportEvent from "@entities/SportEvent";
import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";

type CountrySportEventProps = {
  title: SportEvent["title"];
};

const CountrySportEvent: React.FC<CountrySportEventProps> = ({ title }) => {
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
      <Link href="#" sx={{ flex: 1 }}>
        {title}
      </Link>
      <FavoriteCheckbox sx={{ "*": { fontSize: "1.5rem" } }} />
    </Typography>
  );
};

export default CountrySportEvent;
