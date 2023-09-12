import Control from '../../../../../common/control';
import { lStorage } from '../../../../../common/local-storage';
import { state } from '../../../../../common/state';
import { StateOptions } from '../../../../../common/state-types';
import { SoundTypes } from '../../../game/soundControl';
import { soundControl } from '../../../../../../index';
import './switcher.scss';

interface ISwitcher {
  title: string;
  values: Array<string>;
}

export enum SwitcherTitles {
  Theme = 'Theme',
  Animation = 'Animation',
  Language = 'Language',
  Sound = 'Sound'
}

export class Switcher extends Control {
  private switcherListener: (type: StateOptions) => void;

  constructor(parentNode: HTMLElement, argSwitcher: ISwitcher) {
    super(parentNode, 'div', 'switcher');

    const title = new Control(this.node, 'h3', 'switcher_title', argSwitcher.title);

    const switcherInner = new Control(this.node, 'div', 'switcher_inner');

    const label = new Control(switcherInner.node, 'label', 'switcher_switch');

    const input: Control<HTMLInputElement> = new Control(label.node, 'input', 'switcher_checkbox');
    input.node.type = 'checkbox';
    input.node.onclick = (): void => this.onChange(input.node.checked, argSwitcher.title);

    const span = new Control(label.node, 'span', 'switcher_slider');

    const switcherValue = new Control(switcherInner.node, 'p', 'switcher_value');

    this.initIdentifyStates(input.node, argSwitcher.values, switcherValue.node, argSwitcher.title);

    this.switcherListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeTheme:
          if (argSwitcher.title === SwitcherTitles.Theme) {
            soundControl.playSound(SoundTypes.input);
            if (state.getTheme()) {
              switcherValue.node.textContent = argSwitcher.values[1];
            } else {
              switcherValue.node.textContent = argSwitcher.values[0];
            }
          }
          break;
        case StateOptions.changeAnimation:
          if (argSwitcher.title === SwitcherTitles.Animation) {
            soundControl.playSound(SoundTypes.input);
            if (state.getAnimation()) {
              switcherValue.node.textContent = argSwitcher.values[0];
            } else {
              switcherValue.node.textContent = argSwitcher.values[1];
            }
          }
          break;
        case StateOptions.changeLanguage:
          if (argSwitcher.title === SwitcherTitles.Language) {
            soundControl.playSound(SoundTypes.input);
            if (state.getLanguage()) {
              switcherValue.node.textContent = argSwitcher.values[0];
            } else {
              switcherValue.node.textContent = argSwitcher.values[1];
            }
          }
          break;
        case StateOptions.changeSound:
          if (argSwitcher.title === SwitcherTitles.Sound) {
            if (state.getSound()) {
              switcherValue.node.textContent = argSwitcher.values[0];
              input.node.checked = true;
            } else {
              switcherValue.node.textContent = argSwitcher.values[1];
              input.node.checked = false;
            }
          }

          break;
        case StateOptions.closePopup:
          state.onUpdate.remove(this.switcherListener);
          break;
        default:
          lStorage.put('settings', state.getSettings());
      }
    };

    state.onUpdate.add(this.switcherListener);
  }

  private initIdentifyStates(
    input: HTMLInputElement,
    valuesArr: Array<string>,
    valueTitle: HTMLElement,
    type: string
  ): void {
    switch (type) {
      case SwitcherTitles.Animation:
        if (state.getAnimation()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[0];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[1];
        }
        break;
      case SwitcherTitles.Sound:
        if (state.getSound()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[0];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[1];
        }
        break;
      case SwitcherTitles.Language:
        if (state.getLanguage()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[0];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[1];
        }
        break;
      case SwitcherTitles.Theme:
        if (state.getTheme()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[1];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[0];
        }
        break;
    }
  }

  private onChange(flag: boolean, type: string): void {
    switch (type) {
      case SwitcherTitles.Theme:
        state.setTheme(flag);
        break;
      case SwitcherTitles.Animation:
        state.setAnimation(flag);
        break;
      case SwitcherTitles.Sound:
        state.setSound(flag);

        if (+state.getVolume() > 0) {
          state.setVolume('0');
        } else {
          state.setVolume(state.getLastVolume());
        }
        break;
      case SwitcherTitles.Language:
        state.setLanguage(flag);
        break;
      default:
        lStorage.put('settings', state.getSettings());
    }
  }
}
