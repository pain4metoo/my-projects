import Control from '../../../../common/control';
import './result-popup.scss';

export class ResultPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_result');

    const resultTitle = new Control(this.node, 'h2', 'popups_collect_title', 'Your Highest Scores');
  }
}
