import Control from '../../../common/control';
import { TList, correctTranslater } from '../../../common/language';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';

export class Moves extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_counters_block_left');

    const movesBlock = new Control(this.node, 'div', 'main_counters_moves');
    const movesBlockText = new Control(movesBlock.node, 'p', 'main_counters_text', 'Moves: ');
    const movesBlockNumber = new Control(movesBlock.node, 'p', 'main_counters_number', '0');

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.moveCounter:
          this.makeMove(movesBlockNumber.node);
          break;
        case StateOptions.newGame:
          movesBlockNumber.node.textContent = '0';
          break;
        case StateOptions.winGame:
          state.setResultMoves(Number(movesBlockNumber.node.textContent));
          break;
        case StateOptions.setCollectMoves:
          movesBlockNumber.node.textContent = `${state.getMoveCounter() + state.getCollectMoves()}`;
          break;
        case StateOptions.changeLanguage:
          this.switchLang(state.getLanguage(), movesBlockText.node);
          break;
        case StateOptions.resetSettings:
          this.switchLang(state.getLanguage(), movesBlockText.node);
          break;
      }
    });

    this.switchLang(state.getLanguage(), movesBlockText.node);
  }

  private switchLang(currentLang: boolean, el: HTMLElement): void {
    el.textContent = `${correctTranslater(currentLang, TList.moves)[0]}: `;
  }

  private makeMove(moveNode: HTMLElement): void {
    moveNode.textContent = `${state.getMoveCounter()}`;
  }
}
