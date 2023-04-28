import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import { Counter } from './counters/counters';
import { FrameSize } from './frame-size/frame-size';
import { Game } from './game/game';
import './main.scss';

export class Main extends Control {
  private gameCycle?: Game;
  private counter?: Counter;
  private frameSize?: FrameSize;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'main', 'main');

    this.createGameCycle();

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.newGame:
          this.destroyGameCycle();
          this.createGameCycle();
      }
    });
  }

  private createGameCycle(): void {
    const sectionCounter = new Counter(this.node);
    this.counter = sectionCounter;
    const sectionGame = new Game(this.node);
    this.gameCycle = sectionGame;
    const sectionFrameSize = new FrameSize(this.node);
    this.frameSize = sectionFrameSize;
  }

  private destroyGameCycle(): void {
    this.gameCycle?.destroy();
    this.counter?.destroy();
    this.frameSize?.destroy();
  }
}
