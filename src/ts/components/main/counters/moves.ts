import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';

export class Moves extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);

    const movesBlock = new Control(this.node, 'div', 'main_counters_moves', '');
    const movesBlockText = new Control(movesBlock.node, 'p', 'main_counters_text', 'Moves: ');
    const movesBlockNumber = new Control(movesBlock.node, 'p', 'main_counters_number', '0');

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.moveCounter:
          this.makeMove(movesBlockNumber.node);
          break;
      }
    });
  }

  private makeMove(moveNode: HTMLElement): void {
    moveNode.textContent = `${state.getMoveCounter()}`;
  }
}
