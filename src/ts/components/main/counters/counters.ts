import Control from '../../../common/control';

import './counter.scss';
import { Moves } from './moves';
import { Timer } from './timer';

export class Counter extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_counters');

    new Moves(this.node);
    new Timer(this.node);
  }
}
