export interface Translate {
  [key: string]: TranslateProperty;
}
interface TranslateProperty {
  [key: string]: string | TranslateLang;
}

export interface TranslateLang {
  ru: TranslateSettings;
  en: TranslateSettings;
}

interface TranslateSettings {
  title: string;
  values: Array<string>;
}

export enum TList {
  header = 'header',
  moves = 'moves',
  time = 'time',
  collect = 'collect',
  results = 'results',
  settings = 'settings',
}

export const TRANSLATE: Translate = {
  header: {
    restart: 'рестарт',
    stop: 'стоп',
    results: 'результаты',
    settings: 'настройки',
  },
  moves: {
    Moves: 'Шаги',
  },
  time: {
    Time: 'Время',
  },
  collect: {
    collect_puzzle: 'собрать пятнашки',
  },
  results: {
    Your_Highest_Scores: 'Лучшие результаты',
  },
  settings: {
    theme: {
      ru: {
        title: 'Тема',
        values: ['Светлая', 'Тёмная'],
      },
      en: {
        title: 'Theme',
        values: ['Light', 'Dark'],
      },
    },
    animation: {
      ru: {
        title: 'Анимация',
        values: ['Вкл', 'Выкл'],
      },
      en: {
        title: 'Animation',
        values: ['On', 'Off'],
      },
    },
    language: {
      ru: {
        title: 'Язык',
        values: ['EN', 'Русский'],
      },
      en: {
        title: 'Language',
        values: ['EN', 'Русский'],
      },
    },
    sound: {
      ru: {
        title: 'Звук',
        values: ['Вкл', 'Выкл'],
      },
      en: {
        title: 'Sound',
        values: ['On', 'Off'],
      },
    },
    mode: {
      ru: {
        title: 'Сложность',
        values: ['Легко', 'Экстрим'],
      },
      en: {
        title: 'Mode',
        values: ['Default', 'Extreme'],
      },
    },
  },
};

export function correctTranslater(lang: boolean, key: TList): Array<string> {
  const result: Array<string> = [];

  if (lang) {
    result.push(...Object.keys(TRANSLATE[key]));
    return removeUnderscore(result);
  } else {
    result.push(...(Object.values(TRANSLATE[key]) as Array<string>));
  }

  // We have to remove the underscore and put one space in front of it
  function removeUnderscore(arr: Array<string>): Array<string> {
    if (!arr.join('').includes('_')) {
      return arr;
    } else {
      return arr.map((el: string) => {
        return el
          .split('')
          .map((el, i, arrMap) => {
            if (arrMap[i + 1] === '_') {
              return (el = el + ' ');
            }
            return el;
          })
          .filter((el: string) => {
            return el !== '_';
          })
          .join('');
      });
    }
  }

  return result;
}
