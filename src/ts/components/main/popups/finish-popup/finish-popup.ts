import Control from '../../../../common/control';
import './finish-popup.scss';
import { state } from '../../../../common/state';

export class FinishPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_finish');

    if (state.getTheme()) {
      this.node.classList.add('popups_finish_dark');
    } else {
      this.node.classList.remove('popups_finish_dark');
    }

    new Control(
      this.node,
      'h2',
      'popups_finish_title',
      `${state.getLanguage() ? 'Hooray! You have completed the puzzle!' : 'Ура! Вы собрали пятнашки!'}`
    );

    const collectInfo = new Control(this.node, 'div', 'popups_collect_info');

    new Control(
      collectInfo.node,
      'h4',
      'popups_finish_time',
      `${state.getLanguage() ? `Game time: ${state.getResult().time}` : `Время игры: ${state.getResult().time}`}`
    );

    new Control(
      collectInfo.node,
      'h4',
      'popups_finish_moves',
      `${
        state.getLanguage()
          ? `Total moves: ${state.getResult().moves + state.getCollectMoves()}`
          : `Всего ходов: ${state.getResult().moves + state.getCollectMoves()}`
      }`
    );
  }
}
