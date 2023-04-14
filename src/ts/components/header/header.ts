import Control from '../../common/control';

export class Header extends Control {
  private navItems: Array<string> = ['Shuffle and start', 'Stop', 'Save', 'Results'];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header');
    const nav = new Control(this.node, 'nav', 'header_nav');
    const navList = new Control(nav.node, 'ul', 'header_list');

    this.navItems.forEach((el: string) => {
      const navItem = new Control(navList.node, 'li', 'header_list_item', el);
    });
  }
}
