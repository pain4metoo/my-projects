import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import { CollectPopup } from './collect-popup/collect-popup';
import { FinishPopup } from './finish-popup/finish-popup';
import { ResultPopup } from './result-popup/result-popup';
import './popups.scss';

export class Popups extends Control {
  private popupsListener: (type: StateOptions) => void;
  private popupCollect!: CollectPopup;
  private popupFinish!: FinishPopup;
  private popupResult!: ResultPopup;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups');

    const popupsInner = new Control(this.node, 'div', 'popups_inner');
    const closeBtn = new Control(popupsInner.node, 'button', 'popups_close_btn');

    const newGameBtn = new Control(popupsInner.node, 'button', 'popups_new_btn', 'Restart');
    newGameBtn.node.onclick = (): void => this.onNewGameBtn();

    closeBtn.node.onclick = (): void => this.onDeletePopup();

    this.popupsListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.showCollectPopup:
          this.popupCollect = new CollectPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;
        case StateOptions.showResultPopup:
          this.popupResult = new ResultPopup(popupsInner.node);
          newGameBtn.node.textContent = 'Delete all results';
          newGameBtn.node.onclick = (): void => this.onClearState();
          break;
        case StateOptions.showFinishPopup:
          this.popupFinish = new FinishPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;

        case StateOptions.clearLocalStorage:
          this.popupResult.destroy();
          this.popupResult = new ResultPopup(popupsInner.node);
      }
    };

    state.onUpdate.add(this.popupsListener);
  }

  private onClearState(targetIndex?: number): void {
    if (!targetIndex && targetIndex !== 0) {
      state.clearAllStorage();
    } else {
      state.deleteTargetFromStorage(targetIndex);
    }
  }

  private onNewGameBtn(): void {
    state.setNewGame();
    this.onDeletePopup();
  }

  private onDeletePopup(): void {
    state.closePopup();
  }
}
