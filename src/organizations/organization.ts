import { Entity, Id } from '../general';


export type  OrganizationStatus = 'active' | 'disabled' |'hidden';

export interface OrganizationEntity extends Entity {
  FMTA: number;
  NTP: number;
  name: string;
  businessName?: string;
  iso: string;
  members: Array<string>;
  status: OrganizationStatus
}

export interface OrganizationMemberEntity extends Entity {
  userId: Id;
}
