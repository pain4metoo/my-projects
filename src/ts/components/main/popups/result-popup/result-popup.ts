import Control from '../../../../common/control';
import './result-popup.scss';
import { Result, lStorage } from '../../../../common/local-storage';
import { state } from '../../../../common/state';

export class ResultPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_result');

    const resultTitle = new Control(this.node, 'h2', 'popups_result_title', 'Your Highest Scores');
    const resultsList = new Control(this.node, 'ul', 'popups_result_list');

    const localStorageResult = (lStorage.get('results') as Array<Result>) || [];

    localStorageResult.forEach((el: Result, i) => {
      const resultWrapper = new Control(resultsList.node, 'ul', 'popups_result_wrapper');
      const resultCount = new Control(resultWrapper.node, 'li', 'popups_result_count', `${i + 1}.`);

      for (const key in el) {
        switch (key) {
          case 'frameSize':
            new Control(resultWrapper.node, 'li', 'popups_result_item', `Frame size: ${el[key]}`);
            break;
          case 'moves':
            new Control(resultWrapper.node, 'li', 'popups_result_item', `Moves: ${el[key]}`);
            break;
          case 'time':
            new Control(resultWrapper.node, 'li', 'popups_result_item', `Time: ${el[key]}`);
            break;
        }
      }
      const deleteResult = new Control(resultWrapper.node, 'span', 'popups_result_delete');
      deleteResult.node.onclick = (): void => this.deleteResult(i);
    });
  }

  private deleteResult(targetIndex: number): void {
    state.deleteTargetFromStorage(targetIndex);
  }
}
