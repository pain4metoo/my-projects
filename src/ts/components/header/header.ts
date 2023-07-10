import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import './header.scss';

enum NavItem {
  Restart = 'Restart',
  Stop = 'Stop',
  Start = 'Start',
  Results = 'Results'
}

export class Header extends Control {
  private headerListener: (type: StateOptions) => void;
  private navItems: Array<string> = ['Restart', 'Stop', 'Results'];
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
          navItem.node.onclick = (): void => state.setNewGame();
          break;
        case NavItem.Stop:
          navItem.node.onclick = (): void => state.setStopGame();
          break;
        case NavItem.Results:
          navItem.node.onclick = (): void => this.showResultPopup();
          break;
      }
    });

    this.navItemsHtmlElements[1].disabled = true;

    state.onUpdate.add(this.headerListener);
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
