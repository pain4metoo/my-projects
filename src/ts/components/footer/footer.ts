import Control from '../../common/control';
import { state } from '../../common/state';
import { StateOptions } from '../../common/state-types';
import './footer.scss';

export class Footer extends Control {
  private footerListener: (type: StateOptions) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'footer', 'footer');
    const year = new Control(this.node, 'p', 'footer_year', '2023');
    const github: Control<HTMLLinkElement> = new Control(this.node, 'a', 'footer_link', 'pain4metoo');
    github.node.href = 'https://github.com/pain4metoo';
    github.node.target = 'blank';

    this.changeTheme(state.getTheme(), year.node, github.node);

    this.footerListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeTheme:
          this.changeTheme(state.getTheme(), year.node, github.node);
          break;
      }
    };

    state.onUpdate.add(this.footerListener);
  }

  private changeTheme(theme: boolean, year: HTMLElement, github: HTMLLinkElement): void {
    if (theme) {
      year.classList.add('footer_year_dark');
      github.classList.add('footer_link_dark');
    } else {
      year.classList.remove('footer_year_dark');
      github.classList.remove('footer_link_dark');
    }
  }
}
