import Control from '../common/control';
import { state } from '../common/state';
import { StateOptions } from '../common/state-types';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import mainBG from '../../assets/image/main-bg-light.jpg';
import fireworkIMG from '../../assets/image/firework.gif';

export class App extends Control {
  private appListener: (type: StateOptions) => void;
  private fireWork!: Control<HTMLImageElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');

    this.createBG(parentNode);

    new Header(this.node);
    const main = new Main(this.node);
    new Footer(this.node);

    this.changeFontFamily(state.getLanguage(), parentNode);

    this.appListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeLanguage:
          this.changeFontFamily(state.getLanguage(), parentNode);
          break;
        case StateOptions.winGame:
          if (state.getAnimation()) {
            this.fireWork = new Control(main.node, 'img', 'firework');
            this.fireWork.node.src = fireworkIMG;
          }
          break;
        case StateOptions.closePopup:
          if (this.fireWork) {
            this.fireWork.destroy();
          }
          break;
        case StateOptions.resetSettings:
          this.changeFontFamily(state.getLanguage(), parentNode);
          break;
      }
    };

    state.onUpdate.add(this.appListener);
  }

  private createBG(body: HTMLElement): void {
    const img: HTMLImageElement = new Image();
    img.src = mainBG;
    img.onload = async (): Promise<void> => {
      body.classList.add('body_original');
    };
  }

  private changeFontFamily(isEn: boolean, parentNode: HTMLElement): void {
    isEn
      ? (parentNode.style.fontFamily = `'Thasadith', sans-serif`)
      : (parentNode.style.fontFamily = `'Inter', sans-serif`);
  }
}
