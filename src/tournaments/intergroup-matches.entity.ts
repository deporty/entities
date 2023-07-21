import { Entity, Id } from '../general';
import { MatchEntity } from './match.entity';

export interface IntergroupMatchEntity extends Entity {
  fixtureStageId: Id;
  match: MatchEntity;
  // teamAGroupId: Id;
  // teamBGroupId: Id;
}
