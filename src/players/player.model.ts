import { UserEntity } from '../users/user';
import { ISportsModalityModel } from './sports-modality.model';

export interface IPlayerModel extends Omit<UserEntity, 'roles'> {
  alias: string;
  sportsModalities?: ISportsModalityModel;
}

export type ICreatePlayerModel = Omit<IPlayerModel, 'id'>;
