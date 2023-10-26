import Control from '../../../../../common/control';
import { lStorage } from '../../../../../common/local-storage';
import { state } from '../../../../../common/state';
import { SoundTypes } from '../../../game/soundControl';
import { soundControl } from '../../../../../../index';
import './switcher.scss';
import { LangType, SwitcherType } from '../settings-popup';
import { TRANSLATE, TranslateLang } from '../../../../../common/language';

export class Switcher extends Control {
  private switcherValue: Control<HTMLElement>;
  private switcherSlider: Control<HTMLElement>;
  private input: Control<HTMLInputElement>;
  private type: SwitcherType;
  private settingsWords: TranslateLang;
  private lang: LangType;
  private switcherTitle: HTMLElement;

  constructor(parentNode: HTMLElement, type: SwitcherType) {
    super(parentNode, 'div', 'switcher');

    this.type = type;
    this.settingsWords = TRANSLATE.settings[this.type] as TranslateLang;
    this.lang = state.getLanguage() ? LangType.En : LangType.Ru;

    const switcherTitle = new Control(this.node, 'h3', 'switcher_title', this.settingsWords[this.lang].title);
    this.switcherTitle = switcherTitle.node;

    const switcherInner = new Control(this.node, 'div', 'switcher_inner');

    const label = new Control(switcherInner.node, 'label', 'switcher_switch');

    const input: Control<HTMLInputElement> = new Control(label.node, 'input', 'switcher_checkbox');
    input.node.type = 'checkbox';
    input.node.onclick = (): void => this.onChange(input.node.checked);
    this.input = input;

    const span = new Control(label.node, 'span', 'switcher_slider');
    this.switcherSlider = span;

    const switcherValue = new Control(switcherInner.node, 'p', 'switcher_value');
    this.switcherValue = switcherValue;

    this.initIdentifyStates(input.node);
  }

  private changeThemeStyle(theme: boolean): void {
    if (theme) {
      this.switcherValue.node.classList.add('switcher_value_dark');
      this.switcherTitle.classList.add('switcher_title_dark');
      this.switcherSlider.node.classList.add('switcher_slider_dark');
    } else {
      this.switcherValue.node.classList.remove('switcher_value_dark');
      this.switcherTitle.classList.remove('switcher_title_dark');
      this.switcherSlider.node.classList.remove('switcher_slider_dark');
    }
  }

  public changeTheme(): void {
    this.changeThemeStyle(state.getTheme());
    if (SwitcherType.Theme === this.type) {
      soundControl.playSound(SoundTypes.input);
      if (state.getTheme()) {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      } else {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      }
    }
  }

  public changeAnimation(): void {
    if (SwitcherType.Animation === this.type) {
      soundControl.playSound(SoundTypes.input);
      if (state.getAnimation()) {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      } else {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      }
    }
  }
  public changeLanguage(): void {
    if (SwitcherType.Language === this.type) {
      soundControl.playSound(SoundTypes.input);
      if (state.getLanguage()) {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      } else {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      }
    }
  }
  public changeSound(): void {
    if (SwitcherType.Sound === this.type) {
      if (state.getSound()) {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
        this.input.node.checked = true;
      } else {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
        this.input.node.checked = false;
      }
    }
  }

  public changeGameMode(): void {
    if (SwitcherType.Mode === this.type) {
      soundControl.playSound(SoundTypes.input);
      if (state.getGameMode()) {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
        this.input.node.checked = true;
      } else {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
        this.input.node.checked = false;
      }
    }
  }

  private initIdentifyStates(input: HTMLInputElement): void {
    this.changeThemeStyle(state.getTheme());
    if (this.type === SwitcherType.Theme) {
      if (state.getTheme()) {
        input.checked = true;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      } else {
        input.checked = false;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      }
    }
    if (this.type === SwitcherType.Animation) {
      if (state.getAnimation()) {
        input.checked = true;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      } else {
        input.checked = false;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      }
    }
    if (this.type === SwitcherType.Sound) {
      if (state.getSound()) {
        input.checked = true;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      } else {
        input.checked = false;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      }
    }
    if (this.type === SwitcherType.Language) {
      if (state.getLanguage()) {
        input.checked = true;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
      } else {
        input.checked = false;
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
      }
    }
    if (this.type === SwitcherType.Mode) {
      if (state.getGameMode()) {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[1];
        this.input.node.checked = true;
      } else {
        this.switcherValue.node.textContent = this.settingsWords[this.lang].values[0];
        this.input.node.checked = false;
      }
    }
  }

  private onChange(flag: boolean): void {
    if (this.type === SwitcherType.Theme) {
      state.setTheme(flag);
    }
    if (this.type === SwitcherType.Animation) {
      state.setAnimation(flag);
    }
    if (this.type === SwitcherType.Sound) {
      state.setSound(flag);

      if (+state.getVolume() > 0) {
        state.setVolume('0');
      } else {
        state.setVolume(state.getLastVolume());
      }
    }
    if (this.type === SwitcherType.Language) {
      state.setLanguage(flag);
    }
    if (this.type === SwitcherType.Mode) {
      state.setGameMode(flag);
    }

    lStorage.put('settings', state.getSettings());
  }
}
