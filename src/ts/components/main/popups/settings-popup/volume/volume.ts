import Control from '../../../../../common/control';
import './volume.scss';
import volumeOn from '../../../../../../assets/image/volume-on.png';
import volumeOff from '../../../../../../assets/image/volume-off.png';
import { state } from '../../../../../common/state';
import { StateOptions } from '../../../../../common/state-types';

export class Volume extends Control {
  private volumeListener: (type: StateOptions) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'volume');

    const volumeIcon: Control<HTMLImageElement> = new Control(this.node, 'img', 'volume_icon');
    volumeIcon.node.alt = 'volume';
    volumeIcon.node.src = state.getVolume() === '0' ? volumeOff : volumeOn;
    volumeIcon.node.onclick = (): void => this.onToggleVolume();

    const input: Control<HTMLInputElement> = new Control(this.node, 'input', 'volume_input');
    input.node.type = 'range';
    input.node.style.background = `linear-gradient(to right, #ff2253 ${state.getVolume()}%, #ff2253 0%, #fff ${state.getVolume()}%, white 100%)`;
    input.node.value = state.getVolume();
    input.node.oninput = (): void => this.setVolume(input.node.value);

    this.volumeListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeVolume:
          this.showChanges(input.node, volumeIcon.node);
          break;
        case StateOptions.closePopup:
          state.onUpdate.remove(this.volumeListener);
          break;
      }
    };

    state.onUpdate.add(this.volumeListener);
  }

  private setVolume(value: string): void {
    state.setLastVolume(value);
    state.setVolume(value);
  }

  private showChanges(input: HTMLInputElement, icon: HTMLImageElement): void {
    const value = state.getVolume();

    input.value = value;
    input.style.background = `linear-gradient(to right, #ff2253 ${value}%, #ff2253 0%, #fff ${value}%, white 100%)`;

    if (+value === 0) {
      icon.src = volumeOff;
      state.setSound(false);
    } else {
      icon.src = volumeOn;
      state.setSound(true);
    }
  }

  private onToggleVolume(): void {
    const volume = state.getVolume();
    if (+volume > 0) {
      state.setLastVolume(volume);
      state.setVolume('0');
    } else {
      state.setVolume(state.getLastVolume());
    }
  }
}
