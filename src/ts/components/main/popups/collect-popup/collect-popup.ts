import Control from '../../../../common/control';
import { state } from '../../../../common/state';
import './collect-popup.scss';

export class CollectPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_collect');

    new Control(
      this.node,
      'h2',
      'popups_collect_title',
      `${state.getLanguage() ? 'Puzzle assembled automatically' : 'Пятнашки собраны автоматически'}`
    );

    const collectInfo = new Control(this.node, 'div', 'popups_collect_info');

    new Control(
      collectInfo.node,
      'h4',
      'popups_collect_time',
      `${
        state.getLanguage()
          ? `Auto build time: ${state.getCollectTimer()}s`
          : `Время сборки: ${state.getCollectTimer()}c`
      }`
    );

    new Control(
      collectInfo.node,
      'h2',
      'popups_collect_total_time',
      `${state.getLanguage() ? `Game time: ${state.getResult().time}` : `Игровое время: ${state.getResult().time}`}`
    );

    new Control(
      collectInfo.node,
      'h2',
      'popups_collect_moves',
      `${
        state.getLanguage()
          ? `Total moves: ${state.getResult().moves + state.getCollectMoves()}`
          : `Всего ходов: ${state.getResult().moves + state.getCollectMoves()}`
      }`
    );
  }
}
