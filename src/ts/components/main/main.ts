import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import { Counter } from './counters/counters';
import { FrameSize } from './frame-size/frame-size';
import { Game } from './game/game';
import './main.scss';
import { Popups } from './popups/popups';
import { WarningPopup } from './popups/warning-popup/warning-popup';

export class Main extends Control {
  private mainListener: (type: StateOptions) => void;
  private mainPopups!: Popups;
  private warningPopup!: WarningPopup;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'main', 'main');

    const sectionCounter = new Counter(this.node);

    const sectionGameContainer = new Control(this.node, 'section', 'main_game');
    let sectionGame = new Game(sectionGameContainer.node);

    const sectionFrameSize = new FrameSize(this.node);

    this.mainListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.newGame:
          sectionGame.destroy();
          sectionGame = new Game(sectionGameContainer.node);
          break;
        case StateOptions.createPopup:
          this.mainPopups = new Popups(this.node);
          break;
        case StateOptions.closePopup:
          this.mainPopups.destroy();
          break;
        case StateOptions.showWarningPopup:
          this.warningPopup = new WarningPopup(this.node);
          break;
        case StateOptions.closeWarningPopup:
          this.warningPopup.destroy();
          break;
        case StateOptions.openBurgerMenu:
          this.node.style.zIndex = '-1';
          break;
        case StateOptions.closeBurgerMenu:
          this.node.style.zIndex = '0';
          this.node.style.position = 'inherit';
          break;
      }
    };

    state.onUpdate.add(this.mainListener);
  }
}
