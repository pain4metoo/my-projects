import Control from '../common/control';
import { state } from '../common/state';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');
    const header = new Header(this.node);
    const wrapper = new Control(this.node, 'div', 'wrapper_inner');
    const main = new Main(wrapper.node);
    const footer = new Footer(this.node);
  }
}
