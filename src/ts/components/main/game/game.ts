import Control from '../../../common/control';
import './game.scss';

export class Game extends Control {
  private size = 4;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_game');
    const gameContainer = new Control(this.node, 'div', 'main_game_container');

    this.generateGameField(gameContainer.node);
  }

  private async generateGameField(gameContainer: HTMLElement): Promise<void> {
    const currentPuzzle: Array<Array<number>> = await this.generateRandomGameNumber();
    const singleLevelArray = currentPuzzle.flat();

    for (let i = 0; i < this.size * this.size; i++) {
      const square = new Control(gameContainer, 'div', 'main_game_square', `${singleLevelArray[i]}`);
      if (singleLevelArray[i] === 0) {
        square.node.textContent = '';
      }
    }
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
