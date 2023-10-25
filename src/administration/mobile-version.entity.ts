import { Entity } from '../general';
export type MobileVersionStatus = 'current' | 'old';
export interface MobileVersionEntity extends Entity {
  semver: string;
  releaseDate: Date;
  releaseNotes: string;
  status: MobileVersionStatus;
}
