import Control from '../common/control';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');
    const header = new Header(this.node);
    const main = new Main(this.node);
  }
}
