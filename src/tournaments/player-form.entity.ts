import { Id } from '../general';

export interface PlayerForm {
  teamA: Id[];
  teamB: Id[];
}
export interface PlayersInMatchData {
  teamA: {
    [memberId: string]: {
      number: number;
    };
  };
  teamB: {
    [memberId: string]: {
      number: number;
    };
  };
}
