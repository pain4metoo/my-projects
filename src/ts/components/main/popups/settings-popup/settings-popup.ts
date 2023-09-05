import Control from '../../../../common/control';
import './settings-popup.scss';
import { Switcher, SwitcherTitles } from './swither/switcher';
import { Volume } from './volume/volume';

export class SettingsPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'settings');
    const settingsTitle = new Control(this.node, 'h2', 'settings_title', 'Settings');

    const settingsInner = new Control(this.node, 'div', 'settings_inner');

    const leftInner = new Control(settingsInner.node, 'div', 'settings_left');
    const rightInner = new Control(settingsInner.node, 'div', 'settings_right');

    const theme = new Switcher(leftInner.node, { title: SwitcherTitles.Theme, values: ['Light', 'Dark'] });
    const animation = new Switcher(leftInner.node, { title: SwitcherTitles.Animation, values: ['On', 'Off'] });
    const language = new Switcher(leftInner.node, { title: SwitcherTitles.Language, values: ['EN', 'RU'] });

    const sound = new Switcher(rightInner.node, { title: SwitcherTitles.Sound, values: ['On', 'Off'] });
    const volume = new Volume(rightInner.node);
  }
}
