import Control from '../../../common/control';
import { state } from '../../../common/state';
import { GenerateGameField } from './generateField';
import './game.scss';
import { StateOptions } from '../../../common/state-types';

interface AvailableMovesFromEmptySquare {
  emptySquare: Array<number>;
  axisXLeft: Array<number>;
  axisXRight: Array<number>;
  axisYTop: Array<number>;
  axisYBottom: Array<number>;
}

export class Game extends Control {
  private finishResult: Array<number> = [];
  private gameSquareHTML: Array<HTMLElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_game');
    const gameContainer = new Control(this.node, 'div', 'main_game_container');

    this.generateGameField(gameContainer.node);

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.setMove:
          this.newFieldAfterMove(state.getGameField().flat());
          break;
      }
    });
  }

  private newFieldAfterMove(newGameField: Array<number>): void {
    this.gameSquareHTML.forEach((el, i): void => {
      if (newGameField[i] === 0) {
        el.textContent = ``;
        el.classList.add('main_game_square_empty');
      } else {
        el.textContent = `${newGameField[i]}`;
        el.classList.remove('main_game_square_empty');
      }
    });
  }

  private generateGameField(gameContainer: HTMLElement): void {
    const currentPuzzle: Array<Array<number>> = GenerateGameField.generateRandomGameNumber();
    const singleLevelArray = currentPuzzle.flat();
    const currentGameSize = state.getFrameSize();

    gameContainer.classList.add(`main_game_container_${currentGameSize}x${currentGameSize}`);

    for (let i = 0; i < currentGameSize * currentGameSize; i++) {
      const square = new Control(gameContainer, 'div', 'main_game_square', `${singleLevelArray[i]}`);

      this.gameSquareHTML.push(square.node);
      if (singleLevelArray[i] === 0) {
        square.node.textContent = ``;
        square.node.classList.add('main_game_square_empty');
      }

      square.node.onclick = (): void => this.makeMove(Number(square.node.textContent));
    }

    const makeFinishResult: Array<number> = currentPuzzle
      .flat()
      .sort((a, b) => a - b)
      .filter((el) => el !== 0); // find number 0 and delete him from array;
    makeFinishResult.push(0); // add number 0 in the last index;
    this.finishResult = makeFinishResult;
    state.setGameField(currentPuzzle);
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
        break;
    }

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
    console.log('You win!');
  }
}
