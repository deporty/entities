import { Entity, Id } from '../general/general';

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
  phoneExtension: string;
  roles: Array<Id>;
}
