export interface StateData {
  gameSettings: GameSettings;
}

interface GameSettings {
  frameSize: number;
  currentField: Array<Array<number>>;
}

export enum StateOptions {
  setMove = 'set-move'
}
