import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import move from '../../../../assets/sound/move.mp3';
import collect from '../../../../assets/sound/collect.mp3';
import win from '../../../../assets/sound/win.mp3';
import btn from '../../../../assets/sound/btn.mp3';
import input from '../../../../assets/sound/input.mp3';
import volume from '../../../../assets/sound/volume.mp3';
import deleteS from '../../../../assets/sound/delete.mp3';
import roboWin from '../../../../assets/sound/robo-win.mp3';
import popup from '../../../../assets/sound/popup.mp3';

export enum SoundTypes {
  move = 'move',
  collect = 'collect',
  win = 'win',
  btn = 'btn',
  input = 'input',
  volume = 'volume',
  delete = 'delete',
  roboWin = 'robo-win',
  popup = 'popup',
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

        break;

      case SoundTypes.win:
        this.sound.src = win;

        break;

      case SoundTypes.collect:
        this.sound.src = collect;

        break;

      case SoundTypes.btn:
        this.sound.src = btn;

        break;

      case SoundTypes.input:
        this.sound.src = input;

        break;

      case SoundTypes.volume:
        this.sound.src = volume;

        break;

      case SoundTypes.delete:
        this.sound.src = deleteS;

        break;

      case SoundTypes.roboWin:
        this.sound.src = roboWin;

        break;

      case SoundTypes.popup:
        this.sound.src = popup;

        break;
    }
    this.play();
  }

  private play(): void {
    // check is Safari or not cuz in the Safari oncanplay doesn't work;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      this.sound.onloadedmetadata = (): void => {
        this.sound.play();
      };
    } else {
      this.sound.oncanplay = (): void => {
        this.sound.play();
      };
    }
  }

  public pauseSound(): void {
    this.sound.pause();
  }
}
