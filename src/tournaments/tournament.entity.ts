import { Entity, FilePath, Id } from '../general/general';
import { TournamentLayoutEntity, TournamentLayoutSchema } from '../organizations';
import { CategoryType } from '../teams';
import { FinancialStatementsModel } from './financial-statements.entity';

export type TournamentStatusType = 'draft' | 'check-in' | 'running' | 'finished' | 'canceled' | 'deleted';
export const TOURNAMENT_STATUS_TYPE = ['draft', 'check-in', 'running', 'finished', 'canceled', 'deleted'];

export type FinancialStatusType = 'paid' | 'partial-paid' | 'pending' | 'overdue';
export const FINANCIAL_STATUS_TYPE = ['paid', 'partial-paid', 'pending', 'overdue'];

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
  financialStatus?: FinancialStatusType;
  tournamentLayoutId: Id;
  tournamentLayout?: TournamentLayoutEntity;
  requestRequiredDocs?: boolean;
  refereeIds?: Id[];
  version: string;
  schema?: TournamentLayoutSchema;
  year: number;
  podium?: string[];
}
