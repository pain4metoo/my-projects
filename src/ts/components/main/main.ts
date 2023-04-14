import Control from '../../common/control';
import { Counters } from './counters/counters';
import { FrameSize } from './frame-size/frame-size';
import { Game } from './game/game';

export class Main extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'main', 'main');
    const sectionCounters = new Counters(this.node);
    const sectionGame = new Game(this.node);
    const sectionFrameSize = new FrameSize(this.node);
  }
}
