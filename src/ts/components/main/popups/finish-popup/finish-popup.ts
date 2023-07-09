import Control from '../../../../common/control';
import './finish-popup.scss';
import { state } from '../../../../common/state';

export class FinishPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_finish');

    const finishTitle = new Control(this.node, 'h2', 'popups_finish_title', 'Hooray! You have completed the puzzle!');

    const collectInfo = new Control(this.node, 'div', 'popups_collect_info');

    const finishTime = new Control(
      collectInfo.node,
      'h4',
      'popups_finish_time',
      `Game time: ${state.getResult().time}`
    );

    const finishMoves = new Control(
      collectInfo.node,
      'h4',
      'popups_finish_moves',
      `Total moves: ${state.getResult().moves + state.getCollectMoves()}`
    );
  }
}
