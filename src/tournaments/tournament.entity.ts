import { Entity, FilePath, Id } from '../general/general';
import { TournamentLayoutSchema } from '../organizations';
import { CategoryType } from '../teams';
import { FinancialStatementsModel } from './financial-statements.entity';

export type TournamentStatusType = 'draft' | 'check-in' | 'running' | 'finished' | 'canceled' | 'deleted';
export const TOURNAMENT_STATUS_TYPE = ['draft', 'check-in', 'running', 'finished', 'canceled', 'deleted'];

export interface TournamentEntity extends Entity {
  category: CategoryType;
  edition?: string;
  financialStatements: FinancialStatementsModel;
  flayer?: FilePath;
  inscription?: string;
  locations: Array<Id>;
  organizationId: Id;
  regulation?: string;
  reward?: number[];
  startsDate: Date;
  status: TournamentStatusType;
  tournamentLayoutId: Id;
  refereeIds?: Id[];
  version: string;
  schema?: TournamentLayoutSchema;
  year: number;
  podium?: string[];
}
