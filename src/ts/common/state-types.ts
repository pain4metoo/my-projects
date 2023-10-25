import { EventCode } from '../components/app';
import { Result } from './local-storage';

export interface StateData {
  gameSettings: GameSettings;
  appSettings: AppSettings;
  warningType: string | null;
}

interface GameSettings {
  frameSize: number;
  currentField: Array<Array<number>>;
  movesMade: Array<Array<number>>;
  moveCounter: number;
  isStartGame: boolean;
  isStopGameBtn: boolean;
  isTimeRunning: boolean;
  isWin: boolean;
  isCollectStart: boolean;
  isShuffleStart: boolean;
  result: { moves: number; time: string; collectTime: string; collectMoves: number };
  results: Array<Result>;
  deleteTarget: number;
  isStartHardMode: boolean;
  lastKeyDownCode: EventCode | null;
}

export interface AppSettings {
  volume: string;
  lastVolume: string;
  stateSound: boolean;
  theme: boolean;
  language: boolean;
  animation: boolean;
  hardMode: boolean;
  isOpenPopup: boolean;
}

export enum StateOptions {
  newGame = 'new-game',
  setMove = 'set-move',
  moveCounter = 'move-counter',
  stopGame = 'stop-game',
  startGame = 'start-game',
  changeSize = 'change-size',
  winGame = 'win-game',
  collectPuzzle = 'collect-puzzle',
  shuffleStart = 'shuffle-start',
  shuffleStop = 'shuffle-stop',
  collectBtnOn = 'collect-btn-on',
  collectBtnOff = 'collect-btn-off',
  createPopup = 'create-popup',
  showCollectPopup = 'show-collect-popup',
  showFinishPopup = 'show-finish-popup',
  showResultPopup = 'show-result-popup',
  closePopup = 'close-popup',
  collectStartTimer = 'collect-start-timer',
  collectStopTimer = 'collect-stop-timer',
  setCollectMoves = 'collect-moves',
  stopBtnEnable = 'stop-btn-enable',
  stopBtnDisable = 'stop btn-disable',
  deleteTargetFromStorage = 'delete-target-from-storage',
  clearLocalStorage = 'clear-all-local-storage',
  showNewResult = 'show-new-results',
  showSettings = 'show-settings',
  closeSettings = 'close-settings',
  changeTheme = 'change-theme',
  changeLanguage = 'change-language',
  changeSound = 'change-sound',
  changeAnimation = 'change-animation',
  changeVolume = 'change-volume',
  resetSettings = 'reset-settings',
  showWarningPopup = 'show-warning-popup',
  closeWarningPopup = 'close-warning-popup',
  warningResults = 'warning-results',
  warningSettings = 'warning-settings',
  blockField = 'block-field',
  unBlockField = 'unblock-field',
  openBurgerMenu = 'open-burger-menu',
  closeBurgerMenu = 'close-burger-menu',
  setGameAnimation = 'set-game-animation',
  removeGameAnimation = 'remove-game-animation',
  changeGameMode = 'change-game-mode',
  setEventKeyDown = 'set-event-key-down',
}
