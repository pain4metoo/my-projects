import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import './popup.scss';

export class Popup extends Control {
  private popupListener: (type: StateOptions) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_popup');
    const popupInner = new Control(this.node, 'div', 'main_popup_inner');

    const popupBtnClose = new Control(popupInner.node, 'button', 'main_popup_btn_close');
    popupBtnClose.node.onclick = (): void => this.popupClose();
    const popupTitle = new Control(popupInner.node, 'h2', 'main_popup_title', 'Holly molly! You win!');

    const popupResult = new Control(popupInner.node, 'div', 'main_popup_result');
    const popupResultMoves = new Control(popupResult.node, 'p', 'main_popup_result_moves', 'Moves');
    const popupResultTime = new Control(popupResult.node, 'p', 'main_popup_result_time', 'Time');

    const popupBtnNewGame = new Control(popupInner.node, 'button', 'main_popup_btn', 'new game');
    popupBtnNewGame.node.onclick = (): void => this.newGame();

    this.popupListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.winGame:
          popupResultMoves.node.textContent = `Total moves: ${state.getResult().moves}`;
          popupResultTime.node.textContent = `Time: ${state.getResult().time}`;
          break;

        case StateOptions.resultsPopup:
          popupTitle.node.textContent = 'Results';
          popupBtnNewGame.node.hidden = true;
          break;

        default:
          state.onUpdate.remove(this.popupListener);
      }
    };

    state.onUpdate.add(this.popupListener);
  }

  private popupClose(): void {
    state.setDeletePopup();
  }

  private newGame(): void {
    state.setDeletePopup();
    state.setNewGame();
  }
}
