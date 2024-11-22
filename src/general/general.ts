import { v4 } from 'uuid';

export type Id = string;
export type FilePath = string;

export interface Entity {
	id?: Id;
}

export function ID() {
	return v4().replace(/[-]/g, '').substring(0, 20);
}
