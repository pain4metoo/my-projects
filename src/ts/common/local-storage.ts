import { AppSettings } from './state-types';

export interface Result {
  frameSize: number;
  moves: number;
  time: string;
}

class LocalStorage {
  public put(key: string, value: Array<Result> | AppSettings): void {
    localStorage.setItem(`gem${key}`, JSON.stringify(value));
  }

  public get(key: string): Array<Result> | AppSettings | null {
    const findKey = localStorage.getItem(`gem${key}`);

    if (findKey !== null) {
      return JSON.parse(findKey);
    }

    return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(`gem${key}`);
  }
}

export const lStorage = new LocalStorage();
