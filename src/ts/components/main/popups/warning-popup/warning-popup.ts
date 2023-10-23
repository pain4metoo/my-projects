import Control from '../../../../common/control';
import { state } from '../../../../common/state';
import './warning-popup.scss';
import { SoundTypes } from '../../game/soundControl';
import { soundControl } from '../../../../../index';

export class WarningPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'warning');

    const popupInner = new Control(this.node, 'div', 'warning_inner');
    new Control(popupInner.node, 'p', 'warning_text', state.getLanguage() ? 'Are you sure?' : 'Вы уверены?');

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
