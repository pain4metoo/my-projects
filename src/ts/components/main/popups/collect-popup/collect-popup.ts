import Control from '../../../../common/control';
import { state } from '../../../../common/state';
import './collect-popup.scss';

export class CollectPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_collect');

    const collectTitle = new Control(this.node, 'h2', 'popups_collect_title', 'Puzzle assembled automatically');

    const collectTime = new Control(
      this.node,
      'h4',
      'popups_collect_time',
      `Auto build time: ${state.getCollectTimer()}s`
    );

    const totalTime = new Control(this.node, 'h2', 'popups_collect_total_time', `Game time: ${state.getResult().time}`);

    const totalMoves = new Control(
      this.node,
      'h2',
      'popups_collect_moves',
      `Total moves: ${state.getResult().moves + state.getCollectMoves()}`
    );
  }
}
