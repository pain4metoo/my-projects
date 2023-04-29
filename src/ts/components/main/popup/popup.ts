import Control from '../../../common/control';
import { state } from '../../../common/state';
import './popup.scss';

export class Popup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_popup');
    const popupInner = new Control(this.node, 'div', 'main_popup_inner');

    const popupBtnClose = new Control(popupInner.node, 'button', 'main_popup_btn_close');
    popupBtnClose.node.onclick = (): void => this.popupClose();
    const popupTitle = new Control(popupInner.node, 'h2', 'main_popup_title', 'Title');
    const popupResult = new Control(popupInner.node, 'p', 'main_popup_result', 'Result!');
    const popupBtnNewGame = new Control(popupInner.node, 'button', 'main_popup_btn', 'new game');
    popupBtnNewGame.node.onclick = (): void => this.newGame();
  }

  private popupClose(): void {
    state.setDeletePopup();
  }

  private newGame(): void {
    state.setDeletePopup();
    state.setNewGame();
  }
}
