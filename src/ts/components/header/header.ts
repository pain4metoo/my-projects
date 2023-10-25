import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import { SoundTypes } from '../main/game/soundControl';
import { soundControl } from '../../../index';
import './header.scss';

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
      state.getLanguage() ? 'stop' : 'стоп'
    );
    mobileStopBtn.node.onclick = (): void => {
      soundControl.playSound(SoundTypes.btn);

      state.setStopGame();
      state.setStopGameBtn(true);
      this.changeThemeActive(state.getTheme(), true, this.navItemsHtmlElements[1], mobileStopBtn.node);
    };

    const burgerMenu = new Control(nav.node, 'div', 'header_burger');
    const burgerItem = new Control(burgerMenu.node, 'div', 'header_burger_item');
    const burgerItem1 = new Control(burgerMenu.node, 'div', 'header_burger_item');
    burgerMenu.node.onclick = (): void => {
      soundControl.playSound(SoundTypes.btn);
      this.openBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
    };

    // create buttons
    this.navItems.forEach((navLink: string) => {
      const navItem = new Control(navList.node, 'li', 'header_list_item');
      const navItemLink: Control<HTMLButtonElement> = new Control(navItem.node, 'button', 'header_item_btn');
      this.navItemsHtmlElements.push(navItemLink.node);
      switch (navLink) {
        case NavItem.Restart:
          navItemLink.node.textContent = state.getLanguage() ? 'restart' : 'рестарт';
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.collect);
            state.setNewGame();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            state.closeBurgerMenu();
            this.changeThemeActive(state.getTheme(), true, navItemLink.node);
          };
          break;
        case NavItem.Stop:
          navItemLink.node.textContent = state.getLanguage() ? 'stop' : 'стоп';
          navItemLink.node.disabled = true;
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.btn);
            state.setStopGame();
            state.setStopGameBtn(true);
            navItemLink.node.disabled = true;
            this.changeThemeActive(state.getTheme(), true, navItemLink.node, mobileStopBtn.node);
          };
          break;
        case NavItem.Results:
          navItemLink.node.textContent = state.getLanguage() ? 'results' : 'результаты';
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.popup);
            this.showResultPopup();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            state.closeBurgerMenu();
            this.changeThemeActive(state.getTheme(), true, navItemLink.node);
          };
          break;
        case NavItem.Settings:
          navItemLink.node.textContent = state.getLanguage() ? 'settings' : 'настройки';
          navItem.node.onclick = (): void => {
            soundControl.playSound(SoundTypes.popup);
            this.showSettings();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            state.closeBurgerMenu();
            this.changeThemeActive(state.getTheme(), true, navItemLink.node);
          };
          break;
      }
    });

    this.changeTheme(state.getTheme(), mobileStopBtn.node, burgerItem.node, burgerItem1.node);

    this.headerListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.startGame:
          this.changeStateStopBtn(mobileStopBtn.node, false);
          break;

        case StateOptions.stopBtnEnable:
          this.changeStateStopBtn(mobileStopBtn.node, false);
          this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[1], mobileStopBtn.node);
          break;

        case StateOptions.stopBtnDisable:
          this.changeStateStopBtn(mobileStopBtn.node, true);
          break;

        case StateOptions.shuffleStart:
          this.changeStateButtons(true);
          this.changeStateStopBtn(mobileStopBtn.node, true);
          this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[1], mobileStopBtn.node);
          this.changeThemeActive(state.getTheme(), true, this.navItemsHtmlElements[0]);
          break;

        case StateOptions.shuffleStop:
          this.changeStateButtons(false);
          this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[0]);
          break;

        case StateOptions.closePopup:
          this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[2]);
          this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[3]);
          break;

        case StateOptions.changeLanguage:
          this.changeLanguage(mobileStopBtn.node);
          break;
        case StateOptions.changeTheme:
          this.changeTheme(state.getTheme(), mobileStopBtn.node, burgerItem.node, burgerItem1.node);

          // for settings btn
          if (state.getPopupState()) {
            this.changeThemeActive(state.getTheme(), true, this.navItemsHtmlElements[3]);
          } else {
            this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[3]);
          }

          // for stop btn
          console.log(state.getStopGameBtn());
          if (state.getStopGameBtn()) {
            this.changeThemeActive(state.getTheme(), true, this.navItemsHtmlElements[1], mobileStopBtn.node);
          } else {
            this.changeThemeActive(state.getTheme(), false, this.navItemsHtmlElements[1], mobileStopBtn.node);
          }

          break;
      }
    };

    state.onUpdate.add(this.headerListener);
  }

  private changeThemeActive(theme: boolean, flag: boolean, btn: HTMLButtonElement, mobBtn?: HTMLButtonElement): void {
    if (flag) {
      if (theme) {
        btn.classList.add('header_item_btn_active_dark');
        btn.classList.remove('header_item_btn_active');
        if (mobBtn) {
          mobBtn.classList.add('header_mobile_btn_active_dark');
          mobBtn.classList.remove('header_mobile_btn_active');
        }
      } else {
        btn.classList.remove('header_item_btn_active_dark');
        btn.classList.add('header_item_btn_active');
        if (mobBtn) {
          mobBtn.classList.add('header_mobile_btn_active');
          mobBtn.classList.remove('header_mobile_btn_active_dark');
        }
      }
    } else {
      btn.classList.remove('header_item_btn_active_dark');
      btn.classList.remove('header_item_btn_active');
      if (mobBtn) {
        mobBtn.classList.remove('header_mobile_btn_active_dark');
        mobBtn.classList.remove('header_mobile_btn_active');
      }
    }
  }

  private changeTheme(
    theme: boolean,
    mobileBtn: HTMLButtonElement,
    burgerItem: HTMLElement,
    burgerItem1: HTMLElement
  ): void {
    if (theme) {
      mobileBtn.classList.add('header_item_btn_dark');
      burgerItem.classList.add('header_burger_item_dark');
      burgerItem1.classList.add('header_burger_item_dark');
    } else {
      mobileBtn.classList.remove('header_item_btn_dark');
      burgerItem.classList.remove('header_burger_item_dark');
      burgerItem1.classList.remove('header_burger_item_dark');
    }

    this.navItemsHtmlElements.forEach((el) => {
      if (theme) {
        el.classList.add('header_item_btn_dark');
      } else {
        el.classList.remove('header_item_btn_dark');
      }
    });
  }

  private changeStateStopBtn(mobileBtn: HTMLButtonElement, flag: boolean): void {
    if (flag) {
      this.navItemsHtmlElements[1].disabled = true;
      mobileBtn.disabled = true;
    } else {
      this.navItemsHtmlElements[1].disabled = false;
      mobileBtn.disabled = false;
    }
  }

  private showSettings(): void {
    state.createPopup();
    state.openSettings();
  }

  private showResultPopup(): void {
    state.createPopup();
    state.showResultPopup();
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

  private changeStateButtons(flag: boolean): void {
    this.navItemsHtmlElements.forEach((el, i) => {
      // skip stop btn
      if (i !== 1) {
        flag ? (el.disabled = true) : (el.disabled = false);
      }
    });
  }

  private changeLanguage(mobileBtn: HTMLButtonElement): void {
    const lang = state.getLanguage();

    if (lang) {
      this.navItems.forEach((el, i) => {
        this.navItemsHtmlElements[i].textContent = el;
        mobileBtn.textContent = 'stop';
      });
    } else {
      this.navItemsHtmlElements[0].textContent = 'рестарт';
      this.navItemsHtmlElements[1].textContent = 'стоп';
      this.navItemsHtmlElements[2].textContent = 'результаты';
      this.navItemsHtmlElements[3].textContent = 'настройки';
      mobileBtn.textContent = 'стоп';
    }
  }
}
