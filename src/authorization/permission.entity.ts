import { Entity, Id } from '../general';

export interface PermissionEntity extends Entity {
  name: string;
  display: string;
  description: string;
  resourceIds: Id[];
}
