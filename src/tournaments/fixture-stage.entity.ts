import { Id } from '../general';
import { Entity } from '../general/general';

export interface FixtureStageEntity extends Entity {
  tournamentId: Id;
  order: number;
}
