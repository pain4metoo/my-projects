import Control from '../../../common/control';
import { state } from '../../../common/state';
import './game.scss';
import { StateOptions } from '../../../common/state-types';
import { Result, localStorageControl } from '../../../common/local-storage';

interface AvailableMovesFromEmptySquare {
  axisXLeft: Array<number>;
  axisXRight: Array<number>;
  axisYTop: Array<number>;
  axisYBottom: Array<number>;
  emptySquare: Array<number>;
}

export class Game extends Control {
  private gameListener: (type: StateOptions) => void;
  private finishResult: Array<number> = [];
  private gameSquareHTML: Array<HTMLElement> = [];
  private gameContainer: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_game');
    const gameContainer = new Control(this.node, 'div', 'main_game_container');
    this.gameContainer = gameContainer.node;

    this.createGame();

    this.gameListener = (type: StateOptions): void => {
      switch (type) {
        // case StateOptions.setMove:
        //   // this.newFieldAfterMove(state.getGameField().flat());
        //   break;
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
      }
    };

    state.onUpdate.add(this.gameListener);
  }

  private createGame(): void {
    this.generateMatrix(state.getFrameSize());
    this.createElementsHTML();
    this.shuffleCycle();
  }

  private collectPazzle(): void {
    state.shuffleStart();
    state.setStartGame();
    state.setCollectState(true);
    state.stopBtnDisable();
    const handle = setInterval((): void => {
      const positionOfZero: Array<number> = this.availableMoves(state.getGameField()).emptySquare;
      const spliceLastMove = state.getAllMoves().splice(-1)[0];
      this.makeMove(state.getGameField(), spliceLastMove, positionOfZero, true);
      state.setCollectMoves();
      if (state.getAllMoves().length === 0) {
        state.setCollectState(false);
        state.clearCollectMoves();
        clearInterval(handle); // stops intervals
        state.shuffleStop();
        state.collectBtnDisable();
        state.setWinGame(true);
        this.showCollectResult();
      }
    }, 1);
  }

  private shuffleCycle(): void {
    state.shuffleStart();
    state.startCollectTimer();
    let counter = 0;
    const maxShuffle = this.getRandomShuffleCount();
    const handle = setInterval((): void => {
      this.singleStrokeCycle();

      if (counter === maxShuffle) {
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

  private generateMatrix(size: number): void {
    const numbersArray: Array<number> = [];
    const maxNumber = Math.pow(size, 2);

    for (let i = 0; i < maxNumber; i++) {
      numbersArray.push(i);
    }

    const deleteZeroFromStart = numbersArray.splice(0, 1);
    numbersArray[numbersArray.length] = deleteZeroFromStart[0]; // add zero to end of arr;

    const matrix: Array<Array<number>> = [];

    while (numbersArray.length) {
      matrix.push(numbersArray.splice(0, size));
    }

    this.finishResult = matrix.slice().flat();
    state.setGameField(matrix);
    this.determineDefaultZeroPosition();
  }

  private determineDefaultZeroPosition(): void {
    const currentMatrix = state.getGameField();

    for (let i = 0; i < currentMatrix.length; i++) {
      for (let g = 0; g < currentMatrix[i].length; g++) {
        if (currentMatrix[i][g] === 0) {
          state.setNewMove([i, g, 0]);
          return;
        }
      }
    }
  }

  private createElementsHTML(): void {
    const currentGameSize = state.getFrameSize();
    const currentGamePuzzle: Array<number> = state.getGameField().flat();

    this.gameContainer.classList.add(`main_game_container_${currentGameSize}x${currentGameSize}`);

    for (let i = 0; i < currentGameSize * currentGameSize; i++) {
      const square = new Control(this.gameContainer, 'div', 'main_game_square', `${currentGamePuzzle[i]}`);
      this.gameSquareHTML.push(square.node);

      if (currentGamePuzzle[i] === 0) {
        square.node.textContent = ``;
        square.node.classList.add('main_game_square_empty');
      } else {
        square.node.textContent = String(currentGamePuzzle[i]);
      }

      square.node.onclick = (): void => this.moveByClick(Number(square.node.textContent));
    }
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
    }
  }

  private setInLocalStorage(): void {
    const result: Result = {
      frameSize: state.getFrameSize(),
      moves: state.getResult().moves,
      time: state.getResult().time
    };
    localStorageControl.put(Object.assign({}, result));
  }

  private isWin(): boolean {
    const currentGameField: Array<number> = state.getGameField().flat();
    for (let i = 0; i < currentGameField.length; i++) {
      if (this.finishResult[i] !== currentGameField[i]) {
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
