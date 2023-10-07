import { ISwitcher } from '../components/main/popups/settings-popup/swither/switcher';

interface TKey {
  [key: string]: Tvalue;
}

interface Tvalue {
  [key: string]: string | ISwitcher;
}

export enum TList {
  header = 'header',
  moves = 'moves',
  time = 'time',
  collect = 'collect',
  results = 'results',
  settings = 'settings',
}

export const TRANSLATE: TKey = {
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
    themeRU: {
      title: 'Тема',
      values: ['Светлая', 'Тёмная'],
    },
    themeEN: {
      title: 'Theme',
      values: ['Light', 'Dark'],
    },
    animRU: {
      title: 'Анимация',
      values: ['Вкл', 'Выкл'],
    },
    animEN: {
      title: 'Animation',
      values: ['On', 'Off'],
    },
    langRU: {
      title: 'Язык',
      values: ['EN', 'Русский'],
    },
    langEN: {
      title: 'Language',
      values: ['EN', 'Русский'],
    },
    soundRU: {
      title: 'Звук',
      values: ['Вкл', 'Выкл'],
    },
    soundEN: {
      title: 'Sound',
      values: ['On', 'Off'],
    },
    modeRU: {
      title: 'Сложность',
      values: ['Легко', 'Экстрим'],
    },
    modeEN: {
      title: 'Mode',
      values: ['Common', 'Extreme'],
    },
  },
};

// const theme = new Switcher(leftInner.node, { title: SwitcherTitles.Theme, values: ['Light', 'Dark'] });
// const animation = new Switcher(leftInner.node, { title: SwitcherTitles.Animation, values: ['On', 'Off'] });
// const language = new Switcher(leftInner.node, { title: SwitcherTitles.Language, values: ['EN', 'RU'] });

// const sound = new Switcher(rightInner.node, { title: SwitcherTitles.Sound, values: ['On', 'Off'] });

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
