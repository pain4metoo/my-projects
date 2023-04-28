import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import './header.scss';

enum NavItem {
  Restart = 'Restart',
  Stop = 'Stop',
  Start = 'Start',
  Save = 'Save',
  Results = 'Results'
}

export class Header extends Control {
  private navItems: Array<string> = ['Restart', 'Stop', 'Save', 'Results'];
  private navItemsHtmlElements: Array<HTMLLinkElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header');
    const nav = new Control(this.node, 'nav', 'header_nav');
    const navList = new Control(nav.node, 'ul', 'header_list');

    this.navItems.forEach((navLink: string) => {
      const navItem = new Control(navList.node, 'li', 'header_list_item');
      const navItemLink: Control<HTMLLinkElement> = new Control(navItem.node, 'a', 'header_item_link', navLink);
      this.navItemsHtmlElements.push(navItemLink.node);
      navItemLink.node.href = '#';

      switch (navLink) {
        case NavItem.Restart:
          navItem.node.onclick = (): void => state.setNewGame();
          break;
        case NavItem.Stop:
          navItem.node.onclick = (): void => state.setStopGame();

          break;
      }
    });
  }
}
