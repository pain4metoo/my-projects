import Control from '../../../../common/control';
import './finish-popup.scss';

export class FinishPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_finish');

    const finishTitle = new Control(this.node, 'h2', 'popups_collect_title', 'Hooray! You have completed the puzzle!');
  }
}
