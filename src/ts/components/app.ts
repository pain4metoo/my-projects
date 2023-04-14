import Control from '../common/control';
import { Header } from './header/header';

export class App extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');
    const header = new Header(this.node);
  }
}
