import { Entity } from '../general';

export type NewsComponent = 'header' | 'paragraph' | 'ad' | 'news' | 'col' | 'row' | 'audio' | 'video';

export interface NewsNode {
  children: NewsNode[];
  component: NewsComponent;
  data: any;
}
export interface NewsBody {
  children: NewsNode[];
}

export interface NewsEntity extends Entity {
  abstract: string;
  body: NewsBody;
  preview: {
    image: string;
    photographer?: string;
  };
  publicationDate: Date;
  title: string;
}
