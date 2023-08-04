import { Entity, Id } from '../general';
export type KindMatch = 'main-draw' | 'intergroup' | 'group';

export interface MainDrawMatchesByRefereeIdEntity extends Entity {
  kind: 'main-draw';
  refereeId: Id;
  tournamentId: Id;
  matchId: Id;
}

export interface IntergroupMatchesByRefereeIdEntity extends Omit<MainDrawMatchesByRefereeIdEntity, 'kind'> {
  kind: 'intergroup';
  fixtureStageId: Id;
}

export interface GroupMatchesByRefereeIdEntity extends Omit<MainDrawMatchesByRefereeIdEntity, 'kind'> {
  kind: 'group';
  fixtureStageId: Id;
  groupId: Id;
}
export type MatchesByRefereeIdEntity =
  | GroupMatchesByRefereeIdEntity
  | IntergroupMatchesByRefereeIdEntity
  | MainDrawMatchesByRefereeIdEntity;
