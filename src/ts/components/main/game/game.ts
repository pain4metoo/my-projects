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
  private gameContainer: HTMLElement;
  public results = (lStorage.get('results') as Array<Result>) || [];

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_game');
    const gameContainer = new Control(this.node, 'div', 'main_game_container');
    this.gameContainer = gameContainer.node;

    this.createGame();

    this.gameListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.newGame:
          state.onUpdate.remove(this.gameListener);
          break;
        case StateOptions.winGame:
          if (state.getIsWinGame()) {
            this.node.classList.add('main_game_over');
          } else {
            this.node.classList.remove('main_game_over');
          }
          break;
        case StateOptions.collectPuzzle:
          this.collectPazzle();
          break;
        case StateOptions.clearLocalStorage:
          this.deleteResult();
          break;
        case StateOptions.deleteTargetFromStorage:
          this.deleteResult(state.getDeleteTargetFromStorage());
          break;
      }
    };

    state.onUpdate.add(this.gameListener);
  }

  private createGame(): void {
    GenerateMatrix.generateMatrix(state.getFrameSize());
    this.createElementsHTML();
    this.shuffleCycle();
  }

  private createElementsHTML(): void {
    const currentGameSize = state.getFrameSize();
    const currentGamePuzzle: Array<number> = state.getGameField().flat();

    this.gameContainer.classList.add(`main_game_container_${currentGameSize}x${currentGameSize}`);

    for (let i = 0; i < currentGameSize * currentGameSize; i++) {
      const square = new Control(this.gameContainer, 'div', 'main_game_square', `${currentGamePuzzle[i]}`);
      this.gameSquareHTML.push(square.node);

      square.node.onclick = (): void => this.moveByClick(Number(square.node.textContent));
    }
  }

  private shuffleCycle(): void {
    state.stopBtnDisable();
    state.shuffleStart();
    state.startCollectTimer();
    let counter = 0;
    const maxShuffle = this.getRandomShuffleCount();

    const handle = setInterval((): void => {
      this.singleStrokeCycle();

      if (counter === maxShuffle) {
        soundControl.pauseSound();
        state.stopCollectTimer();
        clearInterval(handle); // stops intervals
        state.shuffleStop();
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
      emptySquare: []
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
        }
        continue;
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

    const randomNumberforMove = Math.ceil(Math.random() * availableMovesArr.length) - 1; // minus one to adjust the index
    const lastMoveMade = state.getAllMoves()[state.getAllMoves().length - 1][2]; // look at the value at 2 array index

    if (lastMoveMade === availableMovesArr[randomNumberforMove][2]) {
      const filterAvailableMoves = availableMovesArr.filter((el: Array<number>) => el[2] !== lastMoveMade); // We remove the last similar move

      return filterAvailableMoves[Math.ceil(Math.random() * filterAvailableMoves.length - 1)]; // choose a random one from the remaining
    }

    return availableMovesArr[randomNumberforMove];
  }

  private makeMove(
    matrix: Array<Array<number>>,
    move: Array<number>,
    zeroPosition: Array<number>,
    isCollectPuzzle: boolean
  ): Array<Array<number>> {
    const matrixValuePos = matrix[move[0]][move[1]];
    const matrixZeroPos = matrix[zeroPosition[0]][zeroPosition[1]];

    matrix[move[0]][move[1]] = matrixZeroPos;
    matrix[zeroPosition[0]][zeroPosition[1]] = matrixValuePos;

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

    this.handlerDragAndDrop(singleLevelMatrix);
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
      .filter((el) => el);

    currentMatrix.forEach((el, i) => {
      if (el === 0) {
        this.gameSquareHTML[i].ondragover = (e): void => {
          e.preventDefault();
        };
      }
      if (currentAvailableMoves.includes(el)) {
        this.gameSquareHTML[i].ondragover = (e): void => {
          e.stopPropagation();
        };
        this.gameSquareHTML[i].draggable = true;
        this.gameSquareHTML[i].ondragstart = (event): void => {
          event.dataTransfer?.setData('id', String(currentMatrix[i]));
        };

        this.gameSquareHTML[i].ondrop = (event): void => {
          const move = event.dataTransfer?.getData('id');
          this.moveByClick(Number(move));
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
    const handle = setInterval((): void => {
      const positionOfZero: Array<number> = this.availableMoves(state.getGameField()).emptySquare;
      const spliceLastMove = state.getAllMoves().splice(-1)[0];
      this.makeMove(state.getGameField(), spliceLastMove, positionOfZero, true);
      state.setCollectMoves();
      if (state.getAllMoves().length === 0) {
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
      time: state.getResult().time
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
}
