import { Link } from "@mui/material";
import React from "react";

import type { CountrySportEvent as CountrySportEventType } from "@entities/Country";
import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import * as Styled from "./SportEvent.styled";

type CountrySportEventProps = {
  countryEvent: CountrySportEventType;
};

const CountrySportEvent: React.FC<CountrySportEventProps> = ({
  countryEvent,
}) => {
  return (
    <Styled.SportEvent>
      <Link href="#" sx={{ flex: 1 }}>
        {countryEvent.name}
      </Link>
      <FavoriteCheckbox defaultChecked={countryEvent.isFavorite} />
    </Styled.SportEvent>
  );
};

export default CountrySportEvent;
