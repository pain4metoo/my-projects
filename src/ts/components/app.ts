import Control from '../common/control';
import { state } from '../common/state';
import { StateOptions } from '../common/state-types';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import { Popup } from './main/popup/popup';

export class App extends Control {
  private popupEL!: Popup;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');
    const header = new Header(this.node);
    const main = new Main(this.node);
    const footer = new Footer(this.node);

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.showPopup:
          this.popupEL = new Popup(parentNode);
          break;
        case StateOptions.deletePopup:
          this.popupEL.destroy();
          break;
      }
    });
  }
}
