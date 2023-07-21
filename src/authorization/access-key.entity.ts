import { Entity } from '../general';

export interface AccessKeyEntity extends Entity {
  name: string;
  description: string;
  key: string;
  expirationDate: Date;
}
