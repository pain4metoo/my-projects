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

    this.mainListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.setGameAnimation:
          if (state.getAnimation()) {
            this.changeAnimation(state.getTheme(), true, sectionGameContainer.node);
          } else {
            this.changeAnimation(state.getTheme(), false, sectionGameContainer.node);
          }

          break;

        case StateOptions.removeGameAnimation:
          this.changeAnimation(state.getTheme(), false, sectionGameContainer.node);

          break;

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

        case StateOptions.collectPuzzle:
          this.changeAnimation(state.getTheme(), true, sectionGameContainer.node);

          break;

        case StateOptions.shuffleStop:
          this.changeAnimation(state.getTheme(), false, sectionGameContainer.node);

          break;
      }
    };

    state.onUpdate.add(this.mainListener);

    new Counter(this.node);

    const sectionGameContainer = new Control(this.node, 'section', 'main_game');
    let sectionGame = new Game(sectionGameContainer.node);

    new FrameSize(this.node);
  }

  private changeAnimation(theme: boolean, flag: boolean, container: HTMLElement): void {
    if (flag) {
      if (theme) {
        container.classList.add('main_game_animation_dark');
        container.classList.remove('main_game_animation');
      } else {
        container.classList.add('main_game_animation');
        container.classList.remove('main_game_animation_dark');
      }
    } else {
      container.classList.remove('main_game_animation_dark');
      container.classList.remove('main_game_animation');
    }
  }
}
