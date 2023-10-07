import Control from '../../../common/control';
import { state } from '../../../common/state';
import './game.scss';
import { StateOptions } from '../../../common/state-types';
import { Result, lStorage } from '../../../common/local-storage';
import { GenerateMatrix } from './generateMatrix';
import { SoundTypes } from './soundControl';
import { soundControl } from '../../../..';

interface AvailableMovesFromEmptySquare {
  axisXLeft: Array<number>;
  axisXRight: Array<number>;
  axisYTop: Array<number>;
  axisYBottom: Array<number>;
  emptySquare: Array<number>;
}

export class Game extends Control {
  private gameListener: (type: StateOptions) => void;

  private gameSquareHTML: Array<HTMLElement> = [];

  public results = (lStorage.get('results') as Array<Result>) || [];

  private queueEL: Array<HTMLElement> = [];
  private queueFontSize: Array<string> = [];

  private intervalExtremeMode!: number;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_game_container');
    this.gameListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.newGame:
          state.onUpdate.remove(this.gameListener);
          this.removeExtremeMode();
          break;
        case StateOptions.winGame:
          this.removeExtremeMode();
          if (state.getIsWinGame()) {
            this.node.classList.add('main_game_over');
          } else {
            this.node.classList.remove('main_game_over');
          }
          break;
        case StateOptions.collectPuzzle:
          this.removeExtremeMode();
          this.collectPazzle();
          break;
        case StateOptions.clearLocalStorage:
          this.deleteResult();
          break;
        case StateOptions.deleteTargetFromStorage:
          this.deleteResult(state.getDeleteTargetFromStorage());
          break;
        case StateOptions.setMove:
          this.isExtremeMode();
          break;
        case StateOptions.changeGameMode:
          if (!state.getGameMode()) {
            this.removeExtremeMode();
          }
          break;
      }
    };

    state.onUpdate.add(this.gameListener);

    this.createGame();
  }

  private createGame(): void {
    GenerateMatrix.generateMatrix(state.getFrameSize());
    this.createElementsHTML();
    this.shuffleCycle();
  }

  private createElementsHTML(): void {
    const currentGameSize = state.getFrameSize();
    const currentGamePuzzle: Array<number> = state.getGameField().flat();
    this.node.classList.add(`main_game_container_${currentGameSize}x${currentGameSize}`);

    for (let i = 0; i < currentGameSize * currentGameSize; i++) {
      const square = new Control(this.node, 'div', 'main_game_square', `${currentGamePuzzle[i]}`);
      square.node.classList.add(`main_game_square_${currentGameSize}x${currentGameSize}`);
      this.gameSquareHTML.push(square.node);

      square.node.onclick = (): void => this.moveByClick(Number(square.node.textContent));
    }
  }

  private shuffleCycle(): void {
    const maxShuffle = this.getRandomShuffleCount();
    let counter = 0;
    state.shuffleStart();
    state.startCollectTimer();
    this.changeStateGameField(true);
    state.setGameAnimation();
    const handle = setInterval((): void => {
      this.singleStrokeCycle();
      if (counter === maxShuffle) {
        clearInterval(handle); // stops intervals
        this.changeStateGameField(false);
        soundControl.pauseSound();
        state.stopCollectTimer();
        state.removGametAnimation();
        state.shuffleStop();
        this.handlerDragAndDrop(state.getGameField().flat());
      }
      counter++;
    }, 0);
  }

  private getRandomShuffleCount(): number {
    const options: Array<number> = [300, 500, 700, 900, 1100, 1300];
    const correctIndex = 3; // correct index for change return value;
    return options[state.getFrameSize() - correctIndex] + Math.ceil(Math.random() * 100);
  }

  private singleStrokeCycle(): void {
    const availableMovesObj: AvailableMovesFromEmptySquare = this.availableMoves(state.getGameField());
    const randomMove = this.getRandomMove(availableMovesObj);
    this.makeMove(state.getGameField(), randomMove, availableMovesObj.emptySquare, false); // false mean isCollectPuzzle
  }

  private availableMoves(matrix: Array<Array<number>>): AvailableMovesFromEmptySquare {
    // index 0 it's X axes; index 1 it's Y axes; index 2 it's value on this coordinate
    const availableMoves: AvailableMovesFromEmptySquare = {
      axisXLeft: [],
      axisXRight: [],
      axisYTop: [],
      axisYBottom: [],
      emptySquare: [],
    };

    for (let i = 0; i < matrix.length; i++) {
      for (let g = 0; g < matrix[i].length; g++) {
        if (matrix[i][g] === 0) {
          availableMoves.emptySquare = [i, g];
          if (matrix[i][g - 1]) {
            availableMoves.axisXLeft = [i, g - 1, matrix[i][g - 1]];
          }
          if (matrix[i][g + 1]) {
            availableMoves.axisXRight = [i, g + 1, matrix[i][g + 1]];
          }
          if (matrix[i - 1] && matrix[i - 1][g]) {
            availableMoves.axisYTop = [i - 1, g, matrix[i - 1][g]];
          }
          if (matrix[i + 1] && matrix[i + 1][g]) {
            availableMoves.axisYBottom = [i + 1, g, matrix[i + 1][g]];
          }
          return availableMoves;
        }
      }
    }

    return availableMoves;
  }

  private getRandomMove(availableMoves: AvailableMovesFromEmptySquare): Array<number> {
    const objValuesFromAvalableMoves = Object.values(availableMoves);
    const availableMovesArr = objValuesFromAvalableMoves.reduce((acc, el, i, arr): number => {
      if (i !== arr.length - 1 && el.length > 0) {
        // check the first 4 subarrays that they are not empty. We don't need the 5th subarray.
        acc.push(el);
      }
      return acc;
    }, []);

    const lastMoveMade = state.getAllMoves()[state.getAllMoves().length - 1][2]; // look at the value at 2 array index

    const filterAvailableMoves = availableMovesArr.filter((el: Array<number>) => el[2] !== lastMoveMade); // We remove the last similar move

    const randomNumberforMove = Math.ceil(Math.random() * filterAvailableMoves.length) - 1; // selecting a random subarray

    return filterAvailableMoves[randomNumberforMove]; // choose a random one from the remaining
  }

  private isExtremeMode(): void {
    if (state.getGameMode() && !state.getStartGameMode()) {
      state.setStartGameMode(true);
      this.onExtremeMode();
    } else {
      if (!state.getGameMode()) {
        state.setStartGameMode(false);
        this.removeExtremeMode();
      }
    }
  }

  private removeExtremeMode(): void {
    state.setStartGameMode(false);
    clearInterval(this.intervalExtremeMode);
    this.queueEL.forEach((el, i) => {
      el.style.fontSize = `${this.queueFontSize[i]}`;
    });
  }

  private onExtremeMode(): void {
    const timer = window.setInterval(() => this.extremeMode(), 500);
    this.intervalExtremeMode = timer;
  }

  private extremeMode(): void {
    const modes = [3, 6, 9, 12, 15, 18];
    const sizeField = state.getFrameSize();
    const randomSquare = Math.ceil(Math.random() * this.gameSquareHTML.length) - 1;

    if (this.queueEL.includes(this.gameSquareHTML[randomSquare])) {
      for (let i = 0; i < this.gameSquareHTML.length; i++) {
        if (!this.queueEL.includes(this.gameSquareHTML[i])) {
          this.queueEL.push(this.gameSquareHTML[i]);
          this.queueFontSize.push(window.getComputedStyle(this.gameSquareHTML[i]).fontSize);
          this.gameSquareHTML[i].style.fontSize = '0';
          break;
        }
      }
    } else {
      this.queueEL.push(this.gameSquareHTML[randomSquare]);
      this.queueFontSize.push(window.getComputedStyle(this.gameSquareHTML[randomSquare]).fontSize);
      this.gameSquareHTML[randomSquare].style.fontSize = '0';
    }

    // Depending on the field, select the difficulty level
    if (this.queueEL.length > modes[sizeField - 3]) {
      const firstEl = this.queueEL.shift();
      const firstElFontSize = this.queueFontSize.shift();
      if (firstEl) {
        firstEl.style.fontSize = `${firstElFontSize}`;
      }
    }
  }

  private makeMove(
    matrix: Array<Array<number>>,
    move: Array<number>,
    zero: Array<number>,
    isCollectPuzzle: boolean,
  ): Array<Array<number>> {
    [matrix[move[0]][move[1]], matrix[zero[0]][zero[1]]] = [matrix[zero[0]][zero[1]], matrix[move[0]][move[1]]];

    if (!isCollectPuzzle) {
      state.getAllMoves().push(move);
    }

    state.setGameField(matrix);

    this.shuffleElementsHTML();

    return matrix;
  }

  private shuffleElementsHTML(): void {
    const singleLevelMatrix = state.getGameField().flat();

    this.gameSquareHTML.forEach((el, i) => {
      if (singleLevelMatrix[i] === 0) {
        el.textContent = ``;
        el.classList.add('main_game_square_empty');
      } else {
        el.textContent = String(singleLevelMatrix[i]);
        el.classList.remove('main_game_square_empty');
      }
    });
  }

  private handlerDragAndDrop(currentMatrix: Array<number>): void {
    // We iterate only from 0 to 3 indices inclusive and take the value of the game square
    const currentAvailableMoves = Object.values(this.availableMoves(state.getGameField()))
      .map((el, i) => {
        if (i <= 3) {
          if (el[2]) {
            return el[2];
          }
        }
        return false;
      })
      .filter(el => el);

    currentMatrix.forEach((el, i) => {
      if (el === 0) {
        this.gameSquareHTML[i].ondragover = (e): void => {
          e.preventDefault();
        };
        this.gameSquareHTML[i].ondrop = (event): void => {
          const move = event.dataTransfer?.getData('id');
          this.moveByClick(Number(move));
        };
      }
      if (currentAvailableMoves.includes(el)) {
        this.gameSquareHTML[i].ondragover = (e): void => {
          e.stopImmediatePropagation();
        };
        this.gameSquareHTML[i].draggable = true;
        this.gameSquareHTML[i].ondragstart = (event): void => {
          event.dataTransfer?.setData('id', String(currentMatrix[i]));
        };
      } else {
        this.gameSquareHTML[i].draggable = false;
      }
    });
  }

  private collectPazzle(): void {
    state.shuffleStart();
    state.setStartGame();
    state.setCollectState(true);
    state.stopBtnDisable();
    soundControl.playSound(SoundTypes.collect);
    this.changeStateGameField(true);
    const handle = setInterval((): void => {
      const positionOfZero: Array<number> = this.availableMoves(state.getGameField()).emptySquare;
      const spliceLastMove = state.getAllMoves().splice(-1)[0];
      this.makeMove(state.getGameField(), spliceLastMove, positionOfZero, true);
      state.setCollectMoves();
      if (state.getAllMoves().length === 0) {
        this.changeStateGameField(false);
        soundControl.pauseSound();
        state.setCollectState(false);
        state.clearCollectMoves();
        clearInterval(handle); // stops intervals
        state.shuffleStop();
        state.collectBtnDisable();
        state.setWinGame(true);
        this.showCollectResult();
        soundControl.playSound(SoundTypes.roboWin);
      }
    }, 1);
  }

  private moveByClick(squareValue: number): void {
    const availableMoveArr: Array<Array<number>> = Object.values(this.availableMoves(state.getGameField()));
    availableMoveArr.forEach((el: Array<number>): void => {
      if (el[2] === squareValue) {
        this.makeMove(state.getGameField(), el, this.availableMoves(state.getGameField()).emptySquare, false);
        this.setMoveInState(state.getGameField());
        this.handlerDragAndDrop(state.getGameField().flat());
      }
    });
  }

  private setMoveInState(currentGameField: Array<Array<number>>): void {
    state.setMove(currentGameField);
    state.setMoveCounter();
    state.setStartGame();
    state.stopBtnEnable();
    if (this.isWin()) {
      state.setWinGame(true);
      this.showFinishResult();
      this.setInLocalStorage();
      soundControl.playSound(SoundTypes.win);
    } else {
      soundControl.playSound(SoundTypes.move);
    }
  }

  private setInLocalStorage(): void {
    const result: Result = {
      frameSize: state.getFrameSize(),
      moves: state.getResult().moves,
      time: state.getResult().time,
    };
    const maxItemsInLocal = 10;

    if (this.results.includes(result)) {
      return;
    } else {
      this.results.push(Object.assign({}, result));
    }

    const arrayAfterSort: Array<Result> = this.sortValue(this.results);
    arrayAfterSort.length > maxItemsInLocal ? arrayAfterSort.splice(arrayAfterSort.length - 1, 1) : null;

    lStorage.put('results', this.results);
  }

  public deleteResult(targetIndex?: number): void {
    if (targetIndex === 0 || targetIndex) {
      this.results.splice(targetIndex, 1);
    } else {
      this.results.splice(0);
    }

    lStorage.put('results', this.results);
  }

  private sortValue(results: Array<Result>): Array<Result> {
    return results.sort((a, b) => {
      if (a.frameSize !== b.frameSize) {
        return b.frameSize - a.frameSize;
      } else {
        // If frameSize are equal, then look at moves
        if (a.moves !== b.moves) {
          return a.moves - b.moves;
        } else {
          // If moves are equal then look at time and repeat for hours minutes and seconds
          const splitTimeFirst = a.time.split(':').map((item: string) => +item);
          const splitTimeSecond = b.time.split(':').map((item: string) => +item);

          if (splitTimeFirst[0] !== splitTimeSecond[0]) {
            return splitTimeFirst[0] - splitTimeSecond[0];
          } else {
            if (splitTimeFirst[1] !== splitTimeSecond[1]) {
              return splitTimeFirst[1] - splitTimeSecond[1];
            }

            return splitTimeFirst[2] - splitTimeSecond[2];
          }
        }
      }
    });
  }

  private isWin(): boolean {
    const currentGameField: Array<number> = state.getGameField().flat();
    for (let i = 0; i < currentGameField.length; i++) {
      if (GenerateMatrix.finishResult[i] !== currentGameField[i]) {
        return false;
      }
    }
    return true;
  }

  private showFinishResult(): void {
    state.createPopup();
    state.setStopGame();
    state.showFinishPopup();
  }

  private showCollectResult(): void {
    state.createPopup();
    state.setStopGame();
    state.showCollectPopup();
  }

  private changeStateGameField(flag: boolean): void {
    if (flag) {
      this.node.classList.add('main_game_over');
    } else {
      this.node.classList.remove('main_game_over');
    }
  }
}
