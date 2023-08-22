import { Id } from '../general';
import { Entity } from '../general/general';
import { MatchEntity } from './match.entity';
import { FlatPointsStadistics } from './points-stadistics.entity';

export const DEFAULT_GROUP_SIZE_LABELS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export interface PositionsTable {
  table: {
    teamId: string;
    stadistics: FlatPointsStadistics;
    wasByRandom: boolean;
  }[];
  analizedMatches: Id[];
}
export interface GroupEntity extends Entity {
  fixtureStageId: Id;
  label: string;
  order: number;
  teamIds: Array<Id>;
  positionsTable?: PositionsTable;
}

export interface MatchInGroupEntity extends MatchEntity {
  groupId: Id;
}

export interface RegisteredTeamInGroupEntity extends Entity {
  groupId: Id;
  teamId: Id;
}
