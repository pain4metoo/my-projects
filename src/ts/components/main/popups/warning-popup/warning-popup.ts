import Control from '../../../../common/control';
import { state } from '../../../../common/state';
import './warning-popup.scss';
import closeSVG from '../../../../../assets/svg/close-btn.svg';
import { SoundTypes } from '../../game/soundControl';
import { soundControl } from '../../../../../index';

export class WarningPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'warning');

    const popupInner = new Control(this.node, 'div', 'warning_inner');
    const popupText = new Control(
      popupInner.node,
      'p',
      'warning_text',
      state.getLanguage() ? 'Are you sure?' : 'Вы уверены?'
    );
    const popupClose: Control<HTMLImageElement> = new Control(popupInner.node, 'img', 'warning_close');
    popupClose.node.alt = 'close popup';
    popupClose.node.src = closeSVG;
    popupClose.node.onclick = (): void => this.onClosePopup();

    const popupBtnContainer = new Control(popupInner.node, 'div', 'warning_btns');
    const btnTrue = new Control(popupBtnContainer.node, 'button', 'warning_btn', state.getLanguage() ? 'Yes' : 'Да');
    btnTrue.node.onclick = (): void => this.onTrue();
    const btnFalse = new Control(popupBtnContainer.node, 'button', 'warning_btn', state.getLanguage() ? 'No' : 'Нет');
    btnFalse.node.onclick = (): void => this.onClosePopup();
  }

  private onTrue(): void {
    soundControl.playSound(SoundTypes.btn);
    state.onClickWarning();
  }
  private onClosePopup(): void {
    soundControl.playSound(SoundTypes.btn);
    state.closeWarningPopup();
  }
}
