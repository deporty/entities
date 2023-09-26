import { Entity, Id } from '../general/general';

export type AdministratioNMode = 'self-managed' | 'delegated';

export interface UserEntity extends Entity {
  birthDate: Date;
  document: string;
  email: string;
  image: string;
  firstLastName: string;
  secondLastName: string;
  firstName: string;
  secondName: string;
  phone: string;
  administrationWay?: AdministratioNMode;
  phoneExtension: string;
  roles: Array<Id>;
}
