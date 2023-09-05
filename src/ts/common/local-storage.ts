import { state } from './state';

export interface Result {
  frameSize: number;
  moves: number;
  time: string;
}

class LocalStorage {
  public put(key: string, value: Array<Result>): void {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }

  public get(key: string): Array<Result> {
    const findKey = localStorage.getItem(`${key}`);

    if (findKey !== null) {
      return JSON.parse(findKey);
    }

    return [];
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export const lStorage = new LocalStorage();
