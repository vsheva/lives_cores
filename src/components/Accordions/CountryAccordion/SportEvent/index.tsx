import { Link } from "@mui/material";
import React from "react";

import type SportEvent from "@entities/SportEvent";
import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import * as Styled from "./SportEvent.styled";

type CountrySportEventProps = {
  title: SportEvent["title"];
};

const CountrySportEvent: React.FC<CountrySportEventProps> = ({ title }) => {
  return (
    <Styled.SportEvent>
      <Link href="#" sx={{ flex: 1 }}>
        {title}
      </Link>
      <FavoriteCheckbox sx={{ "*": { fontSize: "1.5rem" } }} />
    </Styled.SportEvent>
  );
};

export default CountrySportEvent;
