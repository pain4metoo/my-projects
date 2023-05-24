import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import { Counter } from './counters/counters';
import { FrameSize } from './frame-size/frame-size';
import { Game } from './game/game';
import './main.scss';

export class Main extends Control {
  private mainListener: (type: StateOptions) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'main', 'main');

    const sectionCounter = new Counter(this.node);

    const sectionGameContainer = new Control(this.node, 'section', 'main_game_section');
    let sectionGame = new Game(sectionGameContainer.node);

    const sectionFrameSize = new FrameSize(this.node);

    this.mainListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.newGame:
          sectionGame.destroy();
          sectionGame = new Game(sectionGameContainer.node);
          break;
      }
    };

    state.onUpdate.add(this.mainListener);
  }
}
