import { Id } from "../general";
import { Entity, FilePath } from "../general/general";
import { PlaygroundEntity } from "../locations/playground.entity";
import { PlayerForm } from "./player-form.entity";
import { IScoreModel } from "./score.entity";
import { Stadistics } from "./stadistics.entity";

export type MatchStatusType =
  | "editing"
  | "published"
  | "running"
  | "in-review"
  | "completed";
export const MATCH_STATUS = {
  editing: "En edición",
  published: "Publicado",
  running: "En curso",
  "in-review": "En revisión",
  completed: "Completado",
};
export type RefereeRol = "main";
export interface MatchEntity extends Entity {
  captainASignature?: FilePath;
  captainBSignature?: FilePath;
  date?: Date;
  judgeSignature?: FilePath;
  locationId?: Id;
  observations?: string;
  playground?: PlaygroundEntity;
  score?: IScoreModel;
  stadistics?: Stadistics;
  playerForm?: PlayerForm;
  status: MatchStatusType;
  teamAId: Id;
  teamBId: Id;
  refereeIds?: {
    refereeId: Id;
    rol: RefereeRol;
  }[];
}
