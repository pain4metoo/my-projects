import Control from '../../../common/control';
import { Moves } from './moves';
import { Timer } from './timer';
import './counter.scss';

export class Counter extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_counters');

    new Moves(this.node);
    new Timer(this.node);
  }
}
