export interface StateData {
  gameSettings: GameSettings;
}

interface GameSettings {
  frameSize: number;
  currentField: Array<Array<number>>;
  movesMade: Array<Array<number>>;
  moveCounter: number;
  isStartGame: boolean;
  isTimeRunning: boolean;
  isWin: boolean;
  result: { moves: number; time: string };
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
  closePopup = 'close-popup'
}
