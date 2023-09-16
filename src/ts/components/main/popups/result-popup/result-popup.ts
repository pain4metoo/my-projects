/* eslint-disable no-case-declarations */
import Control from '../../../../common/control';
import './result-popup.scss';
import { Result, lStorage } from '../../../../common/local-storage';
import { state } from '../../../../common/state';
import { SoundTypes } from '../../game/soundControl';
import { soundControl } from '../../../../../index';
import { StateOptions } from '../../../../common/state-types';
import { TList, correctTranslater } from '../../../../common/language';

export class ResultPopup extends Control {
  private resultPopupListener: (type: StateOptions) => void;
  private ResultHtmlElements: Array<HTMLElement> = [];

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_result');

    const resultTitle = new Control(this.node, 'h2', 'popups_result_title');
    const resultsList = new Control(this.node, 'ul', 'popups_result_list');
    this.ResultHtmlElements.push(resultTitle.node);

    const localStorageResult = (lStorage.get('results') as Array<Result>) || [];

    this.getResults(localStorageResult, resultsList);

    this.resultPopupListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeLanguage:
          this.switchLang(state.getLanguage());
          break;
        case StateOptions.closePopup:
          state.onUpdate.remove(this.resultPopupListener);
          break;
      }
    };

    this.switchLang(state.getLanguage());
    state.onUpdate.add(this.resultPopupListener);
  }

  private getResults(localStorage: Array<Result>, list: Control<HTMLElement>): void {
    localStorage.forEach((el: Result, i) => {
      const resultWrapper = new Control(list.node, 'ul', 'popups_result_wrapper');
      const resultCount = new Control(resultWrapper.node, 'li', 'popups_result_count', `${i + 1}.`);

      for (const key in el) {
        const lang = state.getLanguage();
        switch (key) {
          case 'frameSize':
            new Control(
              resultWrapper.node,
              'li',
              'popups_result_item',
              `${lang ? `Frame-size: ${el[key]}` : `Размер поля: ${el[key]}`}`
            );

            break;
          case 'moves':
            new Control(
              resultWrapper.node,
              'li',
              'popups_result_item',
              `${lang ? `Moves: ${el[key]}` : `Ходы: ${el[key]}`}`
            );
            break;
          case 'time':
            new Control(
              resultWrapper.node,
              'li',
              'popups_result_item',
              `${lang ? `Time: ${el[key]}` : `Время: ${el[key]}`}`
            );
            break;
        }
      }
      const deleteResult = new Control(resultWrapper.node, 'span', 'popups_result_delete');

      deleteResult.node.onclick = (): void => this.deleteResult(i);
    });
  }

  private switchLang(currentLang: boolean): void {
    this.ResultHtmlElements.forEach((el, i) => {
      el.textContent = `${correctTranslater(currentLang, TList.results)[i]}`;
    });
  }

  private deleteResult(targetIndex: number): void {
    soundControl.playSound(SoundTypes.delete);
    state.deleteTargetFromStorage(targetIndex);
  }
}
