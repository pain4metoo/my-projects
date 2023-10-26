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
  private tableElements: Array<HTMLElement> = [];

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_result');

    const localStorageResult = (lStorage.get('results') as Array<Result>) || [];

    this.createTable(localStorageResult);

    this.changeTheme(state.getTheme(), this.tableElements);

    this.resultPopupListener = (type: StateOptions): void => {
      switch (type) {
        case StateOptions.changeLanguage:
          this.switchLang(state.getLanguage());

          break;

        case StateOptions.closePopup:
          state.onUpdate.remove(this.resultPopupListener);

          break;

        case StateOptions.changeTheme:
          this.changeTheme(state.getTheme(), this.tableElements);

          break;
      }
    };

    this.switchLang(state.getLanguage());

    state.onUpdate.add(this.resultPopupListener);
  }

  private changeTheme(theme: boolean, elements: Array<HTMLElement>): void {
    elements.forEach((el) => {
      if (theme) {
        el.classList.add('popups_result_dark_theme');
      } else {
        el.classList.remove('popups_result_dark_theme');
      }
    });
  }

  private createTable(localStorage: Array<Result>): void {
    const table: Control<HTMLTableElement> = new Control(this.node, 'table', 'popups_result_table');

    const tHead = new Control(table.node, 'thead', 'popups_result_thead');
    this.tableElements.push(tHead.node);

    const tBody = new Control(table.node, 'tbody', 'popups_result_tbody');
    const tableTitleInner = new Control(tHead.node, 'tr', 'popups_result_title');

    const tabletitle: Control<HTMLTableCellElement> = new Control(tableTitleInner.node, 'th', 'popups_result_title');
    tabletitle.node.colSpan = 4;

    this.tableElements.push(tabletitle.node);
    this.ResultHtmlElements.push(tabletitle.node);

    const lang = state.getLanguage();

    const tableInner = new Control(tBody.node, 'tr', 'popups_result_tr');
    this.tableElements.push(tableInner.node);

    new Control(tableInner.node, 'td', 'popups_result_td', `${lang ? 'Place' : 'Место'}`);
    new Control(tableInner.node, 'td', 'popups_result_td', `${lang ? 'Frame-size' : 'Размер поля'}`);
    new Control(tableInner.node, 'td', 'popups_result_td', `${lang ? 'Moves' : 'Ходы'}`);
    new Control(tableInner.node, 'td', 'popups_result_td', `${lang ? 'Time' : 'Время'}`);

    if (localStorage.length > 0) {
      localStorage.forEach((el: Result, i) => {
        const tableInner = new Control(tBody.node, 'tr', 'popups_result_tr');

        this.tableElements.push(tableInner.node);

        new Control(tableInner.node, 'td', 'popups_result_td', `${i + 1}`);
        new Control(tableInner.node, 'td', 'popups_result_td', `${el.frameSize}`);
        new Control(tableInner.node, 'td', 'popups_result_td', `${el.moves}`);
        new Control(tableInner.node, 'td', 'popups_result_td', `${el.time}`);

        const deleteResult = new Control(tableInner.node, 'td', 'popups_result_delete');

        deleteResult.node.onclick = (): void => this.deleteResult(i);
      });
    } else {
      const emptyText = new Control(
        this.node,
        'th',
        'popups_result_empty',
        `${lang ? `It's empty here for now` : 'Пока здесь пусто'}`
      );

      this.tableElements.push(emptyText.node);
    }
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
