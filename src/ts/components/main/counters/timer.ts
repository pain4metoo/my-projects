import Control from '../../../common/control';
import { TList, correctTranslater } from '../../../common/language';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';

export class Timer extends Control {
  public currentTimer!: number;
  private timeNodeHtml: HTMLElement;
  private sec = 0;
  private min = 0;
  private hour = 0;
  private collectTimer!: number;
  private collectSec = 1;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main_counters_block_right');

    const timeBlock = new Control(this.node, 'div', 'main_counters_time', '');
    const timeBlockText = new Control(timeBlock.node, 'p', 'main_counters_time_text main_counters_txt', 'Time: ');
    const timeBlockNumber = new Control(timeBlock.node, 'p', 'main_counters_time_number main_counters_txt', '00:00:00');

    this.timeNodeHtml = timeBlockNumber.node;

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.startGame:
          this.setTimer(state.getStopStartGame(), state.getToggleTimer());
          break;
        case StateOptions.stopGame:
          setTimeout(() => {
            this.stopTimer(state.getStopStartGame(), state.getToggleTimer());
          }, 1000);
          break;
        case StateOptions.newGame:
          timeBlockNumber.node.textContent = '00:00:00';
          this.newGame();
          break;
        case StateOptions.winGame:
          if (timeBlockNumber.node.textContent) {
            state.setResultTime(timeBlockNumber.node.textContent);
          }
          break;
        case StateOptions.collectStartTimer:
          this.setTimer(state.getStopStartGame(), state.getToggleTimer());

          this.setCollectGameTimer();
          break;
        case StateOptions.collectStopTimer:
          this.stopTimer(state.getStopStartGame(), state.getToggleTimer());

          this.stopCollectGameTimer();
          break;
        case StateOptions.changeLanguage:
          this.switchLang(state.getLanguage(), timeBlockText.node);
          break;
        case StateOptions.resetSettings:
          this.switchLang(state.getLanguage(), timeBlockText.node);
          break;
      }
    });
    this.switchLang(state.getLanguage(), timeBlockText.node);
  }

  private switchLang(currentLang: boolean, el: HTMLElement): void {
    el.textContent = `${correctTranslater(currentLang, TList.time)[0]}: `;
  }

  private setCollectGameTimer(): void {
    const timer = window.setInterval(() => this.collectSec++, 1000);
    this.collectTimer = timer;
  }

  private stopCollectGameTimer(): void {
    state.setCollectTimer(String(this.collectSec));
    clearInterval(this.collectTimer);
    this.collectSec = 0;
  }

  private newGame(): void {
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
    clearInterval(this.currentTimer);
  }

  private setTimer(stopStartGame?: boolean, toggleTimer?: boolean): void {
    if (stopStartGame && !toggleTimer) {
      const timer = window.setInterval(() => this.newTimer(), 1000);
      this.currentTimer = timer;

      state.setToggleTimer(true);
    }
  }

  private stopTimer(stopStartGame?: boolean, toggleTimer?: boolean): void {
    if (!stopStartGame && toggleTimer) {
      clearInterval(this.currentTimer);
      state.setToggleTimer(false);
    }
  }

  private newTimer(): void {
    this.sec++;
    if (this.sec >= 60) {
      this.min++;
      this.sec = this.sec - 60;
    }
    if (this.min >= 60) {
      this.hour++;
      this.min = this.min - 60;
    }
    if (this.sec < 10) {
      if (this.min < 10) {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:0${this.min}:0${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:0${this.min}:0${this.sec}`;
        }
      } else {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:${this.min}:0${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:${this.min}:0${this.sec}`;
        }
      }
    } else {
      if (this.min < 10) {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:0${this.min}:${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:0${this.min}:${this.sec}`;
        }
      } else {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:${this.min}:${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:${this.min}:${this.sec}`;
        }
      }
    }
  }
}
