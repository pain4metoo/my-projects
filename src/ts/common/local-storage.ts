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

  public deleteFromLocalStorage(targetIndex?: number): void {
    if (targetIndex === 0 || targetIndex) {
      this.results.splice(targetIndex, 1);
    } else {
      this.results.splice(0);
    }
    localStorage.setItem('results', JSON.stringify(this.results));
  }

  private sortValue(results: Array<Result>): Array<Result> {
    return results.sort((a, b) => {
      if (a.frameSize !== b.frameSize) {
        return b.frameSize - a.frameSize;
      } else {
        // If frameSize are equal, then look at moves
        if (a.moves !== b.moves) {
          return a.moves - b.moves;
        } else {
          // If moves are equal then look at time and repeat for hours minutes and seconds
          const splitTimeFirst = a.time.split(':').map((item: string) => +item);
          const splitTimeSecond = b.time.split(':').map((item: string) => +item);

          if (splitTimeFirst[0] !== splitTimeSecond[0]) {
            return splitTimeFirst[0] - splitTimeSecond[0];
          } else {
            if (splitTimeFirst[1] !== splitTimeSecond[1]) {
              return splitTimeFirst[1] - splitTimeSecond[1];
            }

            return splitTimeFirst[2] - splitTimeSecond[2];
          }
        }
      }
    });
  }
}

export const localStorageControl = new LocalStorageControl();
