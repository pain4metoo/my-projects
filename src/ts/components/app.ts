import Control from '../common/control';
import { state } from '../common/state';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');
    const header = new Header(this.node);
    const main = new Main(this.node);
    const footer = new Footer(this.node);

    state.initLocalStorage();
  }
}
