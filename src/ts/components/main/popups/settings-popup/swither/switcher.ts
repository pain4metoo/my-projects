import Control from '../../../../../common/control';
import { lStorage } from '../../../../../common/local-storage';
import { state } from '../../../../../common/state';
import { StateOptions } from '../../../../../common/state-types';
import { SoundTypes } from '../../../game/soundControl';
import { soundControl } from '../../../../../../index';
import './switcher.scss';

export interface ISwitcher {
  title: string;
  values: Array<string>;
}

export enum SwitcherTitles {
  Theme = 'Theme',
  Animation = 'Animation',
  Language = 'Language',
  Sound = 'Sound',
}

enum SwitcherTitlesRU {
  Theme = 'Тема',
  Animation = 'Анимация',
  Language = 'Язык',
  Sound = 'Звук',
}

export class Switcher extends Control {
  private switcherValue: Control<HTMLElement>;
  private argSwitcher: ISwitcher;
  private input: Control<HTMLInputElement>;
  constructor(parentNode: HTMLElement, argSwitcher: ISwitcher) {
    super(parentNode, 'div', 'switcher');

    this.argSwitcher = argSwitcher;

    const title = new Control(this.node, 'h3', 'switcher_title', argSwitcher.title);

    const switcherInner = new Control(this.node, 'div', 'switcher_inner');

    const label = new Control(switcherInner.node, 'label', 'switcher_switch');

    const input: Control<HTMLInputElement> = new Control(label.node, 'input', 'switcher_checkbox');
    input.node.type = 'checkbox';
    input.node.onclick = (): void => this.onChange(input.node.checked, argSwitcher.title);
    this.input = input;

    const span = new Control(label.node, 'span', 'switcher_slider');

    const switcherValue = new Control(switcherInner.node, 'p', 'switcher_value');
    this.switcherValue = switcherValue;

    this.initIdentifyStates(input.node, argSwitcher.values, switcherValue.node, argSwitcher.title);
  }

  public changeTheme(): void {
    if (this.argSwitcher.title === SwitcherTitles.Theme || this.argSwitcher.title === SwitcherTitlesRU.Theme) {
      soundControl.playSound(SoundTypes.input);
      if (state.getTheme()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
      }
    }
  }

  public changeAnimation(): void {
    if (this.argSwitcher.title === SwitcherTitles.Animation || this.argSwitcher.title === SwitcherTitlesRU.Animation) {
      soundControl.playSound(SoundTypes.input);
      if (state.getAnimation()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
      }
    }
  }
  public changeLanguage(): void {
    if (this.argSwitcher.title === SwitcherTitles.Language || this.argSwitcher.title === SwitcherTitlesRU.Language) {
      soundControl.playSound(SoundTypes.input);
      if (state.getLanguage()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
      }
    }
  }
  public changeSound(): void {
    if (this.argSwitcher.title === SwitcherTitles.Sound || this.argSwitcher.title === SwitcherTitlesRU.Sound) {
      if (state.getSound()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
        this.input.node.checked = true;
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
        this.input.node.checked = false;
      }
    }
  }

  private initIdentifyStates(
    input: HTMLInputElement,
    valuesArr: Array<string>,
    valueTitle: HTMLElement,
    type: string,
  ): void {
    if (type === SwitcherTitles.Animation || type === SwitcherTitlesRU.Animation) {
      if (state.getAnimation()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[0];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[1];
      }
    }
    if (type === SwitcherTitles.Sound || type === SwitcherTitlesRU.Sound) {
      if (state.getSound()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[0];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[1];
      }
    }
    if (type === SwitcherTitles.Language || type === SwitcherTitlesRU.Language) {
      if (state.getLanguage()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[0];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[1];
      }
    }
    if (type === SwitcherTitles.Theme || type === SwitcherTitlesRU.Theme) {
      if (state.getTheme()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[1];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[0];
      }
    }
  }

  private onChange(flag: boolean, type: string): void {
    if (type === SwitcherTitles.Theme || type === SwitcherTitlesRU.Theme) {
      state.setTheme(flag);
    }
    if (type === SwitcherTitles.Animation || type === SwitcherTitlesRU.Animation) {
      state.setAnimation(flag);
    }
    if (type === SwitcherTitles.Sound || type === SwitcherTitlesRU.Sound) {
      state.setSound(flag);

      if (+state.getVolume() > 0) {
        state.setVolume('0');
      } else {
        state.setVolume(state.getLastVolume());
      }
    }
    if (type === SwitcherTitles.Language || type === SwitcherTitlesRU.Language) {
      state.setLanguage(flag);
    }

    lStorage.put('settings', state.getSettings());
  }
}
