import styled from "styled-components";
import { Box } from "@mui/material";

export const MatchGrid = styled(Box)`
  display: grid;
  align-items: center;
  grid-template:
    " check       dropdown                 stageOrTime homeLogo             homeParticipant homeScore homePart1 homePart2 iconStr iconInf iconTv iconStd liveIcon"
    minmax(23px, auto)
    " check       dropdown                 stageOrTime awayLogo             awayParticipant awayScore awayPart1 awayPart2 iconStr iconInf iconTv iconStd liveIcon"
    minmax(23px, auto) / max-content 0px 90px 24px 1fr 34px 34px 34px 28px 24px
    24px 38px 31px;
  position: relative;
  font-size: 0.9rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.support.main}`};

  &:before {
    content: "";
    background: ${({ theme }) => theme.palette.support.main};
    height: calc(100% - 12px);
    position: absolute;
    right: 144px;
    top: 6px;
    width: 1px;
  }
`;

export const Check = styled(Box)`
  grid-area: check;
`;

export const StageOrTime = styled(Box)`
  grid-area: stageOrTime;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

// TODO: Replace with next/image
const Logo = styled((props) => <img alt={props.alt} {...props} />)`
  display: inline-block;
  width: 13px;
  height: 13px;
`;

export const HomeLogo = styled(Logo)`
  grid-area: homeLogo;
`;

export const AwayLogo = styled(Logo)`
  grid-area: awayLogo;
`;

export const HomeParticipant = styled(Box)`
  grid-area: homeParticipant;
`;

export const AwayParticipant = styled(Box)`
  grid-area: awayParticipant;
`;

const Score = styled(Box)`
  font-weight: 600;
`;

export const HomeScore = styled(Score)`
  grid-area: homeScore;
`;

export const AwayScore = styled(Score)`
  grid-area: awayScore;
`;

const Part = styled(Box)`
  color: ${({ theme }) => theme.palette.support.dark};
`;

export const HomePart = styled(Part)`
  grid-area: homePart1;
`;

export const AwayPart = styled(Part)`
  grid-area: awayPart1;
`;
