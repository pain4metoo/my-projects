import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import move from '../../../../assets/sound/move.mp3';
import collect from '../../../../assets/sound/collect.mp3';
import win from '../../../../assets/sound/win.mp3';
import btn from '../../../../assets/sound/btn.mp3';
import input from '../../../../assets/sound/input.mp3';
import volume from '../../../../assets/sound/volume.mp3';

export enum SoundTypes {
  move = 'move',
  collect = 'collect',
  win = 'win',
  btn = 'btn',
  input = 'input',
  volume = 'volume'
}

export class SoundControl {
  private sound: HTMLAudioElement;
  private soundListener: (type: StateOptions) => void;
  constructor() {
    this.sound = new Audio();
    this.sound.volume = Number(state.getVolume()) / 100;

    this.soundListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeVolume:
          this.sound.volume = Number(state.getVolume()) / 100;
          break;
      }
    };

    state.onUpdate.add(this.soundListener);
  }

  public playSound(type: SoundTypes): void {
    switch (type) {
      case SoundTypes.move:
        this.sound.src = move;
        this.sound.play();
        break;
      case SoundTypes.win:
        this.sound.src = win;
        this.play();
        break;
      case SoundTypes.collect:
        this.sound.src = collect;
        this.play();
        break;
      case SoundTypes.btn:
        this.sound.src = btn;
        this.play();
        break;
      case SoundTypes.input:
        this.sound.src = input;
        this.play();
        break;
      case SoundTypes.volume:
        this.sound.src = volume;
        this.play();
        break;
    }
  }

  private play(): void {
    const isPlaying =
      this.sound.currentTime > 0 &&
      !this.sound.paused &&
      !this.sound.ended &&
      this.sound.readyState > this.sound.HAVE_CURRENT_DATA;
    this.sound.currentTime = 0;
    if (!isPlaying) {
      setTimeout(() => {
        this.sound.play();
      }, 150);
    }
  }

  public pauseSound(): void {
    this.sound.pause();
  }
}
