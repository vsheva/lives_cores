import type MatchType from "@entities/Match";
import React from "react";
import { Grid } from "@mui/material";

import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import { getRgba } from "@common/utils/palette";
import theme from "@theme";

type MatchProps = {
  match: MatchType;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  return (
    <Grid
      container
      sx={{
        borderBottom: `1px solid ${getRgba(
          theme.palette.secondary.dark,
          0.06
        )}`,
        padding: 0.5,
      }}
    >
      <Grid
        item
        direction="row"
        container
        xs={2}
        wrap="nowrap"
        sx={{ alignItems: "center", fontSize: "0.9rem" }}
      >
        <Grid item>
          <FavoriteCheckbox />
        </Grid>
        <Grid item sx={{ color: theme.palette.support.darker }}>
          Завершено
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* TODO: Replace with next/image when moved locally */}
          <img
            style={{ width: 16 }}
            src="https://www.flashscore.ua/res/image/data/r5iH05UH-bm1huYuJ.png"
          />
          Зіра 2
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 600,
          }}
        >
          <img
            style={{ width: 16 }}
            src="https://www.flashscore.ua/res/image/data/x6v5exT0-OvlpVrSr.png"
          />
          Араз
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
          }}
        >
          0
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
          }}
        >
          1
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        >
          (0)
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        >
          (1)
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
      </Grid>
      <Grid
        item
        container
        xs={1}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
      </Grid>
      <Grid
        item
        container
        xs={0.5}
        direction="column"
        sx={{ fontSize: "0.9rem", gap: 0.5 }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.support.dark,
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default Match;
