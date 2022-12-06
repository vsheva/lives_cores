export type TvChannel = { name: string; isLive: boolean };

export type MatchResult = [number, number];

export type Team = {
  id: number;
  name: string;
  logoUrl: string;
  isForeignStadium: boolean;
  score?: number;
  part?: number;
};

export type MatchStatus =
  | 'CANCELLED'
  | 'FINISHED'
  | 'FINISHING'
  | 'MOVED'
  | 'BREAK';

type Match = {
  id: number;
  teams: [Team, Team];
  isFavorite: boolean;
  status: MatchStatus;
  isOngoing: boolean;
  plannedDate: number;
  isFinalResultOnly: boolean;
  passedMinutes?: number;
  isLineups?: boolean;
  liveBetUrl?: string;
  tvChannel?: TvChannel;
  firstMatchResult?: MatchResult;
};

export default Match;
