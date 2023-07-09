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

    closeBtn.node.onclick = (): void => this.onDeletePopup();

    this.popupsListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.showCollectPopup:
          this.popupCollect = new CollectPopup(popupsInner.node);
          break;
        case StateOptions.showResultPopup:
          this.popupCollect = new ResultPopup(popupsInner.node);
          break;
        case StateOptions.showFinishPopup:
          this.popupFinish = new FinishPopup(popupsInner.node);
          break;
      }
    };

    state.onUpdate.add(this.popupsListener);
  }

  private onDeletePopup(): void {
    state.closePopup();
  }
}
