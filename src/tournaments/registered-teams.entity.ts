import { Id } from '../general';
import { Entity } from '../general/general';
import { MemberEntity } from '../teams/index';

export type RegisteredTeamStatus = 'pre-registered' | 'pre-registered and enabled' | 'enabled';
export const REGISTERED_TEAM_STATUS = ['pre-registered', 'pre-registered and enabled', 'enabled'];

export interface RequiredDocsInRegisteredTeam {
  members: {
    [memberId: string]: {
      [requiredDocIdentifier: string]: string;
    };
  };
  team: {
    [requiredDocIdentifier: string]: string;
  };
}
export interface RegisteredTeamEntity extends Entity {
  tournamentId: Id;
  enrollmentDate: Date;
  members: MemberEntity[];
  teamId: Id;
  status: RegisteredTeamStatus;

  requiredDocs?: RequiredDocsInRegisteredTeam;
}
