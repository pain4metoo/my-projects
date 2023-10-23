import Control from '../common/control';
import { state } from '../common/state';
import { StateOptions } from '../common/state-types';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import mainBG from '../../assets/image/main-bg-light.jpg';
import mainBgDark from '../../assets/image/main-bg-dark.jpg';
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
        case StateOptions.changeTheme:
          this.createBG(parentNode);
          break;
      }
    };

    state.onUpdate.add(this.appListener);
  }
  // body {
  //   background-image: url('../assets/image/main-bg-light-preload.jpg');
  // }

  // .body_original {
  //   background-image: url('../assets/image/main-bg-light.jpg');
  // }

  private createBG(body: HTMLElement): void {
    const img: HTMLImageElement = new Image();

    if (state.getTheme()) {
      body.style.backgroundImage = `url('../assets/image/main-bg-dark-preload.jpg')`;
      img.src = mainBgDark;
    } else {
      body.style.backgroundImage = `url('../assets/image/main-bg-light-preload.jpg')`;
      img.src = mainBG;
    }

    img.onload = async (): Promise<void> => {
      if (state.getTheme()) {
        body.classList.add('body_original_dark');
        body.classList.remove('body_original_light');
      } else {
        body.classList.add('body_original_light');
        body.classList.remove('body_original_dark');
      }
    };
  }

  private changeFontFamily(isEn: boolean, parentNode: HTMLElement): void {
    isEn
      ? (parentNode.style.fontFamily = `'Thasadith', sans-serif`)
      : (parentNode.style.fontFamily = `'Inter', sans-serif`);
  }
}
