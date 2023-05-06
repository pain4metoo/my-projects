import Control from '../../../common/control';
import { state } from '../../../common/state';
import { GenerateGameField } from './generateField';
import './game.scss';
import { StateOptions } from '../../../common/state-types';

interface AvailableMovesFromEmptySquare {
  axisXLeft: Array<number>;
  axisXRight: Array<number>;
  axisYTop: Array<number>;
  axisYBottom: Array<number>;
  emptySquare: Array<number>;
}

export class Game extends Control {
  private finishResult: Array<number> = [];
  private gameSquareHTML: Array<HTMLElement> = [];
  private gameContainer: HTMLElement;
  private movesMade: Array<Array<number>> = [];

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_game');
    const gameContainer = new Control(this.node, 'div', 'main_game_container');
    this.gameContainer = gameContainer.node;

    this.createGame();

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.setMove:
          // this.newFieldAfterMove(state.getGameField().flat());
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
    });
  }

  private collectPazzle(): void {
    const handle = setInterval((): void => {
      const positionOfZero: Array<number> = this.availableMoves(state.getGameField()).emptySquare;
      this.makeMove(state.getGameField(), this.movesMade[this.movesMade.length - 1], positionOfZero, true);

      this.movesMade.length--;

      if (this.movesMade.length === 0) {
        clearInterval(handle); // stops intervals
      }
    }, 10);
  }

  private createGame(): void {
    this.generateMatrix(state.getFrameSize());
    this.createElementsHTML();
    this.shuffleCycle();
  }

  private shuffleCycle(): void {
    let counter = 0;
    const maxShuffle = 300;
    const handle = setInterval((): void => {
      this.singleStrokeCycle();
      counter++;

      if (counter === maxShuffle) {
        clearInterval(handle); // stops intervals
      }
    }, 1);
  }

  private singleStrokeCycle(): void {
    const availableMovesObj: AvailableMovesFromEmptySquare = this.availableMoves(state.getGameField());
    const randomMove = this.getRandomMove(availableMovesObj);
    this.makeMove(state.getGameField(), randomMove, availableMovesObj.emptySquare, false);
  }

  private generateMatrix(size: number): Array<Array<number>> {
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

    state.setGameField(matrix);

    return matrix;
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
        square.node.textContent = currentGamePuzzle[i].toString();
      }
    }
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
          break;
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
    isCollectPuzzle?: boolean
  ): Array<Array<number>> {
    const matrixValuePos = matrix[move[0]][move[1]];
    const matrixZeroPos = matrix[zeroPosition[0]][zeroPosition[1]];

    matrix[move[0]][move[1]] = matrixZeroPos;
    matrix[zeroPosition[0]][zeroPosition[1]] = matrixValuePos;

    if (!isCollectPuzzle) {
      console.log(move);
      this.movesMade.push(move);
    }
    console.log(this.movesMade);

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
        el.textContent = singleLevelMatrix[i].toString();
        el.classList.remove('main_game_square_empty');
      }
    });
  }

  private setMoveInState(currentGameField: Array<Array<number>>): void {
    state.setMove(currentGameField);
    state.setMoveCounter();
    state.setStartGame();

    if (this.isWin()) {
      this.showResult();
    }
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

  private showResult(): void {
    state.setStopGame();
    state.setShowPopup();
    state.setWinGame(true);
  }
}
