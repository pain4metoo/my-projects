import Control from '../../../../common/control';
import './result-popup.scss';
import { Result, localStorageControl } from '../../../../common/local-storage';

export class ResultPopup extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'popups_result');
    const localStorageData = localStorageControl.get();

    const resultTitle = new Control(this.node, 'h2', 'popups_result_title', 'Your Highest Scores');

    const resultsList = new Control(this.node, 'ul', 'popups_result_list');

    localStorageData.forEach((el: Result, i) => {
      const resultWrapper = new Control(resultsList.node, 'ul', 'popups_result_wrapper', `${i + 1}.`);

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
    });
  }
}
