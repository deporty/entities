import { Entity, Id } from "../general";

export interface RoleEntity extends Entity {
  name: string;
  display: string;
  description: string;
  permissionIds: Id[];
}

export type ROL =
  | 'Player'
  | 'Organizer'
  | 'Super Admin'
  | 'Referee'
  | 'Technical Director';
