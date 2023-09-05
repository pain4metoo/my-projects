import { AppSettings } from './state-types';

export interface Result {
  frameSize: number;
  moves: number;
  time: string;
}

class LocalStorage {
  public put(key: string, value: Array<Result> | AppSettings): void {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }

  public get(key: string): Array<Result> | AppSettings | null {
    const findKey = localStorage.getItem(`${key}`);

    if (findKey !== null) {
      return JSON.parse(findKey);
    }

    return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export const lStorage = new LocalStorage();
