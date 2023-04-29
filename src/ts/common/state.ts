import Signal from './signal';
import { StateData, StateOptions } from './state-types';

class State {
  private _data: StateData;
  public onUpdate: Signal<StateOptions> = new Signal();
  constructor(initialState: StateData) {
    this._data = initialState;
  }

  public setNewGame(): void {
    this._data.gameSettings.currentField = [];
    this._data.gameSettings.moveCounter = 0;
    this._data.gameSettings.isTimeRunning = false;
    this._data.gameSettings.isStartGame = false;
    this._data.gameSettings.isWin = false;
    this._data.gameSettings.result.moves = 0;
    this._data.gameSettings.result.time = '00:00:00';
    state.onUpdate.emit(StateOptions.newGame);
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

  public setMoveCounter(): void {
    this._data.gameSettings.moveCounter++;
    state.onUpdate.emit(StateOptions.moveCounter);
  }

  public getMoveCounter(): number {
    return this._data.gameSettings.moveCounter;
  }

  public getState(): StateData {
    return this._data;
  }

  public setStartGame(): void {
    this._data.gameSettings.isStartGame = true;
    state.onUpdate.emit(StateOptions.startGame);
  }

  public setStopGame(): void {
    this._data.gameSettings.isStartGame = false;
    state.onUpdate.emit(StateOptions.stopGame);
  }

  public setToggleTimer(flag: boolean): void {
    this._data.gameSettings.isTimeRunning = flag;
  }

  public getToggleTimer(): boolean {
    return this._data.gameSettings.isTimeRunning;
  }

  public getStopStartGame(): boolean {
    return this._data.gameSettings.isStartGame;
  }

  public setShowPopup(): void {
    this._data.gameSettings.isPopupShow = true;
    state.onUpdate.emit(StateOptions.showPopup);
  }

  public setDeletePopup(): void {
    this._data.gameSettings.isPopupShow = false;
    state.onUpdate.emit(StateOptions.deletePopup);
  }

  public getPopupState(): boolean {
    return this._data.gameSettings.isPopupShow;
  }

  public setWinGame(flag: boolean): void {
    this._data.gameSettings.isWin = flag;
    state.onUpdate.emit(StateOptions.winGame);
  }

  public getIsWinGame(): boolean {
    return this._data.gameSettings.isWin;
  }

  public setResultMoves(moves: number): void {
    this._data.gameSettings.result.moves = moves;
  }

  public setResultTime(time: string): void {
    this._data.gameSettings.result.time = time;
  }

  public getResult(): { moves: number; time: string } {
    return this._data.gameSettings.result;
  }
}

const initialState: StateData = {
  gameSettings: {
    frameSize: 4,
    currentField: [],
    moveCounter: 0,
    isStartGame: false,
    isTimeRunning: false,
    isPopupShow: false,
    isWin: false,
    result: {
      moves: 0,
      time: '00:00:00'
    }
  }
};

export const state: State = new State(initialState);
