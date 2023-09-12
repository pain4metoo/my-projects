import './style/style.scss';
import { state } from './ts/common/state';
import { App } from './ts/components/app';
import { SoundControl } from './ts/components/main/game/soundControl';

const init = (): void => {
  state.initLocalStorage();
  new App(document.body);
};

init();

export const soundControl = new SoundControl();
