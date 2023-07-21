import { Id } from '../general';
import { Entity } from '../general/general';

export interface SportFamilyEntity extends Entity {
  name: string;
}

export interface SportEntity extends Entity {
  name: string;
  sportsFamilyId: Id;
}
