import { soundControl } from '../components/main/game/soundControl';
import { Result, lStorage } from './local-storage';
import Signal from './signal';
import { AppSettings, StateData, StateOptions } from './state-types';

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

  public clearResults(): void {
    state.onUpdate.emit(StateOptions.clearLocalStorage);
  }

  public deleteTargetFromStorage(targetIndex: number): void {
    this._data.gameSettings.deleteTarget = targetIndex;
    state.onUpdate.emit(StateOptions.deleteTargetFromStorage);
    state.onUpdate.emit(StateOptions.showNewResult);
  }

  public getDeleteTargetFromStorage(): number {
    return this._data.gameSettings.deleteTarget;
  }

  public openSettings(): void {
    state.onUpdate.emit(StateOptions.showSettings);
  }

  public getSettings(): AppSettings {
    return this._data.appSettings;
  }

  public setTheme(flag: boolean): void {
    this._data.appSettings.theme = flag;
    state.onUpdate.emit(StateOptions.changeTheme);
  }

  public getTheme(): boolean {
    return this._data.appSettings.theme;
  }

  public setAnimation(flag: boolean): void {
    this._data.appSettings.animation = flag;
    state.onUpdate.emit(StateOptions.changeAnimation);
  }

  public getAnimation(): boolean {
    return this._data.appSettings.animation;
  }

  public setSound(flag: boolean): void {
    this._data.appSettings.stateSound = flag;
    state.onUpdate.emit(StateOptions.changeSound);
  }

  public getSound(): boolean {
    return this._data.appSettings.stateSound;
  }

  public setLanguage(flag: boolean): void {
    this._data.appSettings.language = flag;
    state.onUpdate.emit(StateOptions.changeLanguage);
  }

  public getLanguage(): boolean {
    return this._data.appSettings.language;
  }

  public setVolume(value: string): void {
    this._data.appSettings.volume = value;
    state.onUpdate.emit(StateOptions.changeVolume);
  }

  public getVolume(): string {
    return this._data.appSettings.volume;
  }

  public setLastVolume(value: string): void {
    this._data.appSettings.lastVolume = value;
  }

  public getLastVolume(): string {
    return this._data.appSettings.lastVolume;
  }

  public resetSettings(): void {
    this._data.appSettings.animation = true;
    this._data.appSettings.volume = '30';
    this._data.appSettings.stateSound = true;
    this._data.appSettings.theme = false;
    this._data.appSettings.language = true;

    state.onUpdate.emit(StateOptions.closePopup);
  }

  public initLocalStorage(): void {
    try {
      const appSettings = lStorage.get('settings') as AppSettings;

      this._data.appSettings.animation = appSettings.animation;
      this._data.appSettings.language = appSettings.language;
      this._data.appSettings.lastVolume = appSettings.lastVolume;
      this._data.appSettings.stateSound = appSettings.stateSound;
      this._data.appSettings.theme = appSettings.theme;
      this._data.appSettings.volume = appSettings.volume;
    } catch {
      return;
    }
  }

  public showWarningPopup(type: string): void {
    this._data.warningType = type;
    state.onUpdate.emit(StateOptions.showWarningPopup);
  }

  public closeWarningPopup(): void {
    state.onUpdate.emit(StateOptions.closeWarningPopup);
  }

  public warningDeleteResult(): void {
    state.onUpdate.emit(StateOptions.warningResults);
  }

  public warningDeleteSettings(): void {
    state.onUpdate.emit(StateOptions.warningSettings);
  }

  public onClickWarning(): void {
    if (this._data.warningType === StateOptions.showResultPopup) {
      this.warningDeleteResult();
    } else {
      if (this._data.warningType === StateOptions.showSettings) {
        this.warningDeleteSettings();
      }
    }
    this.closeWarningPopup();
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
  },
  appSettings: {
    volume: '30',
    lastVolume: '30',
    stateSound: true,
    theme: false,
    language: true,
    animation: true
  },
  warningType: null
};

export const state: State = new State(initialState);
