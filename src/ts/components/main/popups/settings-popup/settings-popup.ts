import Control from '../../../../common/control';
import { TRANSLATE } from '../../../../common/language';
import { state } from '../../../../common/state';
import { StateOptions } from '../../../../common/state-types';
import './settings-popup.scss';
import { Switcher } from './swither/switcher';
import { Volume } from './volume/volume';

export enum SwitcherType {
  Theme = 'theme',
  Animation = 'animation',
  Language = 'language',
  Sound = 'sound',
  Mode = 'mode',
}

export enum LangType {
  Ru = 'ru',
  En = 'en',
}

export class SettingsPopup extends Control {
  private settingsPopupListener: (type: StateOptions) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'settings');
    const settingsTitle = new Control(
      this.node,
      'h2',
      'settings_title',
      state.getLanguage() ? 'Settings' : 'Настройки',
    );

    const settingsInner = new Control(this.node, 'div', 'settings_inner');

    const leftInner = new Control(settingsInner.node, 'div', 'settings_left');
    const rightInner = new Control(settingsInner.node, 'div', 'settings_right');

    const theme = new Switcher(leftInner.node, SwitcherType.Theme);
    const animation = new Switcher(leftInner.node, SwitcherType.Animation);
    const language = new Switcher(leftInner.node, SwitcherType.Language);

    const sound = new Switcher(rightInner.node, SwitcherType.Sound);
    const volume = new Volume(sound.node);

    const gameMode = new Switcher(rightInner.node, SwitcherType.Mode);

    this.settingsPopupListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeTheme:
          theme.changeTheme();
          break;
        case StateOptions.changeAnimation:
          animation.changeAnimation();
          break;
        case StateOptions.changeLanguage:
          language.changeLanguage();
          break;
        case StateOptions.changeSound:
          sound.changeSound();
          break;
        case StateOptions.changeVolume:
          volume.showChanges();
          break;
        case StateOptions.changeLanguage:
          state.onUpdate.remove(this.settingsPopupListener);
          settingsTitle.node.textContent = state.getLanguage() ? 'Settings' : 'Настройки';
          break;
        case StateOptions.closePopup:
          state.onUpdate.remove(this.settingsPopupListener);
          break;
        case StateOptions.changeGameMode:
          gameMode.changeGameMode();
          break;
        case StateOptions.resetSettings:
          volume.setVolume(state.getVolume());
          break;
      }
    };

    state.onUpdate.add(this.settingsPopupListener);
  }
}
