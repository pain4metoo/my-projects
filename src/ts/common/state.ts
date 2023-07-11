import { Result, localStorageControl } from './local-storage';
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
    this._data.gameSettings.movesMade = [];
    this._data.gameSettings.moveCounter = 0;
    this._data.gameSettings.isTimeRunning = false;
    this._data.gameSettings.isStartGame = false;
    this._data.gameSettings.isWin = false;
    this._data.gameSettings.result.moves = 0;
    this._data.gameSettings.result.time = '00:00:00';
    this._data.gameSettings.isCollectStart = false;
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

  public setNewMove(move: Array<number>): void {
    this._data.gameSettings.movesMade.push(move);
  }

  public getAllMoves(): Array<Array<number>> {
    return this._data.gameSettings.movesMade;
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
    state.onUpdate.emit(StateOptions.stopBtnDisable);
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

  public setCollectPuzzle(): void {
    state.onUpdate.emit(StateOptions.collectPuzzle);
  }

  public shuffleStart(): void {
    state.onUpdate.emit(StateOptions.shuffleStart);
  }

  public shuffleStop(): void {
    state.onUpdate.emit(StateOptions.shuffleStop);
  }

  public collectBtnEnable(): void {
    state.onUpdate.emit(StateOptions.collectBtnOff);
  }

  public collectBtnDisable(): void {
    state.onUpdate.emit(StateOptions.collectBtnOn);
  }

  public createPopup(): void {
    state.onUpdate.emit(StateOptions.createPopup);
  }

  public showCollectPopup(): void {
    state.onUpdate.emit(StateOptions.showCollectPopup);
  }

  public showFinishPopup(): void {
    state.onUpdate.emit(StateOptions.showFinishPopup);
  }

  public showResultPopup(): void {
    state.onUpdate.emit(StateOptions.showResultPopup);
  }

  public closePopup(): void {
    state.onUpdate.emit(StateOptions.closePopup);
  }

  public startCollectTimer(): void {
    state.onUpdate.emit(StateOptions.collectStartTimer);
  }

  public stopCollectTimer(): void {
    state.onUpdate.emit(StateOptions.collectStopTimer);
  }

  public setCollectTimer(time: string): void {
    this._data.gameSettings.result.collectTime = time;
  }
  public getCollectTimer(): string {
    return this._data.gameSettings.result.collectTime;
  }

  public setCollectMoves(): void {
    this._data.gameSettings.result.collectMoves++;
    state.onUpdate.emit(StateOptions.setCollectMoves);
  }

  public getCollectMoves(): number {
    return this._data.gameSettings.result.collectMoves;
  }

  public clearCollectMoves(): void {
    this._data.gameSettings.result.collectMoves = 0;
  }

  public stopBtnEnable(): void {
    state.onUpdate.emit(StateOptions.stopBtnEnable);
  }

  public stopBtnDisable(): void {
    state.onUpdate.emit(StateOptions.stopBtnDisable);
  }

  public setCollectState(flag: boolean): void {
    this._data.gameSettings.isCollectStart = flag;
  }

  public getCollectState(): boolean {
    return this._data.gameSettings.isCollectStart;
  }

  public getResults(): Array<Result> {
    return this._data.gameSettings.results;
  }

  public clearAllStorage(): void {
    localStorageControl.deleteFromLocalStorage();
    state.onUpdate.emit(StateOptions.clearLocalStorage);
  }

  public deleteTargetFromStorage(targetIndex: number): void {
    localStorageControl.deleteFromLocalStorage(targetIndex);
    this._data.gameSettings.deleteTarget = targetIndex;
    state.onUpdate.emit(StateOptions.clearLocalStorage);
  }

  public getDeleteTargetFromStorage(): number {
    return this._data.gameSettings.deleteTarget;
  }
}

const initialState: StateData = {
  gameSettings: {
    frameSize: 4,
    currentField: [],
    movesMade: [],
    moveCounter: 0,
    isStartGame: false,
    isTimeRunning: false,
    isWin: false,
    isCollectStart: false,
    deleteTarget: -1,
    result: {
      moves: 0,
      time: '00:00:00',
      collectTime: '00:00:00',
      collectMoves: 0
    },
    results: []
  }
};

export const state: State = new State(initialState);
