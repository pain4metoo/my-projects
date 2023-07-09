import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import './popups.scss';

export class Popups extends Control {
  private popupsListener: (type: StateOptions) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups');

    const popupsInner = new Control(this.node, 'div', 'popups_inner');
    const closeBtn = new Control(popupsInner.node, 'button', 'popups_close_btn');

    closeBtn.node.onclick = (): void => this.onDeletePopup();

    this.popupsListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.showCollectPopup:
          break;
        case StateOptions.showResultPopup:
          break;
        case StateOptions.showFinishPopup:
          break;
      }
    };
  }

  private onDeletePopup(): void {
    state.closePopup();
  }
}
