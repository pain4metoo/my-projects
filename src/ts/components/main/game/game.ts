import Control from '../../../common/control';
import './game.scss';

export class Game extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_game');
  }
}
