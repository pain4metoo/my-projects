import { state } from '../../../common/state';

export class GenerateGameField {
  private static size = 4;
  public static generateRandomGameNumber(): Array<Array<number>> {
    const gameSize = state.getFrameSize();
    this.size = gameSize;
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

    return this.isSolvablePuzzle(result) ? result : this.generateRandomGameNumber();
  }

  public static isSolvablePuzzle(array: Array<Array<number>>): boolean {
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

  public static calcPositionEmptySquareFromBottom(array: Array<Array<number>>): number {
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

  public static calcInversionInCurrentPuzzle(array: Array<Array<number>>): number {
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
