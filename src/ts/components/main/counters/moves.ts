import Control from '../../../common/control';
import { TList, correctTranslater } from '../../../common/language';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';

export class Moves extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_counters_block_left');

    const movesBlock = new Control(this.node, 'div', 'main_counters_moves');
    const movesBlockText = new Control(movesBlock.node, 'p', 'main_counters_text main_counters_txt', 'Moves: ');
    const movesBlockNumber = new Control(movesBlock.node, 'p', 'main_counters_number main_counters_txt', '0');

    this.changeTheme(state.getTheme(), movesBlockText.node, movesBlockNumber.node);

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

        case StateOptions.changeTheme:
          this.changeTheme(state.getTheme(), movesBlockText.node, movesBlockNumber.node);
          break;
      }
    });

    this.switchLang(state.getLanguage(), movesBlockText.node);
  }

  private changeTheme(theme: boolean, text: HTMLElement, text1: HTMLElement): void {
    if (theme) {
      text.classList.add('main_counters_txt_dark');
      text1.classList.add('main_counters_txt_dark');
    } else {
      text.classList.remove('main_counters_txt_dark');
      text1.classList.remove('main_counters_txt_dark');
    }
  }

  private switchLang(currentLang: boolean, el: HTMLElement): void {
    el.textContent = `${correctTranslater(currentLang, TList.moves)[0]}: `;
  }

  private makeMove(moveNode: HTMLElement): void {
    moveNode.textContent = `${state.getMoveCounter()}`;
  }
}
