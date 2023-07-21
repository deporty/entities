import { Id } from '../general';
import { Entity } from '../general/general';

export interface Time {
  minute: number;
  second: number;
}

export type GoalKind =
  | 'header-shot'
  | 'volley'
  | 'free-kick'
  | 'penalty'
  | 'nutmeg-shot'
  | 'bicycle-kick'
  | 'long-range-shot'
  | 'tap-in'
  | 'scissor-kick'
  | 'backheel'
  | 'curled-shot'
  | 'half-volley'
  | 'lob-shot'
  | 'overhead-kick'
  | 'solo-run';
export const GOAL_KINDS = [
  {
    name: 'header-shot',
    display: 'Tiro de cabeza',
  },
  {
    name: 'volley',
    display: 'Volea',
  },
  {
    name: 'free-kick',
    display: 'Tiro libre',
  },
  {
    name: 'penalty',
    display: 'Penal',
  },
  {
    name: 'nutmeg-shot',
    display: 'Gol de caño',
  },
  {
    name: 'bicycle-kick',
    display: 'Chilena',
  },
  {
    name: 'long-range-shot',
    display: 'Tiro de larga distancia',
  },
  {
    name: 'tap-in',
    display: 'Empujada',
  },
  {
    name: 'scissor-kick',
    display: 'Tijera',
  },
  {
    name: 'backheel',
    display: 'Gol de tacón',
  },
  {
    name: 'curled-shot',
    display: 'Tiro en comba',
  },
  {
    name: 'half-volley',
    display: 'Semivolea',
  },
  {
    name: 'lob-shot',
    display: 'Gol de globo',
  },
  {
    name: 'overhead-kick',
    display: 'Chalaca',
  },
  {
    name: 'solo-run',
    display: 'Gol en solitario',
  },
];

export type FaultKind =
  | 'player-foul'
  | 'handball'
  | 'offside'
  | 'unsporting-behavior'
  | 'simulation'
  | 'dissent'
  | 'violent-conduct'
  | 'obstruction'
  | 'time-wasting'
  | 'bench-misconduct'
  | 'pitch-invasion'
  | 'technical-area-offense'
  | 'abusive-language'
  | 'referee-abuse'
  | 'striking'
  | 'aggression'
  | 'elbowing'
  | 'kicking'
  | 'stomping'
  | 'pushing'
  | 'biting'
  | 'tackle-from-behind'
  | 'violent-tackle'
  | 'two-footed-tackle'
  | 'spitting'
  | 'argument'
  | 'reckless-play'
  | 'face-strike'
  | 'insulting-language';

export const FAULT_KINDS = [
  {
    name: 'player-foul',
    display: 'Falta de jugador',
  },
  {
    name: 'handball',
    display: 'Mano',
  },
  {
    name: 'offside',
    display: 'Fuera de juego',
  },
  {
    name: 'unsporting-behavior',
    display: 'Conducta antideportiva',
  },
  {
    name: 'simulation',
    display: 'Simulación',
  },
  {
    name: 'dissent',
    display: 'Disentimiento',
  },
  {
    name: 'violent-conduct',
    display: 'Conducta violenta',
  },
  {
    name: 'obstruction',
    display: 'Obstrucción',
  },
  {
    name: 'time-wasting',
    display: 'Pérdida de tiempo',
  },
  {
    name: 'bench-misconduct',
    display: 'Conducta indebida del cuerpo técnico',
  },
  {
    name: 'pitch-invasion',
    display: 'Invasión de campo',
  },
  {
    name: 'technical-area-offense',
    display: 'Ofensa en el área técnica',
  },
  {
    name: 'abusive-language',
    display: 'Lenguaje abusivo',
  },
  {
    name: 'referee-abuse',
    display: 'Abuso al árbitro',
  },
  {
    name: 'striking',
    display: 'Golpe',
  },
  {
    name: 'aggression',
    display: 'Agresión',
  },
  {
    name: 'elbowing',
    display: 'Codazo',
  },
  {
    name: 'kicking',
    display: 'Patada',
  },
  {
    name: 'stomping',
    display: 'Pisotón',
  },
  {
    name: 'pushing',
    display: 'Empujón',
  },
  {
    name: 'biting',
    display: 'Mordisco',
  },
  {
    name: 'tackle-from-behind',
    display: 'Tacle por detrás',
  },
  {
    name: 'violent-tackle',
    display: 'Entrada violenta',
  },
  {
    name: 'two-footed-tackle',
    display: 'Entrar con los tacos por delante',
  },
  {
    name: 'spitting',
    display: 'Escupir',
  },
  {
    name: 'argument',
    display: 'Discusión',
  },
  {
    name: 'reckless-play',
    display: 'Juego brusco',
  },
  {
    name: 'face-strike',
    display: 'Golpe en la cara',
  },
  {
    name: 'insulting-language',
    display: 'Lenguaje insultante',
  },
];
export interface CardSpecification {
  description?: string;
  kind: FaultKind;
  time?: Time;
}

export interface GoalSpecification {
  kind: GoalKind;
  time?: Time;
}

export interface StadisticSpecification {
  goals?: GoalSpecification[];
  redCards?: CardSpecification[];
  totalGoals: number;
  totalRedCards: number;
  totalYellowCards: number;
  memberId: Id;
  yellowCards?: CardSpecification[];
}

export interface IExtraGoalsModel {
  description?: string;
  goals: number;
}

export interface Stadistics extends Entity {
  extraGoalsTeamA?: IExtraGoalsModel;
  extraGoalsTeamB?: IExtraGoalsModel;
  teamA?: StadisticSpecification[];
  teamB?: StadisticSpecification[];
}
