import { state } from '../../../common/state';

export class GenerateMatrix {
  public static finishResult: Array<number> = [];

  public static generateMatrix(size: number): void {
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

  public static determineDefaultZeroPosition(): void {
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
}
