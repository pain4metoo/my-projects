import Control from '../../../common/control';
import './counter.scss';

export class Counters extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_counters');
  }
}
