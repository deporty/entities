import { Id } from '../general';
import { Entity } from '../general/general';
import { MatchEntity } from './match.entity';
import { FlatPointsStadistics } from './points-stadistics.entity';

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
