import { Entity, Id } from '../general';
import { RegisteredTeamStatus, TournamentStatusType } from '../tournaments';

export type StadistisKind = 'P' | 'GA' | 'LDF' | 'GD' | 'GIF' | 'FP' | 'LM' | 'PM' | 'TM' | 'WM';

export const DEFAULT_STADISTICS_ORDER: StadistisKind[] = ['P', 'GA', 'LDF', 'GD', 'GIF', 'FP', 'LM', 'PM', 'TM', 'WM'];

export type BasicTieBreakingOrder = Omit<StadistisKind, 'P'>;
export type AdvancedTieBreadingOrder = 'WB2' | 'IP' | 'BP' | 'BPGT';
export type TieBreakingOrder = BasicTieBreakingOrder | AdvancedTieBreadingOrder;

export enum BasicTieBreakingOrderEnum {
  'GA' = 'GA',
  'GAPM' = 'GAPM',
  'GD' = 'GD',
  'GIF' = 'GIF',
  'FP' = 'FP',
  'LM' = 'LM',
  'PM' = 'PM',
  'TM' = 'TM',
  'WM' = 'WM',
}
export enum AdvancedTieBreakingOrderEnum {
  'WB2' = 'WB2',
  'IP' = 'IP',
  'BP' = 'BP',
  'BPGT' = 'BPGT',
}
export enum TieBreakingOrderEnum {
  'GA' = 'GA',
  'GAPM' = 'GAPM',
  'GD' = 'GD',
  'GIF' = 'GIF',
  'FP' = 'FP',
  'LM' = 'LM',
  'PM' = 'PM',
  'WB2' = 'WB2',
  'TM' = 'TM',
  'IP' = 'IP',
  'BP' = 'BP',
  'BPGT' = 'BPGT',
  'WM' = 'WM',
}

export const TieBreakingOrderMap = {
  GA: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'goalsAgainst',
  },
  GAPM: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'goalsAgainstPerMatch',
  },
  GD: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'goalsDifference',
  },
  GIF: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'goalsInFavor',
  },
  FP: {
    operator: (a: number, b: number) => (a < b ? -1 : a > b ? 1 : 0),
    property: 'fairPlay',
  },
  LM: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'lostMatches',
  },
  PM: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'playedMatches',
  },
  WB2: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: null,
  },
  TM: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'tiedMatches',
  },
  WM: {
    operator: (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0),
    property: 'wonMatches',
  },
};

export interface TournamentLayoutSchema {
  name: string;
  stages: FixtureStageConfiguration[];
}
export interface FixtureStageConfiguration {
  passedTeamsCount: number[];
  groupCount: number;
  groupSize: number[];
}

export interface PointsConfiguration {
  wonMatchPoints: number;
  tieMatchPoints: number;
  lostMatchPoints: number;
}

export interface NegativePointsPerCard {
  yellowCardsNegativePoints: number;
  redCardsNegativePoints: number;
}

export interface FixtureStagesConfiguration {
  negativePointsPerCard: NegativePointsPerCard;
  schemas: TournamentLayoutSchema[];
  pointsConfiguration: PointsConfiguration;
  stadisticsOrder: StadistisKind[];
  tieBreakingOrder: TieBreakingOrder[];
}

export interface RequiredDocConfig {
  name: string;
  identifier: string;
  description: string;
  applyTo: 'player' | 'team';
  fileKind: ('pdf' | 'jpg')[];
  status: 'enabled' | 'disabled' | 'deleted';
}

export const DEFAULT_NEGATIVE_POINTS_PER_CARD_CONFIGURATION: NegativePointsPerCard = {
  redCardsNegativePoints: 3,
  yellowCardsNegativePoints: 2,
};

export const DEFAULT_POINTS_CONFIGURATION_CONFIGURATION: PointsConfiguration = {
  lostMatchPoints: 0,
  tieMatchPoints: 1,
  wonMatchPoints: 3,
};

export const DEFAULT_STADISTIS_KIND_CONFIGURATION: StadistisKind[] = ['P', 'PM', 'LM', 'WM', 'TM', 'GIF', 'GA', 'GD', 'FP', 'LDF'];

export const DEFAULT_SCHEMA_CONFIGURATION: TournamentLayoutSchema = {
  name: 'default',
  stages: [
    {
      groupCount: 2,
      groupSize: [4, 4],
      passedTeamsCount: [2, 2],
    },
  ],
};

export const DEFAULT_SCHEMAS_CONFIGURATION: TournamentLayoutSchema[] = [DEFAULT_SCHEMA_CONFIGURATION];

export const DEFAULT_TIE_BREAKING_ORDER_CONFIGURATION: BasicTieBreakingOrder[] = ['WM', 'GD', 'GIF', 'FP'];

export const DEFAULT_FIXTURE_STAGES_CONFIGURATION: FixtureStagesConfiguration = {
  negativePointsPerCard: DEFAULT_NEGATIVE_POINTS_PER_CARD_CONFIGURATION,
  pointsConfiguration: DEFAULT_POINTS_CONFIGURATION_CONFIGURATION,
  stadisticsOrder: DEFAULT_STADISTIS_KIND_CONFIGURATION,
  schemas: DEFAULT_SCHEMAS_CONFIGURATION,
  tieBreakingOrder: DEFAULT_TIE_BREAKING_ORDER_CONFIGURATION,
};

export interface TournamentLayoutEntity extends Entity {
  categories: Array<string>;
  description: string;
  flayer?: string;
  name: string;
  organizationId: Id;
  requiredDocsConfig?: RequiredDocConfig[];
  registeredTeamsVisibleStatus?: RegisteredTeamStatus[];
  fixtureStagesConfiguration?: FixtureStagesConfiguration;
  editions?: Array<string>;
}
