import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import { SoundTypes } from '../main/game/soundControl';
import { soundControl } from '../../../index';
import './header.scss';
import { TList, correctTranslater } from '../../common/language';

enum NavItem {
  Restart = 'restart',
  Stop = 'stop',
  Results = 'results',
  Settings = 'settings'
}

export class Header extends Control {
  private headerListener: (type: StateOptions) => void;
  private navItems: Array<string> = ['restart', 'stop', 'results', 'settings'];
  private navItemsHtmlElements: Array<HTMLButtonElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header');
    const nav = new Control(this.node, 'nav', 'header_nav');
    const navList = new Control(nav.node, 'ul', 'header_list');

    this.headerListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.shuffleStart:
          this.stateButtons(true);
          break;
        case StateOptions.shuffleStop:
          this.stateButtons(false);
          break;
        case StateOptions.stopBtnDisable:
          this.stateStopBtn(true);
          break;
        case StateOptions.stopBtnEnable:
          this.stateStopBtn(false);
          break;
        case StateOptions.changeLanguage:
          this.switchLang(state.getLanguage());
          break;
        case StateOptions.resetSettings:
          this.switchLang(state.getLanguage());
          break;
        case StateOptions.closePopup:
          this.navItemsHtmlElements.forEach((el: HTMLElement): void => {
            console.log(el);
            if (el.classList.contains('header_item_btn_active')) {
              el.classList.remove('header_item_btn_active');
            }
          });
          break;
        default:
          return;
      }
    };

    this.navItems.forEach((navLink: string) => {
      const navItem = new Control(navList.node, 'li', 'header_list_item');
      const navItemLink: Control<HTMLButtonElement> = new Control(navItem.node, 'button', 'header_item_btn', navLink);
      this.navItemsHtmlElements.push(navItemLink.node);

      switch (navLink) {
        case NavItem.Restart:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.collect);
            state.setNewGame();
          };
          break;
        case NavItem.Stop:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.btn);
            state.setStopGame();
          };
          break;
        case NavItem.Results:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.popup);
            navItemLink.node.classList.add('header_item_btn_active');
            this.showResultPopup();
          };
          break;
        case NavItem.Settings:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.popup);
            navItemLink.node.classList.add('header_item_btn_active');
            this.showSettings();
          };
          break;
      }
    });

    this.navItemsHtmlElements[1].disabled = true;
    this.switchLang(state.getLanguage());
    state.onUpdate.add(this.headerListener);
  }

  private switchLang(currentLang: boolean): void {
    this.navItemsHtmlElements.forEach((el, i) => {
      el.textContent = correctTranslater(currentLang, TList.header)[i];
    });
  }

  private showSettings(): void {
    state.createPopup();
    state.openSettings();
  }

  private showResultPopup(): void {
    state.createPopup();
    state.showResultPopup();
  }

  private stateButtons(flag: boolean): void {
    this.navItemsHtmlElements.forEach((el: HTMLButtonElement, i) => {
      if (i !== 1) {
        flag ? (el.disabled = true) : (el.disabled = false);
      }
    });
  }

  private stateStopBtn(flag: boolean): void {
    flag ? (this.navItemsHtmlElements[1].disabled = true) : (this.navItemsHtmlElements[1].disabled = false); // change stopBtn
  }
}
