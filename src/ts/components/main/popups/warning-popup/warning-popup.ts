import Control from '../../../../common/control';
import { state } from '../../../../common/state';
import './warning-popup.scss';
import { SoundTypes } from '../../game/soundControl';
import { soundControl } from '../../../../../index';
import { StateOptions } from '../../../../common/state-types';

// border border-color: #132935
// text color: #A1D0E7;
// btn background: color: #A1D0E7;
// warning bg background: rgba(3, 5, 6, 0.50);

export class WarningPopup extends Control {
  private warningListener: (type: StateOptions) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'warning');

    const popupInner = new Control(this.node, 'div', 'warning_inner');
    const popupText = new Control(
      popupInner.node,
      'p',
      'warning_text',
      state.getLanguage() ? 'Are you sure?' : 'Вы уверены?'
    );

    const popupBtnContainer = new Control(popupInner.node, 'div', 'warning_btns');

    const btnTrue = new Control(popupBtnContainer.node, 'button', 'warning_btn', state.getLanguage() ? 'Yes' : 'Да');
    btnTrue.node.onclick = (): void => this.onTrue();

    const btnFalse = new Control(popupBtnContainer.node, 'button', 'warning_btn', state.getLanguage() ? 'No' : 'Нет');
    btnFalse.node.onclick = (): void => this.onClosePopup();

    this.changeTheme(state.getTheme(), popupInner.node, popupText.node, btnTrue.node, btnFalse.node);

    this.warningListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeTheme:
          this.changeTheme(state.getTheme(), popupInner.node, popupText.node, btnTrue.node, btnFalse.node);

          break;

        case StateOptions.closeWarningPopup:
          state.onUpdate.remove(this.warningListener);

          break;
      }
    };

    state.onUpdate.add(this.warningListener);
  }

  private changeTheme(theme: boolean, el1: HTMLElement, el2: HTMLElement, el3: HTMLElement, el4: HTMLElement): void {
    if (theme) {
      el1.classList.add('warning_inner_dark');
      el2.classList.add('warning_text_dark');
      el3.classList.add('warning_btn_dark');
      el4.classList.add('warning_btn_dark');
    } else {
      el1.classList.remove('warning_inner_dark');
      el2.classList.remove('warning_text_dark');
      el3.classList.remove('warning_btn_dark');
      el4.classList.remove('warning_btn_dark');
    }
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
