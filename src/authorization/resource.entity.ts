import { Entity } from '../general';

export interface ResourceEntity extends Entity {
  domain: string;
  kind: 'ui' | 'api';
  layer: string;
  name: string;
  visibility: 'public' | 'private' | 'protected';
}
