import Control from '../../../../common/control';
import './collect-popup.scss';

export class CollectPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_collect');

    const collectTitle = new Control(this.node, 'h2', 'popups_collect_title', 'Puzzle assembled automatically');
  }
}
