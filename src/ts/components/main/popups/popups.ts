import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import { CollectPopup } from './collect-popup/collect-popup';
import { FinishPopup } from './finish-popup/finish-popup';
import { ResultPopup } from './result-popup/result-popup';
import './popups.scss';
import { SettingsPopup } from './settings-popup/settings-popup';
import { Result, lStorage } from '../../../common/local-storage';
import { SoundTypes } from '../game/soundControl';
import { soundControl } from '../../../../index';

export class Popups extends Control {
  private popupsListener: (type: StateOptions) => void;
  private popupCollect!: CollectPopup;
  private popupFinish!: FinishPopup;
  private popupResult!: ResultPopup;
  private popupSettings!: SettingsPopup;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups');

    const popupsInner = new Control(this.node, 'div', 'popups_inner');
    const closeBtn = new Control(popupsInner.node, 'button', 'popups_close_btn');

    const newGameBtn: Control<HTMLButtonElement> = new Control(
      popupsInner.node,
      'button',
      'popups_new_btn',
      state.getLanguage() ? 'restart' : 'новая игра'
    );
    newGameBtn.node.onclick = (): void => this.onNewGameBtn();

    closeBtn.node.onclick = (): void => this.onDeletePopup();

    this.popupsListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.showCollectPopup:
          this.popupCollect = new CollectPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;
        case StateOptions.showResultPopup:
          this.popupResult = new ResultPopup(popupsInner.node);
          newGameBtn.node.textContent = state.getLanguage() ? 'delete all results' : 'очистить результаты';
          newGameBtn.node.onclick = (): void => this.showWarning(StateOptions.showResultPopup);
          (lStorage.get('results') as Array<Result>).length > 0
            ? (newGameBtn.node.disabled = false)
            : (newGameBtn.node.disabled = true);
          break;
        case StateOptions.deleteTargetFromStorage:
          (lStorage.get('results') as Array<Result>).length > 0
            ? (newGameBtn.node.disabled = false)
            : (newGameBtn.node.disabled = true);
          break;
        case StateOptions.showFinishPopup:
          this.popupFinish = new FinishPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;
        case StateOptions.showSettings:
          this.popupSettings = new SettingsPopup(popupsInner.node);
          newGameBtn.node.textContent = state.getLanguage() ? 'reset settings' : 'сбросить настройки';
          newGameBtn.node.onclick = (): void => this.showWarning(StateOptions.showSettings);
          break;
        case StateOptions.clearLocalStorage:
          this.popupResult.destroy();
          this.popupResult = new ResultPopup(popupsInner.node);
          break;
        case StateOptions.showNewResult:
          this.popupResult.destroy();
          this.popupResult = new ResultPopup(popupsInner.node);
          break;

        case StateOptions.warningResults:
          this.deleteResults();
          break;
        case StateOptions.warningSettings:
          this.resetSettings();
          break;
        case StateOptions.closePopup:
          state.onUpdate.remove(this.popupsListener);
          break;
        case StateOptions.changeLanguage:
          newGameBtn.node.textContent = state.getLanguage() ? 'reset settings' : 'сбросить настройки';
          this.popupSettings.destroy();
          this.popupSettings = new SettingsPopup(popupsInner.node);
          break;
      }
    };

    state.onUpdate.add(this.popupsListener);
  }

  private showWarning(type: string): void {
    soundControl.playSound(SoundTypes.btn);
    state.showWarningPopup(type);
  }

  private resetSettings(): void {
    state.resetSettings();
    lStorage.remove('settings');
  }

  private deleteResults(): void {
    state.clearResults();
  }

  private onNewGameBtn(): void {
    state.setNewGame();
    this.onDeletePopup();
    soundControl.playSound(SoundTypes.collect);
  }

  private onDeletePopup(): void {
    soundControl.playSound(SoundTypes.btn);
    state.closePopup();
  }
}
