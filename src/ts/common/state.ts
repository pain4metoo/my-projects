import Signal from './signal';
import { StateData, StateOptions } from './state-types';

class State {
  private _data: StateData;
  public onUpdate: Signal<StateOptions> = new Signal();
  constructor(initialState: StateData) {
    this._data = initialState;
  }
}

const initialState = {};

export const state: State = new State(initialState);
