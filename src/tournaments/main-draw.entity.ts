import { Entity, Id } from '../general';
import { MatchEntity } from './match.entity';

export interface NodeMatchEntity extends Entity{
  tournamentId: Id;
  level: number;
  match: MatchEntity;
  key: number;
}
export interface IMainDrawModel {
  root: NodeMatchEntity;
}
