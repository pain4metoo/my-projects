import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import './game.scss';

interface AvailableMovesFromEmptySquare {
  emptySquare: Array<number>;
  axisXLeft: Array<number>;
  axisXRight: Array<number>;
  axisYTop: Array<number>;
  axisYBottom: Array<number>;
}

export class Game extends Control {
  private size = 4;
  private HtmlGameElem: Array<HTMLElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_game');
    const gameContainer = new Control(this.node, 'div', 'main_game_container');

    this.generateGameField(gameContainer.node);

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.setMove:
          this.newFieldAfterMove();
          return;
      }
    });
  }

  private async generateGameField(gameContainer: HTMLElement): Promise<void> {
    const currentPuzzle: Array<Array<number>> = await this.generateRandomGameNumber();
    const singleLevelArray = currentPuzzle.flat();

    for (let i = 0; i < this.size * this.size; i++) {
      const square = new Control(gameContainer, 'div', 'main_game_square', `${singleLevelArray[i]}`);
      if (singleLevelArray[i] === 0) {
        square.node.textContent = '';
        square.node.classList.add('main_game_square_empty');
      } else {
        square.node.onclick = (): void => this.makeMove(singleLevelArray[i]);
      }
      this.HtmlGameElem.push(square.node);
    }

    state.setGameField(currentPuzzle);
  }

  private newFieldAfterMove(): void {
    const newGameField: Array<number> = state.getGameField().flat();
    this.HtmlGameElem.forEach((el, i) => {
      el.textContent = `${newGameField[i]}`;

      el.classList.remove('main_game_square_empty');
      if (el.textContent === '0') {
        el.classList.add('main_game_square_empty');
        el.textContent = '0';
      }
    });
  }

  private makeMove(numberTarget: number): void {
    const currentGameField: Array<Array<number>> = state.getGameField();

    // index 0 it's X axes; index 1 it's Y axes; index 2 it's value on this coordinate
    const availableMoves: AvailableMovesFromEmptySquare = {
      emptySquare: [],
      axisXLeft: [],
      axisXRight: [],
      axisYTop: [],
      axisYBottom: []
    };

    for (let i = 0; i < currentGameField.length; i++) {
      for (let g = 0; g < currentGameField[i].length; g++) {
        if (currentGameField[i][g] === 0) {
          availableMoves.emptySquare = [i, g];
          if (currentGameField[i][g - 1]) {
            availableMoves.axisXLeft = [i, g - 1, currentGameField[i][g - 1]];
          }
          if (currentGameField[i][g + 1]) {
            availableMoves.axisXRight = [i, g + 1, currentGameField[i][g + 1]];
          }
          if (currentGameField[i - 1] && currentGameField[i - 1][g]) {
            availableMoves.axisYTop = [i - 1, g, currentGameField[i - 1][g]];
          }
          if (currentGameField[i + 1] && currentGameField[i + 1][g]) {
            availableMoves.axisYBottom = [i + 1, g, currentGameField[i + 1][g]];
          }

          break;
        }
        continue;
      }
    }

    switch (numberTarget) {
      case availableMoves.axisXLeft[2]:
        [
          currentGameField[availableMoves.axisXLeft[0]][availableMoves.axisXLeft[1]],
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]]
        ] = [
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]],
          currentGameField[availableMoves.axisXLeft[0]][availableMoves.axisXLeft[1]]
        ];
        break;
      case availableMoves.axisXRight[2]:
        [
          currentGameField[availableMoves.axisXRight[0]][availableMoves.axisXRight[1]],
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]]
        ] = [
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]],
          currentGameField[availableMoves.axisXRight[0]][availableMoves.axisXRight[1]]
        ];
        break;
      case availableMoves.axisYBottom[2]:
        [
          currentGameField[availableMoves.axisYBottom[0]][availableMoves.axisYBottom[1]],
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]]
        ] = [
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]],
          currentGameField[availableMoves.axisYBottom[0]][availableMoves.axisYBottom[1]]
        ];
        break;
      case availableMoves.axisYTop[2]:
        [
          currentGameField[availableMoves.axisYTop[0]][availableMoves.axisYTop[1]],
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]]
        ] = [
          currentGameField[availableMoves.emptySquare[0]][availableMoves.emptySquare[1]],
          currentGameField[availableMoves.axisYTop[0]][availableMoves.axisYTop[1]]
        ];
        break;

      default:
        return;
    }

    state.setMove(currentGameField);
  }

  private async generateRandomGameNumber(): Promise<Array<Array<number>>> {
    const result: Array<Array<number>> = [];
    const puzzleGameArr: Array<number> = [];
    const maxNumbers = Math.pow(this.size, 2);

    for (let i = 0; i < maxNumbers; i++) {
      puzzleGameArr.push(i);
    }

    puzzleGameArr.sort(() => Math.random() - 0.5);

    while (puzzleGameArr.length) {
      result.push(puzzleGameArr.splice(0, this.size));
    }

    return this.isSolvablePuzzle(result) ? result : await this.generateRandomGameNumber();
  }

  private isSolvablePuzzle(array: Array<Array<number>>): boolean {
    const fieldCounts = this.size % 2 === 0;
    const positionEmptySquareFromBottom = this.calcPositionEmptySquareFromBottom(array) % 2 === 0;
    const inversionCounter = this.calcInversionInCurrentPuzzle(array) % 2 === 0;

    if (!fieldCounts && inversionCounter) {
      return true;
    } else if (fieldCounts && positionEmptySquareFromBottom && !inversionCounter) {
      return true;
    } else if (fieldCounts && !positionEmptySquareFromBottom && inversionCounter) {
      return true;
    } else {
      return false;
    }
  }

  private calcPositionEmptySquareFromBottom(array: Array<Array<number>>): number {
    let currentPosition = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(0)) {
        currentPosition = i;
        break;
      }
      continue;
    }

    return this.size - currentPosition;
  }

  private calcInversionInCurrentPuzzle(array: Array<Array<number>>): number {
    const singleLevelArray = array.flat();

    const inversionCounter = singleLevelArray.reduce((acc, el, i, arr): number => {
      for (let g = 0; g < arr.indexOf(el); g++) {
        if (arr[g] > el && el !== 0) {
          acc++;
        }
      }
      return acc;
    }, 0);

    return inversionCounter;
  }
}
