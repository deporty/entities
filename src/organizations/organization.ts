import { Entity, Id } from '../general';

export interface OrganizationEntity extends Entity {
  FMTA: number;
  NTP: number;
  name: string;
  businessName?: string;
  iso: string;
  members: Array<string>;
}

export interface OrganizationMemberEntity extends Entity {
  userId: Id;
}
