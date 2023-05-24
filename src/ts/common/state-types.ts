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
  isPopupShow: boolean;
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
  showPopup = 'show-popup',
  deletePopup = 'delete-popup',
  winGame = 'win-game',
  resultsPopup = 'result-popup',
  resultsPopupDestroy = 'result-popup-destroy',
  collectPuzzle = 'collect-puzzle',
  shuffleStart = 'shuffle-start',
  shuffleStop = 'shuffle-stop',
  collectBtnOn = 'collect-btn-on',
  collectBtnOff = 'collect-btn-off'
}
