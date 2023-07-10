import { state } from './state';

export interface Result {
  frameSize: number;
  moves: number;
  time: string;
}

class LocalStorageControl {
  public results: Array<Result> = this.get() || [];

  public put(result: Result): void {
    const maxItemsInLocal = 10;

    if (this.results.includes(result)) {
      return;
    } else {
      this.results.push(result);
    }

    const arrayAfterSort: Array<Result> = this.sortValue(this.results);
    arrayAfterSort.length > maxItemsInLocal ? arrayAfterSort.splice(arrayAfterSort.length - 1, 1) : null;

    localStorage.setItem('results', JSON.stringify(arrayAfterSort));
  }

  public get(): Array<Result> {
    const resultsItems = localStorage.getItem('results');

    if (resultsItems !== null) {
      return JSON.parse(resultsItems);
    }

    return [];
  }

  private sortValue(results: Array<Result>): Array<Result> {
    return results.sort((a, b) => {
      // If the frame size are equal
      if (a.frameSize === b.frameSize && a.moves < b.moves) {
        return -1;
      } else {
        if (a.frameSize === b.frameSize && a.moves === b.moves) {
          const splitTimeFirst = a.time.split(':').map((item: string) => +item);
          const splitTimeSecond = b.time.split(':').map((item: string) => +item);
          // If the hours are equal
          if (splitTimeFirst[0] === splitTimeSecond[0] && splitTimeFirst[1] < splitTimeSecond[1]) {
            return -1;
          } else {
            // If the hours and minutes are equal
            if (
              splitTimeFirst[0] === splitTimeSecond[0] &&
              splitTimeFirst[1] === splitTimeSecond[1] &&
              splitTimeFirst[2] < splitTimeSecond[2]
            ) {
              return -1;
            }
          }

          // default sort for time;
          return splitTimeFirst[0] - splitTimeSecond[0];
        }
      }
      // default sort for frame size;
      return b.frameSize - a.frameSize;
    });
  }
}

export const localStorageControl = new LocalStorageControl();
