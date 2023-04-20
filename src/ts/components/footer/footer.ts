import Control from '../../common/control';
import './footer.scss';

export class Footer extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'footer', 'footer');
    const year = new Control(this.node, 'p', 'footer_year', '2023');
    const github: Control<HTMLLinkElement> = new Control(this.node, 'a', 'footer_link', 'pain4metoo');
    github.node.href = 'https://github.com/pain4metoo';
    github.node.target = 'blank';
  }
}
