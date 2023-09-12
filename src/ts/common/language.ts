const TRANSLATE = {
  restart: 'рестарт',
  stop: 'стоп',
  results: 'результаты',
  settings: 'настройки',
  Moves: 'Шаги',
  Time: 'Время',
  collect: 'собрать',
  delete_All_Results: 'удалить все результаты',
  Frame_size: 'Размер поля',
  Your_Highest_Scores: 'Лучшие результаты',
  Theme: 'Тема',
  Animation: 'Анимация',
  Language: 'Язык',
  Sound: 'Звук',
  reset: 'сбросить',
  Settings: 'Настройки',
  Light: 'Светлая',
  Dark: 'Тёмная',
  On: 'Вкл',
  Off: 'Выкл'
};

export function correctTranslater(word: string | null, lang: boolean): string {
  // lang true = EN
  // lang false = RU
  const wordsRU: Array<string> = [
    'рестарт',
    'стоп',
    'результаты',
    'настройки',
    'Шаги',
    'Время',
    'собрать',
    'удалить все результаты',
    'Размер поля',
    'Лучшие результаты',
    'Тема',
    'Анимация',
    'Язык',
    'Звук',
    'сбросить',
    'Настройки',
    'Светлая',
    'Тёмная',
    'Вкл',
    'Выкл'
  ];
  const wordsEN: Array<string> = [
    'restart',
    'stop',
    'results',
    'settings',
    'Moves',
    'Time',
    'collect',
    'delete all results',
    'Frame size',
    'Your Highest Scores',
    'Theme',
    'Animation',
    'Language',
    'Sound',
    'reset',
    'Settings',
    'Light',
    'Dark',
    'On',
    'Off'
  ];
  if (lang && word) {
    return wordsEN[wordsRU.indexOf(word)];
  } else {
    if (word) {
      return wordsRU[wordsEN.indexOf(word)];
    }
  }

  return 'none';
}
