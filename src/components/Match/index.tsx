import type MatchType from "@entities/Match";
import React from "react";
import { Box } from "@mui/material";

import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import theme from "@theme";

type MatchProps = {
  match: MatchType;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  const [homeTeam, awayTeam] = match.teams;
  // TODO: Move to styled components, add other columns
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
        {match.status}
      </Box>
      <img
        style={{
          width: 16,
          height: 16,
          gridArea: "homeLogo",
        }}
        src={homeTeam.logoUrl}
      />
      <img
        style={{ width: 16, height: 16, gridArea: "awayLogo" }}
        src={awayTeam.logoUrl}
      />
      <Box sx={{ gridArea: "homeParticipant" }}>{homeTeam.name}</Box>
      <Box sx={{ gridArea: "awayParticipant", fontWeight: 600 }}>
        {awayTeam.name}
      </Box>
      <Box sx={{ gridArea: "homeScore", fontWeight: 600 }}>
        {homeTeam.score || "-"}
      </Box>
      <Box sx={{ gridArea: "awayScore", fontWeight: 600 }}>
        {awayTeam.score || "-"}
      </Box>
      {typeof homeTeam.score === "number" && (
        <>
          <Box
            sx={{ gridArea: "homePart1", color: theme.palette.support.dark }}
          >
            ({homeTeam.part || "-"})
          </Box>
          <Box
            sx={{ gridArea: "awayPart1", color: theme.palette.support.dark }}
          >
            ({awayTeam.part || "-"})
          </Box>
        </>
      )}
    </Box>
  );
};

export default Match;
