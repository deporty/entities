import { PlaygroundEntity } from './playground.entity';

export interface Coordinate {
  latitude: number;
  longitude: number;
}
export interface LocationEntity {
  name: string;
  coordinate?: Coordinate;
  address?: string;
  geohash32: string;
  geohash64: string;
  geohash128: string;
  id: string;
  playgrounds: Array<PlaygroundEntity>;
}
