import { Id } from '../general';
import { Entity, FilePath } from '../general/general';
import { PlaygroundEntity } from '../locations/playground.entity';
import { PlayerForm } from './player-form.entity';
import { IScoreModel } from './score.entity';
import { Stadistics } from './stadistics.entity';

export type IMatchStatusType =
  | 'published'
  | 'editing'
  | 'completed'
  | 'in-review';
export const MATCH_STATUS = {
  published: 'Publicado',
  editing: 'En edición',
  completed: 'Completado',
  'in-review': 'En revisión',
};
export type RefereeRol = 'main';
export interface MatchEntity extends Entity {
  captainASignature?: FilePath;
  captainBSignature?: FilePath;
  date?: Date;
  judgeSignature?: FilePath;
  locationId?: Id;
  observations?: string;
  playground?: PlaygroundEntity;
  score?: IScoreModel;
  stadistics?: Stadistics;
  playerForm?: PlayerForm;
  status: IMatchStatusType;
  teamAId: Id;
  teamBId: Id;
  refereeIds?: {
    refereeId: Id;
    rol: RefereeRol;
  }[];
}
