import Control from '../../../../common/control';
import { TRANSLATE } from '../../../../common/language';
import { state } from '../../../../common/state';
import { StateOptions } from '../../../../common/state-types';
import './settings-popup.scss';
import { ISwitcher, Switcher } from './swither/switcher';
import { Volume } from './volume/volume';

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

    const theme = new Switcher(
      leftInner.node,
      state.getLanguage() ? (TRANSLATE.settings.themeEN as ISwitcher) : (TRANSLATE.settings.themeRU as ISwitcher),
    );
    const animation = new Switcher(
      leftInner.node,
      state.getLanguage() ? (TRANSLATE.settings.animEN as ISwitcher) : (TRANSLATE.settings.animRU as ISwitcher),
    );
    const language = new Switcher(
      leftInner.node,
      state.getLanguage() ? (TRANSLATE.settings.langEN as ISwitcher) : (TRANSLATE.settings.langRU as ISwitcher),
    );

    const sound = new Switcher(
      rightInner.node,
      state.getLanguage() ? (TRANSLATE.settings.soundEN as ISwitcher) : (TRANSLATE.settings.soundRU as ISwitcher),
    );
    const volume = new Volume(sound.node);

    this.settingsPopupListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeLanguage:
          state.onUpdate.remove(this.settingsPopupListener);
          settingsTitle.node.textContent = state.getLanguage() ? 'Settings' : 'Настройки';
          break;
      }
    };

    state.onUpdate.add(this.settingsPopupListener);
  }
}
