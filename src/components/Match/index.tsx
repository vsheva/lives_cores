import type MatchType from "@entities/Match";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import { getRgba } from "@common/utils/palette";
import theme from "@theme";

type MatchProps = {
  match: MatchType;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplate: `
          " check       dropdown                 stageOrTime homeLogo             homeParticipant homeScore homePart1 homePart2 iconStr iconInf iconTv iconStd liveIcon" minmax(23px,auto)
          " check       dropdown                 stageOrTime awayLogo             awayParticipant awayScore awayPart1 awayPart2 iconStr iconInf iconTv iconStd liveIcon" minmax(23px,auto) /max-content 0px 90px 24px 1fr 34px 34px 34px 28px 24px 24px 38px 31px
        `,
        position: "relative",
        fontSize: "0.9rem",
        borderBottom: `1px solid ${theme.palette.support.main}`,
        "&:before": {
          background: theme.palette.support.main,
          content: '""',
          height: "calc(100% - 12px)",
          position: "absolute",
          right: "144px",
          top: "6px",
          width: "1px",
        },
      }}
    >
      <Box sx={{ gridArea: "check" }}>
        <FavoriteCheckbox />
      </Box>
      <Box
        sx={{ gridArea: "stageOrTime", color: theme.palette.text.secondary }}
      >
        Завершено
      </Box>
      <img
        style={{
          width: 16,
          gridArea: "homeLogo",
        }}
        src="https://www.flashscore.ua/res/image/data/r5iH05UH-bm1huYuJ.png"
      />
      <img
        style={{ width: 16, gridArea: "awayLogo" }}
        src="https://www.flashscore.ua/res/image/data/x6v5exT0-OvlpVrSr.png"
      />
      <Box sx={{ gridArea: "homeParticipant" }}>Зіра 2</Box>
      <Box sx={{ gridArea: "awayParticipant", fontWeight: 600 }}>Араз</Box>
      <Box sx={{ gridArea: "homeScore", fontWeight: 600 }}>0</Box>
      <Box sx={{ gridArea: "awayScore", fontWeight: 600 }}>1</Box>
      <Box sx={{ gridArea: "homePart1", color: theme.palette.support.dark }}>
        (0)
      </Box>
      <Box sx={{ gridArea: "awayPart1", color: theme.palette.support.dark }}>
        (1)
      </Box>
    </Box>
  );
};

export default Match;
