import React from "react";

import type MatchType from "@entities/Match";
import FavoriteCheckbox from "@components/Checkboxes/FavoriteCheckbox";
import { formatPart } from "@common/utils/match";

import * as Styled from "./Match.styled";

type MatchProps = {
  match: MatchType;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  const [homeTeam, awayTeam] = match.teams;

  return (
    <Styled.MatchGrid>
      <Styled.Check>
        <FavoriteCheckbox size="large" defaultChecked={match.isFavorite} />
      </Styled.Check>
      <Styled.StageOrTime>{match.status}</Styled.StageOrTime>
      <Styled.HomeLogo src={homeTeam.logoUrl} />
      <Styled.AwayLogo src={awayTeam.logoUrl} />
      <Styled.HomeParticipant>{homeTeam.name}</Styled.HomeParticipant>
      <Styled.AwayParticipant>{awayTeam.name}</Styled.AwayParticipant>
      <Styled.HomeScore>{homeTeam.score || "-"}</Styled.HomeScore>
      <Styled.AwayScore>{awayTeam.score || "-"}</Styled.AwayScore>
      <Styled.HomePart>{formatPart(homeTeam.part)}</Styled.HomePart>
      <Styled.AwayPart>{formatPart(awayTeam.part)}</Styled.AwayPart>
    </Styled.MatchGrid>
  );
};

export default Match;
