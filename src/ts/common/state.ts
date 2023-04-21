import Signal from './signal';
import { StateData, StateOptions } from './state-types';

class State {
  private _data: StateData;
  public onUpdate: Signal<StateOptions> = new Signal();
  constructor(initialState: StateData) {
    this._data = initialState;
  }

  public setGameField(arr: Array<Array<number>>): void {
    this._data.gameSettings.currentField = arr;
  }

  public getGameField(): Array<Array<number>> {
    return this._data.gameSettings.currentField;
  }

  public setMove(arr: Array<Array<number>>): void {
    this._data.gameSettings.currentField = arr;
    state.onUpdate.emit(StateOptions.setMove);
  }

  public setFrameSize(size: number): void {
    this._data.gameSettings.frameSize = size;
    state.onUpdate.emit(StateOptions.changeSize);
  }

  public getFrameSize(): number {
    return this._data.gameSettings.frameSize;
  }
}

const initialState: StateData = {
  gameSettings: {
    frameSize: 4,
    currentField: []
  }
};

export const state: State = new State(initialState);
