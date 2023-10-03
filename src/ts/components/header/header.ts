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
  Settings = 'settings',
}

export class Header extends Control {
  private headerListener: (type: StateOptions) => void;
  private navItems: Array<string> = ['restart', 'stop', 'results', 'settings'];
  private navItemsHtmlElements: Array<HTMLButtonElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header');
    const nav = new Control(this.node, 'nav', 'header_nav');
    const navList = new Control(nav.node, 'ul', 'header_list');

    const mobileStopBtn: Control<HTMLButtonElement> = new Control(
      nav.node,
      'button',
      'header_mobile_btn',
      state.getLanguage() ? 'stop' : 'стоп',
    );
    mobileStopBtn.node.onclick = (): void => {
      soundControl.playSound(SoundTypes.btn);
      mobileStopBtn.node.classList.add('header_mobile_btn_active');
      state.setStopGame();
    };

    const burgerMenu = new Control(nav.node, 'div', 'header_burger');
    const burgerItem = new Control(burgerMenu.node, 'div', 'header_burger_item');
    const burgerItem1 = new Control(burgerMenu.node, 'div', 'header_burger_item');
    burgerMenu.node.onclick = (): void => this.openBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);

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
          mobileStopBtn.node.disabled = true;
          break;
        case StateOptions.stopBtnEnable:
          this.stateStopBtn(false);
          mobileStopBtn.node.disabled = false;
          break;
        case StateOptions.changeLanguage:
          this.switchLang(state.getLanguage());
          mobileStopBtn.node.textContent = `${state.getLanguage() ? 'stop' : 'стоп'}`;
          break;
        case StateOptions.resetSettings:
          this.switchLang(state.getLanguage());
          break;
        case StateOptions.closePopup:
          // ignoring the stop button and restart button at index 0 and 1
          this.navItemsHtmlElements.forEach((el: HTMLElement, i): void => {
            if (el.classList.contains('header_item_btn_active') && i !== 1 && i !== 0) {
              el.classList.remove('header_item_btn_active');
            }
          });
          break;
        case StateOptions.unBlockField:
          this.navItemsHtmlElements.forEach((el: HTMLElement): void => {
            if (el.classList.contains('header_item_btn_active')) {
              el.classList.remove('header_item_btn_active');
            }
            mobileStopBtn.node.classList.remove('header_mobile_btn_active');
          });
          break;
        case StateOptions.startGame:
          this.navItemsHtmlElements.forEach((el: HTMLElement): void => {
            if (el.classList.contains('header_item_btn_active')) {
              el.classList.remove('header_item_btn_active');
            }
            mobileStopBtn.node.classList.remove('header_mobile_btn_active');
          });
          break;
        case StateOptions.newGame:
          this.navItemsHtmlElements[0].classList.add('header_item_btn_active');
          break;
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
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            state.closeBurgerMenu();
          };
          break;
        case NavItem.Stop:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.btn);
            navItemLink.node.classList.add('header_item_btn_active');
            state.setStopGame();
          };
          break;
        case NavItem.Results:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.popup);
            navItemLink.node.classList.add('header_item_btn_active');
            this.showResultPopup();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            state.closeBurgerMenu();
          };
          break;
        case NavItem.Settings:
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.popup);
            navItemLink.node.classList.add('header_item_btn_active');
            this.showSettings();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            state.closeBurgerMenu();
          };
          break;
      }
    });

    this.navItemsHtmlElements[1].disabled = true;
    this.switchLang(state.getLanguage());
    state.onUpdate.add(this.headerListener);
  }

  private openBurgerMenu(menu: HTMLElement, item1: HTMLElement, item2: HTMLElement): void {
    item1.classList.toggle('header_burger_item_rotate');
    item2.classList.toggle('header_burger_item_rotate');

    if (item1.classList.contains('header_burger_item_rotate')) {
      menu.classList.add('header_list_show');
      state.openBurgerMenu();
    } else {
      menu.classList.remove('header_list_show');
      state.closeBurgerMenu();
    }
  }

  private closeBurgerMenu(menu: HTMLElement, item1: HTMLElement, item2: HTMLElement): void {
    item1.classList.remove('header_burger_item_rotate');
    item2.classList.remove('header_burger_item_rotate');
    menu.classList.remove('header_list_show');
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
