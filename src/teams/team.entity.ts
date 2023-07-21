import { Id } from '../general';
import { Entity, FilePath } from '../general/general';
import { UserEntity } from '../users';

export type Position = 'goalkeeper' | 'forward' | 'midfielder' | 'defender';
export type KindMember = 'technical-director' | 'player' | 'technicalAssistant';

export type CategoryType =
  | 'Sub 3'
  | 'Sub 4'
  | 'Sub 5'
  | 'Sub 6'
  | 'Sub 7'
  | 'Sub 8'
  | 'Sub 9'
  | 'Sub 10'
  | 'Sub 11'
  | 'Sub 12'
  | 'Sub 13'
  | 'Sub 14'
  | 'Sub 15'
  | 'Sub 16'
  | 'Sub 17'
  | 'Sub 18'
  | 'Sub 19'
  | 'Sub 20'
  | 'Sub 21'
  | 'Open';

export interface MemberEntity extends Entity {
  initDate?: Date;
  kindMember: KindMember;
  number?: number;
  position?: Position;
  retirementDate?: Date;
  teamId: Id;
  userId: Id;
}

export interface MemberDescriptionType {
  member: MemberEntity;
  user: UserEntity;
}

export interface TeamEntity extends Entity {
  athem?: FilePath;
  category: CategoryType;
  miniShield?: FilePath;
  name: string;
  shield?: FilePath;
  sportIds: Id[];
}
