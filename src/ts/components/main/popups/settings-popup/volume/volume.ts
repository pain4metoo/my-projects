import Control from '../../../../../common/control';
import './volume.scss';
import volumeOn from '../../../../../../assets/svg/volume-on.svg';
import volumeOff from '../../../../../../assets/svg/volume-off.svg';
import { state } from '../../../../../common/state';
import { lStorage } from '../../../../../common/local-storage';
import { SoundTypes } from '../../../game/soundControl';
import { soundControl } from '../../../../../../index';

export class Volume extends Control {
  private input: HTMLInputElement;
  private icon: HTMLImageElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'volume');

    const volumeIcon: Control<HTMLImageElement> = new Control(this.node, 'img', 'volume_icon');
    volumeIcon.node.alt = 'volume';
    volumeIcon.node.src = state.getVolume() === '0' ? volumeOff : volumeOn;
    volumeIcon.node.onclick = (): void => this.onToggleVolume();
    this.icon = volumeIcon.node;

    const input: Control<HTMLInputElement> = new Control(this.node, 'input', 'volume_input');
    input.node.type = 'range';
    input.node.value = state.getVolume();
    input.node.oninput = (): void => this.setVolume(input.node.value);
    input.node.onchange = (): void => this.playSound();
    this.input = input.node;

    this.changeTheme();
  }

  public changeTheme(): void {
    if (state.getTheme()) {
      this.input.style.background = `linear-gradient(to right, rgb(51, 103, 133) ${state.getVolume()}%, rgb(255 255 255) 0${state.getVolume()}%, rgb(255, 255, 255) 19%, white 100%)`;
    } else {
      this.input.style.background = `linear-gradient(to right, #ffa500 ${state.getVolume()}%, #ffa500 0%, #fff ${state.getVolume()}%, white 100%)`;
    }
  }

  private playSound(): void {
    soundControl.playSound(SoundTypes.volume);
  }

  public setVolume(value: string): void {
    state.setLastVolume(value);
    state.setVolume(value);
    lStorage.put('gemsettings', state.getSettings());
    this.showChanges();
  }

  public showChanges(): void {
    const value = state.getVolume();

    this.input.value = value;

    if (state.getTheme()) {
      this.input.style.background = `linear-gradient(to right, rgb(51, 103, 133) ${state.getVolume()}%, rgb(255 255 255) 0${state.getVolume()}%, rgb(255, 255, 255) 19%, white 100%)`;
    } else {
      this.input.style.background = `linear-gradient(to right, #ffa500 ${value}%, #ffa500 0%, #fff ${value}%, white 100%)`;
    }

    if (+value === 0) {
      this.icon.src = volumeOff;
      state.setSound(false);
    } else {
      this.icon.src = volumeOn;
      state.setSound(true);
    }
  }

  public onToggleVolume(): void {
    soundControl.playSound(SoundTypes.btn);

    const volume = state.getVolume();

    if (+volume > 0) {
      state.setLastVolume(volume);
      state.setVolume('0');
    } else {
      state.setVolume(state.getLastVolume());
    }
    lStorage.put('gemsettings', state.getSettings());

    this.showChanges();
  }
}
