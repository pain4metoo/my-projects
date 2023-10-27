import Control from '../common/control';
import { state } from '../common/state';
import { StateOptions } from '../common/state-types';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import mainBG from '../../assets/image/main-bg-light.jpg';
import mainBGPreload from '../../assets/image/main-bg-light-preload.jpg';
import mainBgDark from '../../assets/image/main-bg-dark.jpg';
import mainBGDarkPreload from '../../assets/image/main-bg-dark-preload.jpg';
import fireworkIMG from '../../assets/image/firework.gif';
import fireworkIMGDark from '../../assets/image/firework-dark.gif';

export enum EventCode {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowUp = 'ArrowUp',
  ArrowRight = 'ArrowRight',
}

export class App extends Control {
  private appListener: (type: StateOptions) => void;
  private fireWork!: Control<HTMLImageElement>;
  private bgIMG: HTMLImageElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'wrapper');

    this.bgIMG = new Image();

    this.createBG(parentNode);

    new Header(this.node);
    const main = new Main(this.node);
    new Footer(this.node);

    this.changeFontFamily(state.getLanguage(), parentNode);

    this.keysControl(parentNode);

    this.appListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeLanguage:
          this.changeFontFamily(state.getLanguage(), parentNode);

          break;

        case StateOptions.winGame:
          if (state.getAnimation()) {
            this.fireWork = new Control(main.node, 'img', 'firework');

            if (state.getTheme()) {
              this.fireWork.node.src = fireworkIMGDark;
            } else {
              this.fireWork.node.src = fireworkIMG;
            }
          }

          break;

        case StateOptions.closePopup:
          if (this.fireWork) {
            this.fireWork.destroy();
          }

          this.keysControl(parentNode);

          break;

        case StateOptions.changeTheme:
          this.createBG(parentNode);

          break;

        case StateOptions.createPopup:
          this.keysControl(parentNode);

          break;
      }
    };

    state.onUpdate.add(this.appListener);
  }

  private keysControl(node: HTMLElement): void {
    if (state.getPopupState()) {
      node.onkeydown = (): boolean => false;
    } else {
      node.onkeydown = (event): boolean | void => {
        switch (event.code) {
          case EventCode.ArrowDown:
            event.preventDefault();

            state.setEventKeyDown(EventCode.ArrowDown);

            break;

          case EventCode.ArrowLeft:
            event.preventDefault();

            state.setEventKeyDown(EventCode.ArrowLeft);

            break;

          case EventCode.ArrowUp:
            event.preventDefault();

            state.setEventKeyDown(EventCode.ArrowUp);

            break;

          case EventCode.ArrowRight:
            event.preventDefault();

            state.setEventKeyDown(EventCode.ArrowRight);

            break;
        }
      };
    }
  }

  private createBG(body: HTMLElement): void {
    if (state.getTheme()) {
      body.style.backgroundImage = `url(${mainBGDarkPreload})`;
      this.bgIMG.src = mainBgDark;
      this.bgIMG.onload = async (): Promise<void> => {
        body.style.backgroundImage = `url(${this.bgIMG.src})`;
      };
    } else {
      body.style.backgroundImage = `url(${mainBGPreload})`;
      this.bgIMG.src = mainBG;
      this.bgIMG.onload = async (): Promise<void> => {
        body.style.backgroundImage = `url(${this.bgIMG.src})`;
      };
    }
  }

  private changeFontFamily(isEn: boolean, parentNode: HTMLElement): void {
    isEn
      ? (parentNode.style.fontFamily = `'Thasadith', sans-serif`)
      : (parentNode.style.fontFamily = `'Inter', sans-serif`);
  }
}
