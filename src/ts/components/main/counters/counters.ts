import Control from '../../../common/control';
import './counter.scss';

export class Counter extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_counters');
    const movesBlock = new Control(this.node, 'div', 'main_counters_moves', '');
    const movesBlockText = new Control(movesBlock.node, 'p', 'main_counters_text', 'Moves: ');
    const movesBlockNumber = new Control(movesBlock.node, 'p', 'main_counters_number', '0');

    const timeBlock = new Control(this.node, 'div', 'main_counters_time', '');
    const timeBlockText = new Control(timeBlock.node, 'p', 'main_counters_time_text', 'Time: ');
    const timeBlockNumber = new Control(timeBlock.node, 'p', 'main_counters_time_number', '00:00');
  }
}
