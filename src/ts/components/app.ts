import Control from '../common/control';
import { state } from '../common/state';
import { StateOptions } from '../common/state-types';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  private appListener: (type: StateOptions) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');
    const header = new Header(this.node);
    const main = new Main(this.node);
    const footer = new Footer(this.node);

    this.appListener = (type: StateOptions) => {
      switch (type) {
        case StateOptions.changeLanguage:
          this.changeFontFamily(state.getLanguage(), parentNode);
          break;
      }
    };

    state.onUpdate.add(this.appListener);
  }

  private changeFontFamily(isEn: boolean, parentNode: HTMLElement) {
    isEn
      ? (parentNode.style.fontFamily = `'Thasadith', sans-serif`)
      : (parentNode.style.fontFamily = `'Ubuntu', sans-serif`);
  }
}
