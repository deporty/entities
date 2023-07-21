import { Id } from '../general';

export interface PointsStadistics {
  teamId: Id;
  playedMatches: number;
  wonMatches: number;
  fairPlay: number;
  tiedMatches: number;
  lostMatches: number;
  goalsInFavor: number;
  goalsAgainst: number;
  goalsDifference: number;
  goalsAgainstPerMatch: number;
  points: number;
}
export type FlatPointsStadistics = Omit<PointsStadistics, 'teamId'>;

export interface GroupPointsStadistics {
  groupId: Id;
  table: PointsStadistics[];
}
