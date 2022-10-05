import type MatchType from "@entities/Match";
import React from "react";
import { Grid } from "@mui/material";

import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";

type MatchProps = {
  match: MatchType;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <FavoriteCheckbox />
      </Grid>
    </Grid>
  );
};

export default Match;
