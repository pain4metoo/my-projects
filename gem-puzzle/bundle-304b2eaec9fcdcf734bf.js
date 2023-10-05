/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "soundControl": () => (/* binding */ soundControl)
/* harmony export */ });
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _ts_common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _ts_components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/components/app */ "./src/ts/components/app.ts");
/* harmony import */ var _ts_components_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/components/main/game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _ts_common_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/common/language */ "./src/ts/common/language.ts");





const init = () => {
  _ts_common_state__WEBPACK_IMPORTED_MODULE_1__.state.initLocalStorage();
  new _ts_components_app__WEBPACK_IMPORTED_MODULE_2__.App(document.body);
};
init();
const soundControl = new _ts_components_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundControl();

/***/ }),

/***/ "./src/ts/common/control.ts":
/*!**********************************!*\
  !*** ./src/ts/common/control.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Control {
  constructor(parentNode, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = content;
    if (parentNode) {
      parentNode.append(el);
    }
    this.node = el;
  }
  destroy() {
    this.node.remove();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);

/***/ }),

/***/ "./src/ts/common/language.ts":
/*!***********************************!*\
  !*** ./src/ts/common/language.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TList": () => (/* binding */ TList),
/* harmony export */   "TRANSLATE": () => (/* binding */ TRANSLATE),
/* harmony export */   "correctTranslater": () => (/* binding */ correctTranslater)
/* harmony export */ });
var TList;
(function (TList) {
  TList["header"] = "header";
  TList["moves"] = "moves";
  TList["time"] = "time";
  TList["collect"] = "collect";
  TList["results"] = "results";
  TList["settings"] = "settings";
})(TList || (TList = {}));
const TRANSLATE = {
  header: {
    restart: 'рестарт',
    stop: 'стоп',
    results: 'результаты',
    settings: 'настройки'
  },
  moves: {
    Moves: 'Шаги'
  },
  time: {
    Time: 'Время'
  },
  collect: {
    collect_puzzle: 'собрать пятнашки'
  },
  results: {
    Your_Highest_Scores: 'Лучшие результаты'
  },
  settings: {
    themeRU: {
      title: 'Тема',
      values: ['Светлая', 'Тёмная']
    },
    themeEN: {
      title: 'Theme',
      values: ['Light', 'Dark']
    },
    animRU: {
      title: 'Анимация',
      values: ['Вкл', 'Выкл']
    },
    animEN: {
      title: 'Animation',
      values: ['On', 'Off']
    },
    langRU: {
      title: 'Язык',
      values: ['EN', 'Русский']
    },
    langEN: {
      title: 'Language',
      values: ['EN', 'Русский']
    },
    soundRU: {
      title: 'Звук',
      values: ['Вкл', 'Выкл']
    },
    soundEN: {
      title: 'Sound',
      values: ['On', 'Off']
    }
  }
};
// const theme = new Switcher(leftInner.node, { title: SwitcherTitles.Theme, values: ['Light', 'Dark'] });
// const animation = new Switcher(leftInner.node, { title: SwitcherTitles.Animation, values: ['On', 'Off'] });
// const language = new Switcher(leftInner.node, { title: SwitcherTitles.Language, values: ['EN', 'RU'] });
// const sound = new Switcher(rightInner.node, { title: SwitcherTitles.Sound, values: ['On', 'Off'] });
function correctTranslater(lang, key) {
  const result = [];
  if (lang) {
    result.push(...Object.keys(TRANSLATE[key]));
    return removeUnderscore(result);
  } else {
    result.push(...Object.values(TRANSLATE[key]));
  }
  // We have to remove the underscore and put one space in front of it
  function removeUnderscore(arr) {
    if (!arr.join('').includes('_')) {
      return arr;
    } else {
      return arr.map(el => {
        return el.split('').map((el, i, arrMap) => {
          if (arrMap[i + 1] === '_') {
            return el = el + ' ';
          }
          return el;
        }).filter(el => {
          return el !== '_';
        }).join('');
      });
    }
  }
  return result;
}

/***/ }),

/***/ "./src/ts/common/local-storage.ts":
/*!****************************************!*\
  !*** ./src/ts/common/local-storage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lStorage": () => (/* binding */ lStorage)
/* harmony export */ });
class LocalStorage {
  put(key, value) {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }
  get(key) {
    const findKey = localStorage.getItem(`${key}`);
    if (findKey !== null) {
      return JSON.parse(findKey);
    }
    return null;
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}
const lStorage = new LocalStorage();

/***/ }),

/***/ "./src/ts/common/signal.ts":
/*!*********************************!*\
  !*** ./src/ts/common/signal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Signal {
  constructor() {
    this.listeners = [];
  }
  add(listener) {
    this.listeners.push(listener);
  }
  remove(listener) {
    this.listeners = this.listeners.filter(elem => elem !== listener);
    console.log(this.listeners);
  }
  emit(params) {
    this.listeners.forEach(listener => listener(params));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signal);

/***/ }),

/***/ "./src/ts/common/state-types.ts":
/*!**************************************!*\
  !*** ./src/ts/common/state-types.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateOptions": () => (/* binding */ StateOptions)
/* harmony export */ });
var StateOptions;
(function (StateOptions) {
  StateOptions["newGame"] = "new-game";
  StateOptions["setMove"] = "set-move";
  StateOptions["moveCounter"] = "move-counter";
  StateOptions["stopGame"] = "stop-game";
  StateOptions["startGame"] = "start-game";
  StateOptions["changeSize"] = "change-size";
  StateOptions["winGame"] = "win-game";
  StateOptions["collectPuzzle"] = "collect-puzzle";
  StateOptions["shuffleStart"] = "shuffle-start";
  StateOptions["shuffleStop"] = "shuffle-stop";
  StateOptions["collectBtnOn"] = "collect-btn-on";
  StateOptions["collectBtnOff"] = "collect-btn-off";
  StateOptions["createPopup"] = "create-popup";
  StateOptions["showCollectPopup"] = "show-collect-popup";
  StateOptions["showFinishPopup"] = "show-finish-popup";
  StateOptions["showResultPopup"] = "show-result-popup";
  StateOptions["closePopup"] = "close-popup";
  StateOptions["collectStartTimer"] = "collect-start-timer";
  StateOptions["collectStopTimer"] = "collect-stop-timer";
  StateOptions["setCollectMoves"] = "collect-moves";
  StateOptions["stopBtnEnable"] = "stop-btn-enable";
  StateOptions["stopBtnDisable"] = "stop btn-disable";
  StateOptions["deleteTargetFromStorage"] = "delete-target-from-storage";
  StateOptions["clearLocalStorage"] = "clear-all-local-storage";
  StateOptions["showNewResult"] = "show-new-results";
  StateOptions["showSettings"] = "show-settings";
  StateOptions["closeSettings"] = "close-settings";
  StateOptions["changeTheme"] = "change-theme";
  StateOptions["changeLanguage"] = "change-language";
  StateOptions["changeSound"] = "change-sound";
  StateOptions["changeAnimation"] = "change-animation";
  StateOptions["changeVolume"] = "change-volume";
  StateOptions["resetSettings"] = "reset-settings";
  StateOptions["showWarningPopup"] = "show-warning-popup";
  StateOptions["closeWarningPopup"] = "close-warning-popup";
  StateOptions["warningResults"] = "warning-results";
  StateOptions["warningSettings"] = "warning-settings";
  StateOptions["blockField"] = "block-field";
  StateOptions["unBlockField"] = "unblock-field";
  StateOptions["openBurgerMenu"] = "open-burger-menu";
  StateOptions["closeBurgerMenu"] = "close-burger-menu";
})(StateOptions || (StateOptions = {}));

/***/ }),

/***/ "./src/ts/common/state.ts":
/*!********************************!*\
  !*** ./src/ts/common/state.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./src/ts/common/signal.ts");
/* harmony import */ var _state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-types */ "./src/ts/common/state-types.ts");



class State {
  constructor(initialState) {
    this.onUpdate = new _signal__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._data = initialState;
  }
  setNewGame() {
    this._data.gameSettings.currentField = [];
    this._data.gameSettings.movesMade = [];
    this._data.gameSettings.moveCounter = 0;
    this._data.gameSettings.isTimeRunning = false;
    this._data.gameSettings.isStartGame = false;
    this._data.gameSettings.isWin = false;
    this._data.gameSettings.result.moves = 0;
    this._data.gameSettings.result.time = '00:00:00';
    this._data.gameSettings.isCollectStart = false;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.newGame);
  }
  setGameField(arr) {
    this._data.gameSettings.currentField = arr;
  }
  getGameField() {
    return this._data.gameSettings.currentField;
  }
  setMove(arr) {
    this._data.gameSettings.currentField = arr;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.setMove);
  }
  setFrameSize(size) {
    this._data.gameSettings.frameSize = size;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeSize);
  }
  getFrameSize() {
    return this._data.gameSettings.frameSize;
  }
  setNewMove(move) {
    this._data.gameSettings.movesMade.push(move);
  }
  getAllMoves() {
    return this._data.gameSettings.movesMade;
  }
  setMoveCounter() {
    this._data.gameSettings.moveCounter++;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.moveCounter);
  }
  getMoveCounter() {
    return this._data.gameSettings.moveCounter;
  }
  setStartGame() {
    this._data.gameSettings.isStartGame = true;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.startGame);
  }
  setStopGame() {
    this._data.gameSettings.isStartGame = false;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopGame);
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnDisable);
  }
  setToggleTimer(flag) {
    this._data.gameSettings.isTimeRunning = flag;
  }
  getToggleTimer() {
    return this._data.gameSettings.isTimeRunning;
  }
  getStopStartGame() {
    return this._data.gameSettings.isStartGame;
  }
  setWinGame(flag) {
    this._data.gameSettings.isWin = flag;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.winGame);
  }
  getIsWinGame() {
    return this._data.gameSettings.isWin;
  }
  setResultMoves(moves) {
    this._data.gameSettings.result.moves = moves;
  }
  setResultTime(time) {
    this._data.gameSettings.result.time = time;
  }
  getResult() {
    return this._data.gameSettings.result;
  }
  setCollectPuzzle() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.blockField);
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectPuzzle);
  }
  shuffleStart() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStart);
  }
  shuffleStop() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStop);
  }
  collectBtnDisable() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectBtnOn);
  }
  createPopup() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.createPopup);
  }
  showCollectPopup() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showCollectPopup);
  }
  showFinishPopup() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showFinishPopup);
  }
  showResultPopup() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showResultPopup);
  }
  closePopup() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closePopup);
  }
  startCollectTimer() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectStartTimer);
  }
  stopCollectTimer() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectStopTimer);
  }
  setCollectTimer(time) {
    this._data.gameSettings.result.collectTime = time;
  }
  getCollectTimer() {
    return this._data.gameSettings.result.collectTime;
  }
  setCollectMoves() {
    this._data.gameSettings.result.collectMoves++;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.setCollectMoves);
  }
  getCollectMoves() {
    return this._data.gameSettings.result.collectMoves;
  }
  clearCollectMoves() {
    this._data.gameSettings.result.collectMoves = 0;
  }
  stopBtnEnable() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnEnable);
  }
  stopBtnDisable() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnDisable);
  }
  setCollectState(flag) {
    this._data.gameSettings.isCollectStart = flag;
  }
  clearResults() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.clearLocalStorage);
  }
  deleteTargetFromStorage(targetIndex) {
    this._data.gameSettings.deleteTarget = targetIndex;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.deleteTargetFromStorage);
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showNewResult);
  }
  getDeleteTargetFromStorage() {
    return this._data.gameSettings.deleteTarget;
  }
  openSettings() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showSettings);
  }
  getSettings() {
    return this._data.appSettings;
  }
  setTheme(flag) {
    this._data.appSettings.theme = flag;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeTheme);
  }
  getTheme() {
    return this._data.appSettings.theme;
  }
  setAnimation(flag) {
    this._data.appSettings.animation = flag;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeAnimation);
  }
  getAnimation() {
    return this._data.appSettings.animation;
  }
  setSound(flag) {
    this._data.appSettings.stateSound = flag;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeSound);
  }
  getSound() {
    return this._data.appSettings.stateSound;
  }
  setLanguage(flag) {
    this._data.appSettings.language = flag;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeLanguage);
  }
  getLanguage() {
    return this._data.appSettings.language;
  }
  setVolume(value) {
    this._data.appSettings.volume = value;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeVolume);
  }
  getVolume() {
    return this._data.appSettings.volume;
  }
  setLastVolume(value) {
    this._data.appSettings.lastVolume = value;
  }
  getLastVolume() {
    return this._data.appSettings.lastVolume;
  }
  resetSettings() {
    this._data.appSettings.animation = true;
    this._data.appSettings.volume = '30';
    this._data.appSettings.stateSound = true;
    this._data.appSettings.theme = false;
    this._data.appSettings.language = true;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.resetSettings);
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closePopup);
  }
  initLocalStorage() {
    try {
      const appSettings = _local_storage__WEBPACK_IMPORTED_MODULE_0__.lStorage.get('settings');
      this._data.appSettings.animation = appSettings.animation;
      this._data.appSettings.language = appSettings.language;
      this._data.appSettings.lastVolume = appSettings.lastVolume;
      this._data.appSettings.stateSound = appSettings.stateSound;
      this._data.appSettings.theme = appSettings.theme;
      this._data.appSettings.volume = appSettings.volume;
    } catch (_a) {
      return;
    }
  }
  showWarningPopup(type) {
    this._data.warningType = type;
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showWarningPopup);
  }
  closeWarningPopup() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closeWarningPopup);
  }
  warningDeleteResult() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.warningResults);
  }
  warningDeleteSettings() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.warningSettings);
  }
  onClickWarning() {
    if (this._data.warningType === _state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showResultPopup) {
      this.warningDeleteResult();
    } else {
      if (this._data.warningType === _state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showSettings) {
        this.warningDeleteSettings();
      }
    }
    this.closeWarningPopup();
  }
  openBurgerMenu() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.openBurgerMenu);
  }
  closeBurgerMenu() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closeBurgerMenu);
  }
}
const initialState = {
  gameSettings: {
    frameSize: 4,
    currentField: [],
    movesMade: [],
    moveCounter: 0,
    isStartGame: false,
    isTimeRunning: false,
    isWin: false,
    isCollectStart: false,
    deleteTarget: -1,
    result: {
      moves: 0,
      time: '00:00:00',
      collectTime: '00:00:00',
      collectMoves: 0
    },
    results: []
  },
  appSettings: {
    volume: '30',
    lastVolume: '30',
    stateSound: true,
    theme: false,
    language: true,
    animation: true
  },
  warningType: null
};
const state = new State(initialState);

/***/ }),

/***/ "./src/ts/components/app.ts":
/*!**********************************!*\
  !*** ./src/ts/components/app.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer */ "./src/ts/components/footer/footer.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header */ "./src/ts/components/header/header.ts");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main */ "./src/ts/components/main/main.ts");
/* harmony import */ var _assets_image_main_bg_light_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/main-bg-light.jpg */ "./src/assets/image/main-bg-light.jpg");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};







class App extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'wrapper');
    this.createBG(parentNode);
    const header = new _header_header__WEBPACK_IMPORTED_MODULE_4__.Header(this.node);
    const main = new _main_main__WEBPACK_IMPORTED_MODULE_5__.Main(this.node);
    const footer = new _footer_footer__WEBPACK_IMPORTED_MODULE_3__.Footer(this.node);
    this.changeFontFamily(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage(), parentNode);
    this.appListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeLanguage:
          this.changeFontFamily(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage(), parentNode);
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(this.appListener);
  }
  createBG(body) {
    const img = new Image();
    img.src = _assets_image_main_bg_light_jpg__WEBPACK_IMPORTED_MODULE_6__;
    img.onload = () => __awaiter(this, void 0, void 0, function* () {
      body.classList.add('body_original');
    });
  }
  changeFontFamily(isEn, parentNode) {
    isEn ? parentNode.style.fontFamily = `'Thasadith', sans-serif` : parentNode.style.fontFamily = `'Inter', sans-serif`;
  }
}

/***/ }),

/***/ "./src/ts/components/footer/footer.ts":
/*!********************************************!*\
  !*** ./src/ts/components/footer/footer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/ts/components/footer/footer.scss");


class Footer extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'footer', 'footer');
    const year = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'footer_year', '2023');
    const github = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'a', 'footer_link', 'pain4metoo');
    github.node.href = 'https://github.com/pain4metoo';
    github.node.target = 'blank';
  }
}

/***/ }),

/***/ "./src/ts/components/header/header.ts":
/*!********************************************!*\
  !*** ./src/ts/components/header/header.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../index */ "./src/index.ts");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.scss */ "./src/ts/components/header/header.scss");






var NavItem;
(function (NavItem) {
  NavItem["Restart"] = "restart";
  NavItem["Stop"] = "stop";
  NavItem["Results"] = "results";
  NavItem["Settings"] = "settings";
})(NavItem || (NavItem = {}));
class Header extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'header', 'header');
    this.navItems = ['restart', 'stop', 'results', 'settings'];
    this.navItemsHtmlElements = [];
    const nav = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'nav', 'header_nav');
    const navList = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](nav.node, 'ul', 'header_list');
    const mobileStopBtn = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](nav.node, 'button', 'header_mobile_btn', _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'stop' : 'стоп');
    mobileStopBtn.node.onclick = () => {
      _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
      mobileStopBtn.node.classList.add('header_mobile_btn_active');
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStopGame();
    };
    const burgerMenu = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](nav.node, 'div', 'header_burger');
    const burgerItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](burgerMenu.node, 'div', 'header_burger_item');
    const burgerItem1 = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](burgerMenu.node, 'div', 'header_burger_item');
    burgerMenu.node.onclick = () => this.openBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
    // create buttons
    this.navItems.forEach(navLink => {
      const navItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](navList.node, 'li', 'header_list_item');
      const navItemLink = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](navItem.node, 'button', 'header_item_btn');
      this.navItemsHtmlElements.push(navItemLink.node);
      switch (navLink) {
        case NavItem.Restart:
          navItemLink.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'restart' : 'рестарт';
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.collect);
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setNewGame();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.closeBurgerMenu();
            navItemLink.node.classList.add('header_item_btn_active');
          };
          break;
        case NavItem.Stop:
          navItemLink.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'stop' : 'стоп';
          navItemLink.node.disabled = true;
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
            navItemLink.node.classList.add('header_item_btn_active');
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStopGame();
            navItemLink.node.disabled = true;
          };
          break;
        case NavItem.Results:
          navItemLink.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'results' : 'результаты';
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.popup);
            navItemLink.node.classList.add('header_item_btn_active');
            this.showResultPopup();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.closeBurgerMenu();
          };
          break;
        case NavItem.Settings:
          navItemLink.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'settings' : 'настройки';
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.popup);
            navItemLink.node.classList.add('header_item_btn_active');
            this.showSettings();
            this.closeBurgerMenu(navList.node, burgerItem.node, burgerItem1.node);
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.closeBurgerMenu();
          };
          break;
      }
    });
    this.headerListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.startGame:
          this.changeStateStopBtn(mobileStopBtn.node, false);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnEnable:
          this.changeStateStopBtn(mobileStopBtn.node, false);
          this.navItemsHtmlElements[1].classList.remove('header_item_btn_active');
          mobileStopBtn.node.classList.remove('header_mobile_btn_active');
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnDisable:
          this.changeStateStopBtn(mobileStopBtn.node, true);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStart:
          this.changeStateButtons(true);
          this.changeStateStopBtn(mobileStopBtn.node, true);
          this.navItemsHtmlElements[1].classList.remove('header_item_btn_active');
          mobileStopBtn.node.classList.remove('header_mobile_btn_active');
          this.navItemsHtmlElements[0].classList.add('header_item_btn_active');
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStop:
          this.changeStateButtons(false);
          this.navItemsHtmlElements[0].classList.remove('header_item_btn_active');
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closePopup:
          this.navItemsHtmlElements[2].classList.remove('header_item_btn_active');
          this.navItemsHtmlElements[3].classList.remove('header_item_btn_active');
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeLanguage:
          this.changeLanguage(mobileStopBtn.node);
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(this.headerListener);
  }
  changeStateStopBtn(mobileBtn, flag) {
    if (flag) {
      this.navItemsHtmlElements[1].disabled = true;
      mobileBtn.disabled = true;
    } else {
      this.navItemsHtmlElements[1].disabled = false;
      mobileBtn.disabled = false;
    }
  }
  showSettings() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.createPopup();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.openSettings();
  }
  showResultPopup() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.createPopup();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.showResultPopup();
  }
  openBurgerMenu(menu, item1, item2) {
    item1.classList.toggle('header_burger_item_rotate');
    item2.classList.toggle('header_burger_item_rotate');
    if (item1.classList.contains('header_burger_item_rotate')) {
      menu.classList.add('header_list_show');
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.openBurgerMenu();
    } else {
      menu.classList.remove('header_list_show');
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.closeBurgerMenu();
    }
  }
  closeBurgerMenu(menu, item1, item2) {
    item1.classList.remove('header_burger_item_rotate');
    item2.classList.remove('header_burger_item_rotate');
    menu.classList.remove('header_list_show');
  }
  changeStateButtons(flag) {
    this.navItemsHtmlElements.forEach((el, i) => {
      // skip stop btn
      if (i !== 1) {
        flag ? el.disabled = true : el.disabled = false;
      }
    });
  }
  changeLanguage(mobileBtn) {
    const lang = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage();
    if (lang) {
      this.navItems.forEach((el, i) => {
        this.navItemsHtmlElements[i].textContent = el;
      });
    } else {
      this.navItemsHtmlElements[0].textContent = 'рестарт';
      this.navItemsHtmlElements[1].textContent = 'стоп';
      this.navItemsHtmlElements[2].textContent = 'результаты';
      this.navItemsHtmlElements[3].textContent = 'настройки';
      mobileBtn.textContent = 'стоп';
    }
  }
}

/***/ }),

/***/ "./src/ts/components/main/counters/counters.ts":
/*!*****************************************************!*\
  !*** ./src/ts/components/main/counters/counters.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Counter": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _counter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.scss */ "./src/ts/components/main/counters/counter.scss");
/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moves */ "./src/ts/components/main/counters/moves.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/ts/components/main/counters/timer.ts");




class Counter extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'section', 'main_counters');
    const moves = new _moves__WEBPACK_IMPORTED_MODULE_2__.Moves(this.node);
    const timer = new _timer__WEBPACK_IMPORTED_MODULE_3__.Timer(this.node);
  }
}

/***/ }),

/***/ "./src/ts/components/main/counters/moves.ts":
/*!**************************************************!*\
  !*** ./src/ts/components/main/counters/moves.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Moves": () => (/* binding */ Moves)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/language */ "./src/ts/common/language.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");




class Moves extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'main_counters_block_left');
    const movesBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'main_counters_moves');
    const movesBlockText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](movesBlock.node, 'p', 'main_counters_text main_counters_txt', 'Moves: ');
    const movesBlockNumber = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](movesBlock.node, 'p', 'main_counters_number main_counters_txt', '0');
    _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.add(type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.moveCounter:
          this.makeMove(movesBlockNumber.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.newGame:
          movesBlockNumber.node.textContent = '0';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.winGame:
          _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setResultMoves(Number(movesBlockNumber.node.textContent));
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.setCollectMoves:
          movesBlockNumber.node.textContent = `${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getMoveCounter() + _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getCollectMoves()}`;
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeLanguage:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage(), movesBlockText.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.resetSettings:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage(), movesBlockText.node);
          break;
      }
    });
    this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage(), movesBlockText.node);
  }
  switchLang(currentLang, el) {
    el.textContent = `${(0,_common_language__WEBPACK_IMPORTED_MODULE_1__.correctTranslater)(currentLang, _common_language__WEBPACK_IMPORTED_MODULE_1__.TList.moves)[0]}: `;
  }
  makeMove(moveNode) {
    moveNode.textContent = `${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getMoveCounter()}`;
  }
}

/***/ }),

/***/ "./src/ts/components/main/counters/timer.ts":
/*!**************************************************!*\
  !*** ./src/ts/components/main/counters/timer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/language */ "./src/ts/common/language.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");




class Timer extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'main_counters_block_right');
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
    this.collectSec = 1;
    const timeBlockText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'main_counters_time_text main_counters_txt', 'Time: ');
    const timeBlockNumber = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'main_counters_time_number main_counters_txt', '00:00:00');
    this.timeNodeHtml = timeBlockNumber.node;
    _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.add(type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.startGame:
          this.setTimer(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getToggleTimer());
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.stopGame:
          setTimeout(() => {
            this.stopTimer(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getToggleTimer());
          }, 1000);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.newGame:
          timeBlockNumber.node.textContent = '00:00:00';
          this.newGame();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.winGame:
          if (timeBlockNumber.node.textContent) {
            _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setResultTime(timeBlockNumber.node.textContent);
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.collectStartTimer:
          this.setTimer(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getToggleTimer());
          this.setCollectGameTimer();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.collectStopTimer:
          this.stopTimer(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getToggleTimer());
          this.stopCollectGameTimer();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeLanguage:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage(), timeBlockText.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.resetSettings:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage(), timeBlockText.node);
          break;
      }
    });
    this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage(), timeBlockText.node);
  }
  switchLang(currentLang, el) {
    el.textContent = `${(0,_common_language__WEBPACK_IMPORTED_MODULE_1__.correctTranslater)(currentLang, _common_language__WEBPACK_IMPORTED_MODULE_1__.TList.time)[0]}: `;
  }
  setCollectGameTimer() {
    const timer = window.setInterval(() => this.collectSec++, 1000);
    this.collectTimer = timer;
  }
  stopCollectGameTimer() {
    _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setCollectTimer(String(this.collectSec));
    clearInterval(this.collectTimer);
    this.collectSec = 0;
  }
  newGame() {
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
    clearInterval(this.currentTimer);
  }
  setTimer(stopStartGame, toggleTimer) {
    if (stopStartGame && !toggleTimer) {
      const timer = window.setInterval(() => this.newTimer(), 1000);
      this.currentTimer = timer;
      _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setToggleTimer(true);
    }
  }
  stopTimer(stopStartGame, toggleTimer) {
    if (!stopStartGame && toggleTimer) {
      clearInterval(this.currentTimer);
      _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setToggleTimer(false);
    }
  }
  newTimer() {
    this.sec++;
    if (this.sec >= 60) {
      this.min++;
      this.sec = this.sec - 60;
    }
    if (this.min >= 60) {
      this.hour++;
      this.min = this.min - 60;
    }
    if (this.sec < 10) {
      if (this.min < 10) {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:0${this.min}:0${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:0${this.min}:0${this.sec}`;
        }
      } else {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:${this.min}:0${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:${this.min}:0${this.sec}`;
        }
      }
    } else {
      if (this.min < 10) {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:0${this.min}:${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:0${this.min}:${this.sec}`;
        }
      } else {
        if (this.hour < 10) {
          this.timeNodeHtml.textContent = `0${this.hour}:${this.min}:${this.sec}`;
        } else {
          this.timeNodeHtml.textContent = `${this.hour}:${this.min}:${this.sec}`;
        }
      }
    }
  }
}

/***/ }),

/***/ "./src/ts/components/main/frame-size/frame-size.ts":
/*!*********************************************************!*\
  !*** ./src/ts/components/main/frame-size/frame-size.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameSize": () => (/* binding */ FrameSize)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _frame_size_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame-size.scss */ "./src/ts/components/main/frame-size/frame-size.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../index */ "./src/index.ts");
/* harmony import */ var _common_language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/language */ "./src/ts/common/language.ts");







class FrameSize extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'section', 'main_frame');
    this.otherSize = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];
    this.otherSizeHtml = [];
    const btnCollectPuzzle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'main_frame_btn', 'collect puzzle');
    btnCollectPuzzle.node.onclick = () => {
      btnCollectPuzzle.node.classList.add('main_frame_btn_active');
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectPuzzle();
    };
    btnCollectPuzzle.node.disabled = true;
    const otherSizeBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'main_frame_other');
    this.otherSize.forEach((size, i) => {
      const sizeEL = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](otherSizeBlock.node, 'button', 'main_frame_other_size', `${size}`);
      sizeEL.node.disabled = true;
      sizeEL.node.onclick = () => this.setNewFrameSize(Number(size[0])); // get and set in the state first symbol from string
      this.otherSizeHtml.push(sizeEL.node);
      if (_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize() === Number(this.otherSize[i][0])) {
        sizeEL.node.classList.add('main_frame_other_size_active');
      } else {
        sizeEL.node.classList.remove('main_frame_other_size_active');
      }
    });
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeSize:
          this.otherSizeHtml.forEach((el, i) => {
            if (_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize() === Number(this.otherSize[i][0])) {
              el.classList.add('main_frame_other_size_active');
            } else {
              el.classList.remove('main_frame_other_size_active');
            }
          });
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStart:
          btnCollectPuzzle.node.disabled = true;
          this.changeBtnSizeState(true);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStop:
          btnCollectPuzzle.node.disabled = false;
          this.changeBtnSizeState(false);
          btnCollectPuzzle.node.classList.remove('main_frame_btn_active');
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectBtnOn:
          btnCollectPuzzle.node.disabled = true;
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectBtnOff:
          btnCollectPuzzle.node.disabled = false;
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.winGame:
          btnCollectPuzzle.node.disabled = true;
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeLanguage:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage(), btnCollectPuzzle.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.resetSettings:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage(), btnCollectPuzzle.node);
          break;
      }
    });
    this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage(), btnCollectPuzzle.node);
  }
  switchLang(currentLang, el) {
    el.textContent = `${(0,_common_language__WEBPACK_IMPORTED_MODULE_6__.correctTranslater)(currentLang, _common_language__WEBPACK_IMPORTED_MODULE_6__.TList.collect)[0]}`;
  }
  setNewFrameSize(size) {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setFrameSize(size);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setNewGame();
    _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.collect);
  }
  changeBtnSizeState(flag) {
    this.otherSizeHtml.forEach(el => {
      flag ? el.disabled = true : el.disabled = false;
    });
  }
}

/***/ }),

/***/ "./src/ts/components/main/game/game.ts":
/*!*********************************************!*\
  !*** ./src/ts/components/main/game/game.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _game_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.scss */ "./src/ts/components/main/game/game.scss");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _generateMatrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generateMatrix */ "./src/ts/components/main/game/generateMatrix.ts");
/* harmony import */ var _soundControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../.. */ "./src/index.ts");








class Game extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'main_game_container');
    this.gameSquareHTML = [];
    this.results = _common_local_storage__WEBPACK_IMPORTED_MODULE_4__.lStorage.get('results') || [];
    this.createGame();
    this.gameListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.newGame:
          _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.remove(this.gameListener);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.winGame:
          if (_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getIsWinGame()) {
            this.node.classList.add('main_game_over');
          } else {
            this.node.classList.remove('main_game_over');
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.collectPuzzle:
          this.collectPazzle();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.clearLocalStorage:
          this.deleteResult();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.deleteTargetFromStorage:
          this.deleteResult(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getDeleteTargetFromStorage());
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(this.gameListener);
  }
  createGame() {
    _generateMatrix__WEBPACK_IMPORTED_MODULE_5__.GenerateMatrix.generateMatrix(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize());
    this.createElementsHTML();
    this.shuffleCycle();
  }
  createElementsHTML() {
    const currentGameSize = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize();
    const currentGamePuzzle = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField().flat();
    this.node.classList.add(`main_game_container_${currentGameSize}x${currentGameSize}`);
    for (let i = 0; i < currentGameSize * currentGameSize; i++) {
      const square = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'main_game_square', `${currentGamePuzzle[i]}`);
      square.node.classList.add(`main_game_square_${currentGameSize}x${currentGameSize}`);
      this.gameSquareHTML.push(square.node);
      square.node.onclick = () => this.moveByClick(Number(square.node.textContent));
    }
  }
  shuffleCycle() {
    const maxShuffle = this.getRandomShuffleCount();
    let counter = 0;
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStart();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.startCollectTimer();
    this.changeStateGameField(true);
    const handle = setInterval(() => {
      this.singleStrokeCycle();
      if (counter === maxShuffle) {
        clearInterval(handle); // stops intervals
        this.changeStateGameField(false);
        ___WEBPACK_IMPORTED_MODULE_7__.soundControl.pauseSound();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.stopCollectTimer();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStop();
        this.handlerDragAndDrop(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField().flat());
      }
      counter++;
    }, 0);
  }
  getRandomShuffleCount() {
    const options = [300, 500, 700, 900, 1100, 1300];
    const correctIndex = 3; // correct index for change return value;
    return options[_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize() - correctIndex] + Math.ceil(Math.random() * 100);
  }
  singleStrokeCycle() {
    const availableMovesObj = this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField());
    const randomMove = this.getRandomMove(availableMovesObj);
    this.makeMove(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField(), randomMove, availableMovesObj.emptySquare, false); // false mean isCollectPuzzle
  }

  availableMoves(matrix) {
    // index 0 it's X axes; index 1 it's Y axes; index 2 it's value on this coordinate
    const availableMoves = {
      axisXLeft: [],
      axisXRight: [],
      axisYTop: [],
      axisYBottom: [],
      emptySquare: []
    };
    for (let i = 0; i < matrix.length; i++) {
      for (let g = 0; g < matrix[i].length; g++) {
        if (matrix[i][g] === 0) {
          availableMoves.emptySquare = [i, g];
          if (matrix[i][g - 1]) {
            availableMoves.axisXLeft = [i, g - 1, matrix[i][g - 1]];
          }
          if (matrix[i][g + 1]) {
            availableMoves.axisXRight = [i, g + 1, matrix[i][g + 1]];
          }
          if (matrix[i - 1] && matrix[i - 1][g]) {
            availableMoves.axisYTop = [i - 1, g, matrix[i - 1][g]];
          }
          if (matrix[i + 1] && matrix[i + 1][g]) {
            availableMoves.axisYBottom = [i + 1, g, matrix[i + 1][g]];
          }
          return availableMoves;
        }
      }
    }
    return availableMoves;
  }
  getRandomMove(availableMoves) {
    const objValuesFromAvalableMoves = Object.values(availableMoves);
    const availableMovesArr = objValuesFromAvalableMoves.reduce((acc, el, i, arr) => {
      if (i !== arr.length - 1 && el.length > 0) {
        // check the first 4 subarrays that they are not empty. We don't need the 5th subarray.
        acc.push(el);
      }
      return acc;
    }, []);
    const lastMoveMade = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves()[_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().length - 1][2]; // look at the value at 2 array index
    const filterAvailableMoves = availableMovesArr.filter(el => el[2] !== lastMoveMade); // We remove the last similar move
    const randomNumberforMove = Math.ceil(Math.random() * filterAvailableMoves.length) - 1; // selecting a random subarray
    return filterAvailableMoves[randomNumberforMove]; // choose a random one from the remaining
  }

  makeMove(matrix, move, zero, isCollectPuzzle) {
    [matrix[move[0]][move[1]], matrix[zero[0]][zero[1]]] = [matrix[zero[0]][zero[1]], matrix[move[0]][move[1]]];
    if (!isCollectPuzzle) {
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().push(move);
    }
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setGameField(matrix);
    this.shuffleElementsHTML();
    return matrix;
  }
  shuffleElementsHTML() {
    const singleLevelMatrix = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField().flat();
    this.gameSquareHTML.forEach((el, i) => {
      if (singleLevelMatrix[i] === 0) {
        el.textContent = ``;
        el.classList.add('main_game_square_empty');
      } else {
        el.textContent = String(singleLevelMatrix[i]);
        el.classList.remove('main_game_square_empty');
      }
    });
  }
  handlerDragAndDrop(currentMatrix) {
    // We iterate only from 0 to 3 indices inclusive and take the value of the game square
    const currentAvailableMoves = Object.values(this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField())).map((el, i) => {
      if (i <= 3) {
        if (el[2]) {
          return el[2];
        }
      }
      return false;
    }).filter(el => el);
    currentMatrix.forEach((el, i) => {
      if (el === 0) {
        this.gameSquareHTML[i].ondragover = e => {
          e.preventDefault();
        };
        this.gameSquareHTML[i].ondrop = event => {
          var _a;
          const move = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('id');
          this.moveByClick(Number(move));
        };
      }
      if (currentAvailableMoves.includes(el)) {
        this.gameSquareHTML[i].ondragover = e => {
          e.stopImmediatePropagation();
        };
        this.gameSquareHTML[i].draggable = true;
        this.gameSquareHTML[i].ondragstart = event => {
          var _a;
          (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('id', String(currentMatrix[i]));
        };
      } else {
        this.gameSquareHTML[i].draggable = false;
      }
    });
  }
  collectPazzle() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStart();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStartGame();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectState(true);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.stopBtnDisable();
    ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.collect);
    this.changeStateGameField(true);
    const handle = setInterval(() => {
      const positionOfZero = this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField()).emptySquare;
      const spliceLastMove = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().splice(-1)[0];
      this.makeMove(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField(), spliceLastMove, positionOfZero, true);
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectMoves();
      if (_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().length === 0) {
        this.changeStateGameField(false);
        ___WEBPACK_IMPORTED_MODULE_7__.soundControl.pauseSound();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectState(false);
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.clearCollectMoves();
        clearInterval(handle); // stops intervals
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStop();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.collectBtnDisable();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setWinGame(true);
        this.showCollectResult();
        ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.roboWin);
      }
    }, 1);
  }
  moveByClick(squareValue) {
    const availableMoveArr = Object.values(this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField()));
    availableMoveArr.forEach(el => {
      if (el[2] === squareValue) {
        this.makeMove(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField(), el, this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField()).emptySquare, false);
        this.setMoveInState(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField());
        this.handlerDragAndDrop(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField().flat());
      }
    });
  }
  setMoveInState(currentGameField) {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setMove(currentGameField);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setMoveCounter();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStartGame();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.stopBtnEnable();
    if (this.isWin()) {
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setWinGame(true);
      this.showFinishResult();
      this.setInLocalStorage();
      ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.win);
    } else {
      ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.move);
    }
  }
  setInLocalStorage() {
    const result = {
      frameSize: _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize(),
      moves: _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().moves,
      time: _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().time
    };
    const maxItemsInLocal = 10;
    if (this.results.includes(result)) {
      return;
    } else {
      this.results.push(Object.assign({}, result));
    }
    const arrayAfterSort = this.sortValue(this.results);
    arrayAfterSort.length > maxItemsInLocal ? arrayAfterSort.splice(arrayAfterSort.length - 1, 1) : null;
    _common_local_storage__WEBPACK_IMPORTED_MODULE_4__.lStorage.put('results', this.results);
  }
  deleteResult(targetIndex) {
    if (targetIndex === 0 || targetIndex) {
      this.results.splice(targetIndex, 1);
    } else {
      this.results.splice(0);
    }
    _common_local_storage__WEBPACK_IMPORTED_MODULE_4__.lStorage.put('results', this.results);
  }
  sortValue(results) {
    return results.sort((a, b) => {
      if (a.frameSize !== b.frameSize) {
        return b.frameSize - a.frameSize;
      } else {
        // If frameSize are equal, then look at moves
        if (a.moves !== b.moves) {
          return a.moves - b.moves;
        } else {
          // If moves are equal then look at time and repeat for hours minutes and seconds
          const splitTimeFirst = a.time.split(':').map(item => +item);
          const splitTimeSecond = b.time.split(':').map(item => +item);
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
  isWin() {
    const currentGameField = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField().flat();
    for (let i = 0; i < currentGameField.length; i++) {
      if (_generateMatrix__WEBPACK_IMPORTED_MODULE_5__.GenerateMatrix.finishResult[i] !== currentGameField[i]) {
        return false;
      }
    }
    return true;
  }
  showFinishResult() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.createPopup();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStopGame();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.showFinishPopup();
  }
  showCollectResult() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.createPopup();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStopGame();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.showCollectPopup();
  }
  changeStateGameField(flag) {
    if (flag) {
      this.node.classList.add('main_game_over');
    } else {
      this.node.classList.remove('main_game_over');
    }
  }
}

/***/ }),

/***/ "./src/ts/components/main/game/generateMatrix.ts":
/*!*******************************************************!*\
  !*** ./src/ts/components/main/game/generateMatrix.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateMatrix": () => (/* binding */ GenerateMatrix)
/* harmony export */ });
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");

class GenerateMatrix {
  static generateMatrix(size) {
    const numbersArray = [];
    const maxNumber = Math.pow(size, 2);
    for (let i = 0; i < maxNumber; i++) {
      numbersArray.push(i);
    }
    const deleteZeroFromStart = numbersArray.splice(0, 1);
    numbersArray[numbersArray.length] = deleteZeroFromStart[0]; // add zero to end of arr;
    const matrix = [];
    while (numbersArray.length) {
      matrix.push(numbersArray.splice(0, size));
    }
    this.finishResult = matrix.slice().flat();
    _common_state__WEBPACK_IMPORTED_MODULE_0__.state.setGameField(matrix);
    this.determineDefaultZeroPosition();
  }
  static determineDefaultZeroPosition() {
    const currentMatrix = _common_state__WEBPACK_IMPORTED_MODULE_0__.state.getGameField();
    for (let i = 0; i < currentMatrix.length; i++) {
      for (let g = 0; g < currentMatrix[i].length; g++) {
        if (currentMatrix[i][g] === 0) {
          _common_state__WEBPACK_IMPORTED_MODULE_0__.state.setNewMove([i, g, 0]);
          return;
        }
      }
    }
  }
}
GenerateMatrix.finishResult = [];


/***/ }),

/***/ "./src/ts/components/main/game/soundControl.ts":
/*!*****************************************************!*\
  !*** ./src/ts/components/main/game/soundControl.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoundControl": () => (/* binding */ SoundControl),
/* harmony export */   "SoundTypes": () => (/* binding */ SoundTypes)
/* harmony export */ });
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _assets_sound_move_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/sound/move.mp3 */ "./src/assets/sound/move.mp3");
/* harmony import */ var _assets_sound_collect_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/sound/collect.mp3 */ "./src/assets/sound/collect.mp3");
/* harmony import */ var _assets_sound_win_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/sound/win.mp3 */ "./src/assets/sound/win.mp3");
/* harmony import */ var _assets_sound_btn_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/sound/btn.mp3 */ "./src/assets/sound/btn.mp3");
/* harmony import */ var _assets_sound_input_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/sound/input.mp3 */ "./src/assets/sound/input.mp3");
/* harmony import */ var _assets_sound_volume_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/sound/volume.mp3 */ "./src/assets/sound/volume.mp3");
/* harmony import */ var _assets_sound_delete_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/sound/delete.mp3 */ "./src/assets/sound/delete.mp3");
/* harmony import */ var _assets_sound_robo_win_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/sound/robo-win.mp3 */ "./src/assets/sound/robo-win.mp3");
/* harmony import */ var _assets_sound_popup_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/sound/popup.mp3 */ "./src/assets/sound/popup.mp3");











var SoundTypes;
(function (SoundTypes) {
  SoundTypes["move"] = "move";
  SoundTypes["collect"] = "collect";
  SoundTypes["win"] = "win";
  SoundTypes["btn"] = "btn";
  SoundTypes["input"] = "input";
  SoundTypes["volume"] = "volume";
  SoundTypes["delete"] = "delete";
  SoundTypes["roboWin"] = "robo-win";
  SoundTypes["popup"] = "popup";
})(SoundTypes || (SoundTypes = {}));
class SoundControl {
  constructor() {
    this.sound = new Audio();
    this.sound.volume = Number(_common_state__WEBPACK_IMPORTED_MODULE_0__.state.getVolume()) / 100;
    this.soundListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_1__.StateOptions.changeVolume:
          this.sound.volume = Number(_common_state__WEBPACK_IMPORTED_MODULE_0__.state.getVolume()) / 100;
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_0__.state.onUpdate.add(this.soundListener);
  }
  playSound(type) {
    switch (type) {
      case SoundTypes.move:
        this.sound.src = _assets_sound_move_mp3__WEBPACK_IMPORTED_MODULE_2__;
        this.sound.play();
        break;
      case SoundTypes.win:
        this.sound.src = _assets_sound_win_mp3__WEBPACK_IMPORTED_MODULE_4__;
        this.play();
        break;
      case SoundTypes.collect:
        this.sound.src = _assets_sound_collect_mp3__WEBPACK_IMPORTED_MODULE_3__;
        this.play();
        break;
      case SoundTypes.btn:
        this.sound.src = _assets_sound_btn_mp3__WEBPACK_IMPORTED_MODULE_5__;
        this.play();
        break;
      case SoundTypes.input:
        this.sound.src = _assets_sound_input_mp3__WEBPACK_IMPORTED_MODULE_6__;
        this.play();
        break;
      case SoundTypes.volume:
        this.sound.src = _assets_sound_volume_mp3__WEBPACK_IMPORTED_MODULE_7__;
        this.play();
        break;
      case SoundTypes.delete:
        this.sound.src = _assets_sound_delete_mp3__WEBPACK_IMPORTED_MODULE_8__;
        this.play();
        break;
      case SoundTypes.roboWin:
        this.sound.src = _assets_sound_robo_win_mp3__WEBPACK_IMPORTED_MODULE_9__;
        this.play();
        break;
      case SoundTypes.popup:
        this.sound.src = _assets_sound_popup_mp3__WEBPACK_IMPORTED_MODULE_10__;
        this.play();
        break;
    }
  }
  play() {
    const isPlaying = this.sound.currentTime > 0 && !this.sound.paused && !this.sound.ended && this.sound.readyState > this.sound.HAVE_CURRENT_DATA;
    this.sound.currentTime = 0;
    if (!isPlaying) {
      setTimeout(() => {
        this.sound.play();
      }, 150);
    }
  }
  pauseSound() {
    this.sound.pause();
  }
}

/***/ }),

/***/ "./src/ts/components/main/main.ts":
/*!****************************************!*\
  !*** ./src/ts/components/main/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _counters_counters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counters/counters */ "./src/ts/components/main/counters/counters.ts");
/* harmony import */ var _frame_size_frame_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame-size/frame-size */ "./src/ts/components/main/frame-size/frame-size.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game */ "./src/ts/components/main/game/game.ts");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.scss */ "./src/ts/components/main/main.scss");
/* harmony import */ var _popups_popups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popups/popups */ "./src/ts/components/main/popups/popups.ts");
/* harmony import */ var _popups_warning_popup_warning_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popups/warning-popup/warning-popup */ "./src/ts/components/main/popups/warning-popup/warning-popup.ts");









class Main extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'main', 'main');
    const sectionCounter = new _counters_counters__WEBPACK_IMPORTED_MODULE_3__.Counter(this.node);
    const sectionGameContainer = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'section', 'main_game');
    let sectionGame = new _game_game__WEBPACK_IMPORTED_MODULE_5__.Game(sectionGameContainer.node);
    const sectionFrameSize = new _frame_size_frame_size__WEBPACK_IMPORTED_MODULE_4__.FrameSize(this.node);
    this.mainListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.newGame:
          sectionGame.destroy();
          sectionGame = new _game_game__WEBPACK_IMPORTED_MODULE_5__.Game(sectionGameContainer.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.createPopup:
          this.mainPopups = new _popups_popups__WEBPACK_IMPORTED_MODULE_7__.Popups(this.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closePopup:
          this.mainPopups.destroy();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showWarningPopup:
          this.warningPopup = new _popups_warning_popup_warning_popup__WEBPACK_IMPORTED_MODULE_8__.WarningPopup(this.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closeWarningPopup:
          this.warningPopup.destroy();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.openBurgerMenu:
          this.node.style.zIndex = '-1';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closeBurgerMenu:
          this.node.style.zIndex = '0';
          this.node.style.position = 'inherit';
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(this.mainListener);
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/collect-popup/collect-popup.ts":
/*!**********************************************************************!*\
  !*** ./src/ts/components/main/popups/collect-popup/collect-popup.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectPopup": () => (/* binding */ CollectPopup)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _collect_popup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collect-popup.scss */ "./src/ts/components/main/popups/collect-popup/collect-popup.scss");



class CollectPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'popups_collect');
    const collectTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'popups_collect_title', `${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'Puzzle assembled automatically' : 'Пятнашки собраны автоматически'}`);
    const collectInfo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'popups_collect_info');
    const collectTime = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h4', 'popups_collect_time', `${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? `Auto build time: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectTimer()}s` : `Время сборки: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectTimer()}c`}`);
    const totalTime = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h2', 'popups_collect_total_time', `${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? `Game time: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().time}` : `Игровое время: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().time}`}`);
    const totalMoves = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h2', 'popups_collect_moves', `${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? `Total moves: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().moves + _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectMoves()}` : `Всего ходов: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().moves + _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectMoves()}`}`);
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/finish-popup/finish-popup.ts":
/*!********************************************************************!*\
  !*** ./src/ts/components/main/popups/finish-popup/finish-popup.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinishPopup": () => (/* binding */ FinishPopup)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _finish_popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finish-popup.scss */ "./src/ts/components/main/popups/finish-popup/finish-popup.scss");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/state */ "./src/ts/common/state.ts");



class FinishPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'popups_finish');
    const finishTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'popups_finish_title', `${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? 'Hooray! You have completed the puzzle!' : 'Ура! Вы собрали пятнашки!'}`);
    const collectInfo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'popups_collect_info');
    const finishTime = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h4', 'popups_finish_time', `${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? `Game time: ${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getResult().time}` : `Время игры: ${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getResult().time}`}`);
    const finishMoves = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h4', 'popups_finish_moves', `${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? `Total moves: ${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getResult().moves + _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getCollectMoves()}` : `Всего ходов: ${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getResult().moves + _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getCollectMoves()}`}`);
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/popups.ts":
/*!*************************************************!*\
  !*** ./src/ts/components/main/popups/popups.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popups": () => (/* binding */ Popups)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _collect_popup_collect_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collect-popup/collect-popup */ "./src/ts/components/main/popups/collect-popup/collect-popup.ts");
/* harmony import */ var _finish_popup_finish_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finish-popup/finish-popup */ "./src/ts/components/main/popups/finish-popup/finish-popup.ts");
/* harmony import */ var _result_popup_result_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result-popup/result-popup */ "./src/ts/components/main/popups/result-popup/result-popup.ts");
/* harmony import */ var _popups_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popups.scss */ "./src/ts/components/main/popups/popups.scss");
/* harmony import */ var _settings_popup_settings_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-popup/settings-popup */ "./src/ts/components/main/popups/settings-popup/settings-popup.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../index */ "./src/index.ts");











class Popups extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'popups');
    const popupsInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'popups_inner');
    const closeBtn = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupsInner.node, 'button', 'popups_close_btn');
    const newGameBtn = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupsInner.node, 'button', 'popups_new_btn', _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'restart' : 'новая игра');
    newGameBtn.node.onclick = () => this.onNewGameBtn();
    closeBtn.node.onclick = () => this.onDeletePopup();
    this.popupsListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showCollectPopup:
          this.popupCollect = new _collect_popup_collect_popup__WEBPACK_IMPORTED_MODULE_3__.CollectPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showResultPopup:
          this.popupResult = new _result_popup_result_popup__WEBPACK_IMPORTED_MODULE_5__.ResultPopup(popupsInner.node);
          newGameBtn.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'delete all results' : 'очистить результаты';
          newGameBtn.node.onclick = () => this.showWarning(_common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showResultPopup);
          if (_common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.get('results') !== null) {
            if (_common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.get('results').length > 0) {
              newGameBtn.node.disabled = false;
            } else {
              newGameBtn.node.disabled = true;
            }
          } else {
            newGameBtn.node.disabled = true;
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.deleteTargetFromStorage:
          if (_common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.get('results') !== null) {
            if (_common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.get('results').length > 0) {
              newGameBtn.node.disabled = false;
            } else {
              newGameBtn.node.disabled = true;
            }
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showFinishPopup:
          this.popupFinish = new _finish_popup_finish_popup__WEBPACK_IMPORTED_MODULE_4__.FinishPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showSettings:
          this.popupSettings = new _settings_popup_settings_popup__WEBPACK_IMPORTED_MODULE_7__.SettingsPopup(popupsInner.node);
          newGameBtn.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'reset settings' : 'сбросить настройки';
          newGameBtn.node.onclick = () => this.showWarning(_common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showSettings);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.clearLocalStorage:
          this.popupResult.destroy();
          this.popupResult = new _result_popup_result_popup__WEBPACK_IMPORTED_MODULE_5__.ResultPopup(popupsInner.node);
          if (_common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.get('results') !== null) {
            if (_common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.get('results').length > 0) {
              newGameBtn.node.disabled = false;
            } else {
              newGameBtn.node.disabled = true;
            }
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showNewResult:
          this.popupResult.destroy();
          this.popupResult = new _result_popup_result_popup__WEBPACK_IMPORTED_MODULE_5__.ResultPopup(popupsInner.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.warningResults:
          this.deleteResults();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.warningSettings:
          this.resetSettings();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.closePopup:
          _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.remove(this.popupsListener);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.changeLanguage:
          newGameBtn.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'reset settings' : 'сбросить настройки';
          this.popupSettings.destroy();
          this.popupSettings = new _settings_popup_settings_popup__WEBPACK_IMPORTED_MODULE_7__.SettingsPopup(popupsInner.node);
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(this.popupsListener);
  }
  showWarning(type) {
    _index__WEBPACK_IMPORTED_MODULE_10__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_9__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.showWarningPopup(type);
  }
  resetSettings() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.resetSettings();
    _common_local_storage__WEBPACK_IMPORTED_MODULE_8__.lStorage.remove('settings');
  }
  deleteResults() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.clearResults();
  }
  onNewGameBtn() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setNewGame();
    this.onDeletePopup();
    _index__WEBPACK_IMPORTED_MODULE_10__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_9__.SoundTypes.collect);
  }
  onDeletePopup() {
    _index__WEBPACK_IMPORTED_MODULE_10__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_9__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.closePopup();
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/result-popup/result-popup.ts":
/*!********************************************************************!*\
  !*** ./src/ts/components/main/popups/result-popup/result-popup.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPopup": () => (/* binding */ ResultPopup)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _result_popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result-popup.scss */ "./src/ts/components/main/popups/result-popup/result-popup.scss");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../index */ "./src/index.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _common_language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/language */ "./src/ts/common/language.ts");
/* eslint-disable no-case-declarations */








class ResultPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'popups_result');
    this.ResultHtmlElements = [];
    const localStorageResult = _common_local_storage__WEBPACK_IMPORTED_MODULE_2__.lStorage.get('results') || [];
    this.createTable(localStorageResult);
    this.resultPopupListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_6__.StateOptions.changeLanguage:
          this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_3__.state.getLanguage());
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_6__.StateOptions.closePopup:
          _common_state__WEBPACK_IMPORTED_MODULE_3__.state.onUpdate.remove(this.resultPopupListener);
          break;
      }
    };
    this.switchLang(_common_state__WEBPACK_IMPORTED_MODULE_3__.state.getLanguage());
    _common_state__WEBPACK_IMPORTED_MODULE_3__.state.onUpdate.add(this.resultPopupListener);
  }
  createTable(localStorage) {
    const table = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'table', 'popups_result_table');
    const tHead = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](table.node, 'thead', 'popups_result_thead');
    const tBody = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](table.node, 'tbody', 'popup_result_tbody');
    const tableTitleInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tHead.node, 'tr', 'popups_result_title');
    const tabletitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableTitleInner.node, 'th', 'popups_result_title');
    tabletitle.node.colSpan = 4;
    this.ResultHtmlElements.push(tabletitle.node);
    const lang = _common_state__WEBPACK_IMPORTED_MODULE_3__.state.getLanguage();
    const tableInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tBody.node, 'tr', 'popups_result_tr');
    new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${lang ? 'Place' : 'Место'}`);
    new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${lang ? 'Frame-size' : 'Размер поля'}`);
    new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${lang ? 'Moves' : 'Ходы'}`);
    new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${lang ? 'Time' : 'Время'}`);
    if (localStorage.length > 0) {
      localStorage.forEach((el, i) => {
        const tableInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tBody.node, 'tr', 'popups_result_tr');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${i + 1}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${el.frameSize}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${el.moves}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_td', `${el.time}`);
        const deleteResult = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](tableInner.node, 'td', 'popups_result_delete');
        deleteResult.node.onclick = () => this.deleteResult(i);
      });
    } else {
      new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'th', 'popups_result_empty', `${lang ? `It's empty here for now` : 'Пока здесь пусто'}`);
    }
  }
  switchLang(currentLang) {
    this.ResultHtmlElements.forEach((el, i) => {
      el.textContent = `${(0,_common_language__WEBPACK_IMPORTED_MODULE_7__.correctTranslater)(currentLang, _common_language__WEBPACK_IMPORTED_MODULE_7__.TList.results)[i]}`;
    });
  }
  deleteResult(targetIndex) {
    _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes["delete"]);
    _common_state__WEBPACK_IMPORTED_MODULE_3__.state.deleteTargetFromStorage(targetIndex);
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/settings-popup/settings-popup.ts":
/*!************************************************************************!*\
  !*** ./src/ts/components/main/popups/settings-popup/settings-popup.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPopup": () => (/* binding */ SettingsPopup)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/language */ "./src/ts/common/language.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _settings_popup_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-popup.scss */ "./src/ts/components/main/popups/settings-popup/settings-popup.scss");
/* harmony import */ var _swither_switcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swither/switcher */ "./src/ts/components/main/popups/settings-popup/swither/switcher.ts");
/* harmony import */ var _volume_volume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./volume/volume */ "./src/ts/components/main/popups/settings-popup/volume/volume.ts");







class SettingsPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'settings');
    const settingsTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'settings_title', _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? 'Settings' : 'Настройки');
    const settingsInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'settings_inner');
    const leftInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](settingsInner.node, 'div', 'settings_left');
    const rightInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](settingsInner.node, 'div', 'settings_right');
    const theme = new _swither_switcher__WEBPACK_IMPORTED_MODULE_5__.Switcher(leftInner.node, _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.themeEN : _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.themeRU);
    const animation = new _swither_switcher__WEBPACK_IMPORTED_MODULE_5__.Switcher(leftInner.node, _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.animEN : _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.animRU);
    const language = new _swither_switcher__WEBPACK_IMPORTED_MODULE_5__.Switcher(leftInner.node, _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.langEN : _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.langRU);
    const sound = new _swither_switcher__WEBPACK_IMPORTED_MODULE_5__.Switcher(rightInner.node, _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.soundEN : _common_language__WEBPACK_IMPORTED_MODULE_1__.TRANSLATE.settings.soundRU);
    const volume = new _volume_volume__WEBPACK_IMPORTED_MODULE_6__.Volume(sound.node);
    this.settingsPopupListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeTheme:
          theme.changeTheme();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeAnimation:
          animation.changeAnimation();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeLanguage:
          language.changeLanguage();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeSound:
          sound.changeSound();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeLanguage:
          _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.remove(this.settingsPopupListener);
          settingsTitle.node.textContent = _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage() ? 'Settings' : 'Настройки';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.closePopup:
          _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.remove(this.settingsPopupListener);
          break;
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.add(this.settingsPopupListener);
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/settings-popup/swither/switcher.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/components/main/popups/settings-popup/swither/switcher.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Switcher": () => (/* binding */ Switcher),
/* harmony export */   "SwitcherTitles": () => (/* binding */ SwitcherTitles)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../index */ "./src/index.ts");
/* harmony import */ var _switcher_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switcher.scss */ "./src/ts/components/main/popups/settings-popup/swither/switcher.scss");






var SwitcherTitles;
(function (SwitcherTitles) {
  SwitcherTitles["Theme"] = "Theme";
  SwitcherTitles["Animation"] = "Animation";
  SwitcherTitles["Language"] = "Language";
  SwitcherTitles["Sound"] = "Sound";
})(SwitcherTitles || (SwitcherTitles = {}));
var SwitcherTitlesRU;
(function (SwitcherTitlesRU) {
  SwitcherTitlesRU["Theme"] = "\u0422\u0435\u043C\u0430";
  SwitcherTitlesRU["Animation"] = "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F";
  SwitcherTitlesRU["Language"] = "\u042F\u0437\u044B\u043A";
  SwitcherTitlesRU["Sound"] = "\u0417\u0432\u0443\u043A";
})(SwitcherTitlesRU || (SwitcherTitlesRU = {}));
class Switcher extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, argSwitcher) {
    super(parentNode, 'div', 'switcher');
    this.argSwitcher = argSwitcher;
    const title = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h3', 'switcher_title', argSwitcher.title);
    const switcherInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'switcher_inner');
    const label = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](switcherInner.node, 'label', 'switcher_switch');
    const input = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](label.node, 'input', 'switcher_checkbox');
    input.node.type = 'checkbox';
    input.node.onclick = () => this.onChange(input.node.checked, argSwitcher.title);
    this.input = input;
    const span = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](label.node, 'span', 'switcher_slider');
    const switcherValue = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](switcherInner.node, 'p', 'switcher_value');
    this.switcherValue = switcherValue;
    this.initIdentifyStates(input.node, argSwitcher.values, switcherValue.node, argSwitcher.title);
  }
  changeTheme() {
    if (this.argSwitcher.title === SwitcherTitles.Theme || this.argSwitcher.title === SwitcherTitlesRU.Theme) {
      _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.input);
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getTheme()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
      }
    }
  }
  changeAnimation() {
    if (this.argSwitcher.title === SwitcherTitles.Animation || this.argSwitcher.title === SwitcherTitlesRU.Animation) {
      _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.input);
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getAnimation()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
      }
    }
  }
  changeLanguage() {
    if (this.argSwitcher.title === SwitcherTitles.Language || this.argSwitcher.title === SwitcherTitlesRU.Language) {
      _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.input);
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
      }
    }
  }
  changeSound() {
    if (this.argSwitcher.title === SwitcherTitles.Sound || this.argSwitcher.title === SwitcherTitlesRU.Sound) {
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSound()) {
        this.switcherValue.node.textContent = this.argSwitcher.values[0];
        this.input.node.checked = true;
      } else {
        this.switcherValue.node.textContent = this.argSwitcher.values[1];
        this.input.node.checked = false;
      }
    }
  }
  initIdentifyStates(input, valuesArr, valueTitle, type) {
    if (type === SwitcherTitles.Animation || type === SwitcherTitlesRU.Animation) {
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getAnimation()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[0];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[1];
      }
    }
    if (type === SwitcherTitles.Sound || type === SwitcherTitlesRU.Sound) {
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSound()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[0];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[1];
      }
    }
    if (type === SwitcherTitles.Language || type === SwitcherTitlesRU.Language) {
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[0];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[1];
      }
    }
    if (type === SwitcherTitles.Theme || type === SwitcherTitlesRU.Theme) {
      if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getTheme()) {
        input.checked = true;
        valueTitle.textContent = valuesArr[1];
      } else {
        input.checked = false;
        valueTitle.textContent = valuesArr[0];
      }
    }
  }
  onChange(flag, type) {
    if (type === SwitcherTitles.Theme || type === SwitcherTitlesRU.Theme) {
      _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setTheme(flag);
    }
    if (type === SwitcherTitles.Animation || type === SwitcherTitlesRU.Animation) {
      _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setAnimation(flag);
    }
    if (type === SwitcherTitles.Sound || type === SwitcherTitlesRU.Sound) {
      _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setSound(flag);
      if (+_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getVolume() > 0) {
        _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setVolume('0');
      } else {
        _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setVolume(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLastVolume());
      }
    }
    if (type === SwitcherTitles.Language || type === SwitcherTitlesRU.Language) {
      _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setLanguage(flag);
    }
    _common_local_storage__WEBPACK_IMPORTED_MODULE_1__.lStorage.put('settings', _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSettings());
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/settings-popup/volume/volume.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/components/main/popups/settings-popup/volume/volume.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Volume": () => (/* binding */ Volume)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _volume_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volume.scss */ "./src/ts/components/main/popups/settings-popup/volume/volume.scss");
/* harmony import */ var _assets_svg_volume_on_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/svg/volume-on.svg */ "./src/assets/svg/volume-on.svg");
/* harmony import */ var _assets_svg_volume_off_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../assets/svg/volume-off.svg */ "./src/assets/svg/volume-off.svg");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../index */ "./src/index.ts");








class Volume extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'volume');
    const volumeIcon = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'img', 'volume_icon');
    volumeIcon.node.alt = 'volume';
    volumeIcon.node.src = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume() === '0' ? _assets_svg_volume_off_svg__WEBPACK_IMPORTED_MODULE_3__ : _assets_svg_volume_on_svg__WEBPACK_IMPORTED_MODULE_2__;
    volumeIcon.node.onclick = () => this.onToggleVolume();
    this.icon = volumeIcon.node;
    const input = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'input', 'volume_input');
    input.node.type = 'range';
    input.node.style.background = `linear-gradient(to right, #ffa500 ${_common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume()}%, #ffa500 0%, #fff ${_common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume()}%, white 100%)`;
    input.node.value = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume();
    input.node.oninput = () => this.setVolume(input.node.value);
    input.node.onchange = () => this.playSound();
    this.input = input.node;
  }
  playSound() {
    _index__WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.volume);
  }
  setVolume(value) {
    _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setLastVolume(value);
    _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setVolume(value);
    _common_local_storage__WEBPACK_IMPORTED_MODULE_5__.lStorage.put('settings', _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getSettings());
    this.showChanges();
  }
  showChanges() {
    const value = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume();
    this.input.value = value;
    this.input.style.background = `linear-gradient(to right, #ffa500 ${value}%, #ffa500 0%, #fff ${value}%, white 100%)`;
    if (+value === 0) {
      this.icon.src = _assets_svg_volume_off_svg__WEBPACK_IMPORTED_MODULE_3__;
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setSound(false);
    } else {
      this.icon.src = _assets_svg_volume_on_svg__WEBPACK_IMPORTED_MODULE_2__;
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setSound(true);
    }
  }
  onToggleVolume() {
    _index__WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.btn);
    const volume = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume();
    if (+volume > 0) {
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setLastVolume(volume);
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setVolume('0');
    } else {
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setVolume(_common_state__WEBPACK_IMPORTED_MODULE_4__.state.getLastVolume());
    }
    _common_local_storage__WEBPACK_IMPORTED_MODULE_5__.lStorage.put('settings', _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getSettings());
    this.showChanges();
  }
}

/***/ }),

/***/ "./src/ts/components/main/popups/warning-popup/warning-popup.ts":
/*!**********************************************************************!*\
  !*** ./src/ts/components/main/popups/warning-popup/warning-popup.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarningPopup": () => (/* binding */ WarningPopup)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./src/ts/common/control.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _warning_popup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning-popup.scss */ "./src/ts/components/main/popups/warning-popup/warning-popup.scss");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../index */ "./src/index.ts");





class WarningPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'warning');
    const popupInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'warning_inner');
    const popupText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupInner.node, 'p', 'warning_text', _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'Are you sure?' : 'Вы уверены?');
    const popupBtnContainer = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupInner.node, 'div', 'warning_btns');
    const btnTrue = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupBtnContainer.node, 'button', 'warning_btn', _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'Yes' : 'Да');
    btnTrue.node.onclick = () => this.onTrue();
    const btnFalse = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupBtnContainer.node, 'button', 'warning_btn', _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getLanguage() ? 'No' : 'Нет');
    btnFalse.node.onclick = () => this.onClosePopup();
  }
  onTrue() {
    _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onClickWarning();
  }
  onClosePopup() {
    _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.closeWarningPopup();
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Regular.eot */ "./src/assets/fonts/Thasadith-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Regular.woff */ "./src/assets/fonts/Thasadith-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Regular.ttf */ "./src/assets/fonts/Thasadith-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Regular.woff2 */ "./src/assets/fonts/Thasadith-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Bold.eot */ "./src/assets/fonts/Thasadith-Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Bold.woff */ "./src/assets/fonts/Thasadith-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Thasadith-Bold.ttf */ "./src/assets/fonts/Thasadith-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Regular.eot */ "./src/assets/fonts/Inter-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Regular.woff */ "./src/assets/fonts/Inter-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Regular.ttf */ "./src/assets/fonts/Inter-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Regular.woff2 */ "./src/assets/fonts/Inter-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Bold.eot */ "./src/assets/fonts/Inter-Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Bold.woff */ "./src/assets/fonts/Inter-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Bold.ttf */ "./src/assets/fonts/Inter-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Bold.woff2 */ "./src/assets/fonts/Inter-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image/main-bg-light-preload.jpg */ "./src/assets/image/main-bg-light-preload.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image/main-bg-light.jpg */ "./src/assets/image/main-bg-light.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_16___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Thasadith\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: local(\"☺\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Thasadith\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  src: local(\"☺\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff2\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Inter\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  src: local(\"☺\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Inter\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  src: local(\"☺\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"woff2\");\n  font-weight: bold;\n  font-style: normal;\n}\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-size: 10px;\n  height: 100%;\n  background: black;\n}\n\nbody {\n  font-family: \"Thasadith\", sans-serif;\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  font-weight: 400;\n  position: relative;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n  background-size: cover;\n  background-position: center;\n}\n\n.body_original {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.wrapper_bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  user-select: none;\n  pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss","webpack://./src/style/fonts.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,wBAAA;EACA,4CAAA;EACA,4LAAA;EAGA,mBAAA;EACA,kBAAA;ADCF;ACEA;EACE,wBAAA;EACA,4CAAA;EACA,4LAAA;EAGA,iBAAA;EACA,kBAAA;ADFF;ACKA;EACE,oBAAA;EACA,4CAAA;EACA,6LAAA;EAGA,gBAAA;EACA,kBAAA;ADLF;ACQA;EACE,oBAAA;EACA,6CAAA;EACA,+LAAA;EAEA,iBAAA;EACA,kBAAA;ADPF;AAzBA;;;EAGE,mBAAA;AA2BF;;AAxBA;EACE,sBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AA2BF;;AAxBA;EACE,oCEnBY;EFoBZ,iBAAA;EACA,mBAAA;EACA,gBEnBI;EFoBJ,kBAAA;EACA,0DAAA;EACA,sBAAA;EACA,2BAAA;AA2BF;;AAxBA;EACE,0DAAA;AA2BF;;AAxBA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AA2BF;AA1BE;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AA4BJ","sourcesContent":["@import './fonts.scss';\n@import '../../node_modules/normalize.css/normalize.css';\n@import './variables.scss';\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-size: 10px;\n  height: 100%;\n  background: black;\n}\n\nbody {\n  font-family: $font-family;\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  font-weight: $fwr;\n  position: relative;\n  background-image: url('../assets/image/main-bg-light-preload.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n.body_original {\n  background-image: url('../assets/image/main-bg-light.jpg');\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  &_bg {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    overflow: hidden;\n    user-select: none;\n    pointer-events: none;\n  }\n}\n","@font-face {\n  font-family: 'Thasadith';\n  src: url('../assets/fonts/Thasadith-Regular.eot');\n  src: local('☺'), url('../assets/fonts/Thasadith-Regular.woff') format('woff'),\n    url('../assets/fonts/Thasadith-Regular.ttf') format('truetype'),\n    url('../assets/fonts/Thasadith-Regular.woff2') format('woff2');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Thasadith';\n  src: url('../assets/fonts/Thasadith-Bold.eot');\n  src: local('☺'), url('../assets/fonts/Thasadith-Bold.woff') format('woff'),\n    url('../assets/fonts/Thasadith-Bold.ttf') format('truetype'),\n    url('../assets/fonts/Thasadith-Bold.woff') format('woff2');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inter';\n  src: url('../assets/fonts/Inter-Regular.eot');\n  src: local('☺'), url('../assets/fonts/Inter-Regular.woff') format('woff'),\n    url('../assets/fonts/Inter-Regular.ttf') format('truetype'),\n    url('../assets/fonts/Inter-Regular.woff2') format('woff2');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inter';\n  src: url('../assets/fonts/Inter-Bold.eot');\n  src: local('☺'), url('../assets/fonts/Inter-Bold.woff') format('woff'),\n    url('../assets/fonts/Inter-Bold.ttf') format('truetype'), url('../assets/fonts/Inter-Bold.woff2') format('woff2');\n  font-weight: bold;\n  font-style: normal;\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/footer/footer.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/footer/footer.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n  background: rgba(20, 19, 17, 0.5);\n  backdrop-filter: blur(0.6rem);\n  position: relative;\n  z-index: 1;\n}\n.footer_year {\n  font-size: 1.5rem;\n  line-height: 1.2rem;\n  color: #fff;\n  margin-left: 4rem;\n}\n.footer_link {\n  font-size: 1.5rem;\n  line-height: 1.2rem;\n  color: #fff;\n  text-decoration: none;\n  margin-right: 4rem;\n  transition: 0.2s linear;\n}\n.footer_link:hover {\n  color: orange;\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/footer/footer.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,iCAAA;EACA,6BAAA;EACA,kBAAA;EACA,UAAA;AADF;AAEE;EACE,iBAAA;EACA,mBAAA;EACA,WCRS;EDST,iBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,mBAAA;EACA,WCdS;EDeT,qBAAA;EACA,kBAAA;EACA,uBAAA;AAAJ;AACI;EACE,aAAA;EACA,YAAA;AACN","sourcesContent":["@import '../../../assets/../style/variables.scss';\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n  background: rgba(20, 19, 17, 0.5);\n  backdrop-filter: blur(0.6rem);\n  position: relative;\n  z-index: 1;\n  &_year {\n    font-size: 1.5rem;\n    line-height: 1.2rem;\n    color: $color-text;\n    margin-left: 4rem;\n  }\n  &_link {\n    font-size: 1.5rem;\n    line-height: 1.2rem;\n    color: $color-text;\n    text-decoration: none;\n    margin-right: 4rem;\n    transition: 0.2s linear;\n    &:hover {\n      color: orange;\n      opacity: 0.5;\n    }\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/header/header.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/header/header.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header_item_btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n}\n.header_item_btn:hover {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.header_item_btn:active {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.header_item_btn:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.header_mobile_btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  user-select: none;\n  background: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n  width: 10rem;\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n}\n.header_mobile_btn:hover {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.header_mobile_btn:active {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.header_mobile_btn:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.header {\n  background: rgba(20, 19, 17, 0.5);\n  backdrop-filter: blur(0.6rem);\n}\n.header_nav {\n  padding: 1.5rem 0rem;\n}\n.header_list {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.header_list_item {\n  user-select: none;\n}\n.header_mobile_btn_active {\n  background: rgb(142, 122, 61);\n}\n.header_list_item {\n  max-width: 15rem;\n  width: 100%;\n}\n.header_item_btn_active {\n  background: rgb(142, 122, 61);\n}\n.header_list_item:not(:last-child) {\n  margin-right: 2rem;\n}\n.header_item_link {\n  color: black;\n  text-decoration: none;\n}\n.header_burger {\n  display: none;\n}\n\n@media (max-width: 670px) {\n  .header_item_btn {\n    font-size: 2.1rem;\n  }\n}\n@media (max-width: 570px) {\n  .header {\n    height: 7rem;\n  }\n  .header_mobile_btn {\n    display: block;\n    position: absolute;\n  }\n  .header_nav {\n    padding: 0;\n  }\n  .header_list {\n    height: 100vh;\n    position: fixed;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 7rem;\n    opacity: 0;\n    transform: translateY(-500rem);\n    transition: linear 0.5s;\n    z-index: -1;\n    background: rgba(21, 22, 19, 0.86);\n    backdrop-filter: blur(7.5px);\n    width: 100%;\n  }\n  .header_list_item:not(:last-child) {\n    margin-right: 0;\n  }\n  .header_list_item:nth-child(2) {\n    display: none;\n  }\n  .header_list_item {\n    max-width: inherit;\n    width: 100%;\n    height: 6rem;\n  }\n  .header_item_btn {\n    font-size: 2.5rem;\n    line-height: 140%;\n  }\n  .header_list_show {\n    display: flex;\n    transform: translateY(0rem);\n    opacity: 1;\n    z-index: 1002;\n  }\n  .header_burger {\n    display: block;\n    position: fixed;\n    right: 2rem;\n    top: 1rem;\n    padding-top: 2rem;\n    cursor: pointer;\n    width: 4rem;\n    transition: linear 0.2s;\n    z-index: 1002;\n  }\n  .header_burger_item {\n    display: block;\n    height: 0.4rem;\n    background-color: beige;\n    margin-bottom: 0.5rem;\n    transition: all 0.5s;\n  }\n  .header_burger_item_rotate {\n    z-index: 1003;\n  }\n  .header_burger_item_rotate:nth-child(1) {\n    margin-bottom: -3px;\n    transform: rotate(45deg);\n  }\n  .header_burger_item_rotate:nth-child(2) {\n    transform: rotate(-45deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/variables.scss","webpack://./src/ts/components/header/header.scss"],"names":[],"mappings":"AAWA;EACE,iBAAA;EACA,iBAAA;EACA,YAAA;EACA,WATW;EAUX,eAAA;EACA,iBAAA;EACA,YAAA;EACA,+EAAA;EAEA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;ACXF;ADYE;EACE,mKAAA;EAEA,YAAA;ACXJ;ADaE;EACE,mKAAA;EAEA,YAAA;ACZJ;ADcE;EACE,YAAA;EACA,mBAAA;ACZJ;;ADgBA;EACE,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,WAxCW;EAyCX,eAAA;EACA,iBAAA;EACA,iGAzCU;EA0CV,YAAA;EAEA,uBAAA;EACA,kBAAA;EACA,mBAAA;ACdF;ADeE;EACE,mKAAA;EAEA,YAAA;ACdJ;ADgBE;EACE,mKAAA;EAEA,YAAA;ACfJ;ADiBE;EACE,YAAA;EACA,mBAAA;ACfJ;;AAlDA;EACE,iCAAA;EACA,6BAAA;AAqDF;AApDE;EACE,oBAAA;AAsDJ;AApDE;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;AAsDJ;AApDE;EACE,iBAAA;AAsDJ;AAjDE;EACE,6BAAA;AAmDJ;AAjDE;EACE,gBAAA;EACA,WAAA;AAmDJ;AA9CE;EACE,6BAAA;AAgDJ;AA9CE;EACE,kBAAA;AAgDJ;AA9CE;EACE,YDjCY;ECkCZ,qBAAA;AAgDJ;AA9CE;EACE,aAAA;AAgDJ;;AA5CA;EAEI;IACE,iBAAA;EA8CJ;AACF;AA1CA;EACE;IACE,YAAA;EA4CF;EA3CE;IACE,cAAA;IACA,kBAAA;EA6CJ;EA3CE;IACE,UAAA;EA6CJ;EA3CE;IACE,aAAA;IACA,eAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,2BAAA;IACA,iBAAA;IACA,UAAA;IACA,8BAAA;IACA,uBAAA;IACA,WAAA;IACA,kCAAA;IACA,4BAAA;IACA,WAAA;EA6CJ;EA5CI;IACE,eAAA;EA8CN;EA5CI;IACE,aAAA;EA8CN;EA3CE;IACE,kBAAA;IACA,WAAA;IACA,YAAA;EA6CJ;EA3CE;IACE,iBAAA;IACA,iBAAA;EA6CJ;EA3CE;IACE,aAAA;IACA,2BAAA;IACA,UAAA;IACA,aAAA;EA6CJ;EA3CE;IACE,cAAA;IACA,eAAA;IACA,WAAA;IACA,SAAA;IACA,iBAAA;IACA,eAAA;IACA,WAAA;IACA,uBAAA;IACA,aAAA;EA6CJ;EA3CE;IACE,cAAA;IACA,cAAA;IACA,uBAAA;IACA,qBAAA;IACA,oBAAA;EA6CJ;EA5CI;IACE,aAAA;EA8CN;EA7CM;IACE,mBAAA;IACA,wBAAA;EA+CR;EA7CM;IACE,yBAAA;EA+CR;AACF","sourcesContent":["$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n","@import '../../../style/variables.scss';\n\n.header {\n  background: rgba(20, 19, 17, 0.5);\n  backdrop-filter: blur(0.6rem);\n  &_nav {\n    padding: 1.5rem 0rem;\n  }\n  &_list {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  &_list_item {\n    user-select: none;\n  }\n  &_mobile_btn {\n    @extend %header-mobile-btn;\n  }\n  &_mobile_btn_active {\n    background: rgb(142, 122, 61);\n  }\n  &_list_item {\n    max-width: 15rem;\n    width: 100%;\n  }\n  &_item_btn {\n    @extend %header-btns;\n  }\n  &_item_btn_active {\n    background: rgb(142, 122, 61);\n  }\n  &_list_item:not(:last-child) {\n    margin-right: 2rem;\n  }\n  &_item_link {\n    color: $default-color;\n    text-decoration: none;\n  }\n  &_burger {\n    display: none;\n  }\n}\n\n@media (max-width: 670px) {\n  .header {\n    &_item_btn {\n      font-size: 2.1rem;\n    }\n  }\n}\n\n@media (max-width: 570px) {\n  .header {\n    height: 7rem;\n    &_mobile_btn {\n      display: block;\n      position: absolute;\n    }\n    &_nav {\n      padding: 0;\n    }\n    &_list {\n      height: 100vh;\n      position: fixed;\n      display: none;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start;\n      padding-top: 7rem;\n      opacity: 0;\n      transform: translateY(-500rem);\n      transition: linear 0.5s;\n      z-index: -1;\n      background: rgba(21, 22, 19, 0.86);\n      backdrop-filter: blur(7.5px);\n      width: 100%;\n      &_item:not(:last-child) {\n        margin-right: 0;\n      }\n      &_item:nth-child(2) {\n        display: none;\n      }\n    }\n    &_list_item {\n      max-width: inherit;\n      width: 100%;\n      height: 6rem;\n    }\n    &_item_btn {\n      font-size: 2.5rem;\n      line-height: 140%;\n    }\n    &_list_show {\n      display: flex;\n      transform: translateY(0rem);\n      opacity: 1;\n      z-index: 1002;\n    }\n    &_burger {\n      display: block;\n      position: fixed;\n      right: 2rem;\n      top: 1rem;\n      padding-top: 2rem;\n      cursor: pointer;\n      width: 4rem;\n      transition: linear 0.2s;\n      z-index: 1002;\n    }\n    &_burger_item {\n      display: block;\n      height: 0.4rem;\n      background-color: beige;\n      margin-bottom: 0.5rem;\n      transition: all 0.5s;\n      &_rotate {\n        z-index: 1003;\n        &:nth-child(1) {\n          margin-bottom: -3px;\n          transform: rotate(45deg);\n        }\n        &:nth-child(2) {\n          transform: rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/counters/counter.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/counters/counter.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main_counters {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 2rem;\n  width: 100%;\n}\n.main_counters_block_right {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  position: relative;\n  z-index: 1;\n}\n.main_counters_time_number {\n  width: 16rem;\n}\n.main_counters_moves {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  position: relative;\n  z-index: 1;\n}\n.main_counters_text {\n  margin-right: 0.5rem;\n}\n.main_counters_time_text {\n  margin-right: 0.5rem;\n}\n.main_counters_txt {\n  font-size: 3.7rem;\n  line-height: 140%;\n  color: #0b0a0a;\n  margin: 0;\n}\n\n@media (max-width: 1920px) and (max-height: 1000px) {\n  .main_counters {\n    max-width: 57rem;\n  }\n}\n@media (max-width: 870px) {\n  .main_counters {\n    max-width: 55rem;\n  }\n  .main_counters_time_number {\n    width: 13rem;\n  }\n  .main_counters_txt {\n    font-size: 2.9rem;\n  }\n}\n@media (max-width: 570px) {\n  .main_counters {\n    max-width: 50rem;\n  }\n}\n@media (max-width: 450px) {\n  .main_counters {\n    margin: 0;\n  }\n  .main_counters_time_number {\n    width: 10rem;\n  }\n  .main_counters_moves {\n    width: 100%;\n  }\n  .main_counters_txt {\n    font-size: 2.1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/counters/counter.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;AADF;AAEE;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AAAJ;AAEE;EACE,YAAA;AAAJ;AAEE;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AAAJ;AAEE;EACE,oBAAA;AAAJ;AAEE;EACE,oBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,cC5Be;ED6Bf,SAAA;AAAJ;;AAIA;EACE;IACE,gBAAA;EADF;AACF;AAIA;EACE;IACE,gBAAA;EAFF;EAGE;IACE,YAAA;EADJ;EAGE;IACE,iBAAA;EADJ;AACF;AAKA;EACE;IACE,gBAAA;EAHF;AACF;AAMA;EACE;IACE,SAAA;EAJF;EAKE;IACE,YAAA;EAHJ;EAKE;IACE,WAAA;EAHJ;EAKE;IACE,iBAAA;EAHJ;AACF","sourcesContent":["@import '../../../../style/variables.scss';\n\n.main_counters {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 2rem;\n  width: 100%;\n  &_block_right {\n    display: flex;\n    align-items: center;\n    user-select: none;\n    position: relative;\n    z-index: 1;\n  }\n  &_time_number {\n    width: 16rem;\n  }\n  &_moves {\n    display: flex;\n    align-items: center;\n    user-select: none;\n    position: relative;\n    z-index: 1;\n  }\n  &_text {\n    margin-right: 0.5rem;\n  }\n  &_time_text {\n    margin-right: 0.5rem;\n  }\n  &_txt {\n    font-size: 3.7rem;\n    line-height: 140%;\n    color: $color-text-black;\n    margin: 0;\n  }\n}\n\n@media (max-width: 1920px) and (max-height: 1000px) {\n  .main_counters {\n    max-width: 57rem;\n  }\n}\n\n@media (max-width: 870px) {\n  .main_counters {\n    max-width: 55rem;\n    &_time_number {\n      width: 13rem;\n    }\n    &_txt {\n      font-size: 2.9rem;\n    }\n  }\n}\n\n@media (max-width: 570px) {\n  .main_counters {\n    max-width: 50rem;\n  }\n}\n\n@media (max-width: 450px) {\n  .main_counters {\n    margin: 0;\n    &_time_number {\n      width: 10rem;\n    }\n    &_moves {\n      width: 100%;\n    }\n    &_txt {\n      font-size: 2.1rem;\n    }\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/frame-size/frame-size.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/frame-size/frame-size.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main_frame_other_size {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  user-select: none;\n}\n.main_frame_other_size:hover {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.main_frame_other_size:active {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.main_frame_other_size:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.main_frame_btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: #fff;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n}\n.main_frame_btn:hover {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.main_frame_btn:active {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.main_frame_btn:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.main_frame {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  margin-top: 3.8rem;\n}\n.main_frame_block {\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.main_frame_text {\n  margin: 0;\n}\n.main_frame_size {\n  margin: 0;\n  margin-left: 1rem;\n}\n.main_frame_other {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3rem;\n  user-select: none;\n  width: 100%;\n}\n.main_frame_other_text {\n  margin: 0;\n}\n.main_frame_other_size:not(:last-child) {\n  margin-right: 0.4rem;\n}\n.main_frame_other_size_active {\n  background: rgb(142, 122, 61);\n}\n.main_frame_btn_active {\n  background: rgb(142, 122, 61);\n}\n\n@media (max-width: 870px) {\n  .main_frame {\n    max-width: 55rem;\n    margin-top: 2rem;\n  }\n}\n@media (max-width: 670px) {\n  .main_frame {\n    max-width: 50rem;\n    margin-top: 4rem;\n  }\n  .main_frame_other_size {\n    font-size: 2.1rem;\n  }\n}\n@media (max-width: 570px) {\n  .main_frame {\n    max-width: inherit;\n    margin-top: 4rem;\n  }\n  .main_frame_other_size {\n    font-size: 2.1rem;\n  }\n}\n@media (max-width: 450px) {\n  .main_frame {\n    max-width: inherit;\n    margin-top: 4rem;\n  }\n  .main_frame_other_size {\n    font-size: 1.7rem;\n  }\n  .main_frame_btn {\n    font-size: 2.1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/variables.scss","webpack://./src/ts/components/main/frame-size/frame-size.scss"],"names":[],"mappings":"AAuEA;EACE,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,+EAAA;EACA,2BAAA;EACA,uBAAA;EACA,YAAA;EACA,WAzEW;EA0EX,eAAA;EACA,iBAAA;ACtEF;ADuEE;EACE,mKAAA;EAEA,YAAA;ACtEJ;ADwEE;EACE,mKAAA;EAEA,YAAA;ACvEJ;ADyEE;EACE,YAAA;EACA,mBAAA;ACvEJ;;AD0EA;EACE,iBAAA;EACA,iBAAA;EACA,YAAA;EACA,WA/FW;EAgGX,oBAAA;EACA,kBAAA;EACA,WAAA;EACA,+EAAA;EAEA,2BAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;ACxEF;ADyEE;EACE,mKAAA;EAEA,YAAA;ACxEJ;AD0EE;EACE,mKAAA;EAEA,YAAA;ACzEJ;AD2EE;EACE,YAAA;EACA,mBAAA;ACzEJ;;AAhDA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AAmDF;AAlDE;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AAoDJ;AAlDE;EACE,SAAA;AAoDJ;AAlDE;EACE,SAAA;EACA,iBAAA;AAoDJ;AAlDE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;AAoDJ;AAlDE;EACE,SAAA;AAoDJ;AAhDI;EACE,oBAAA;AAkDN;AA/CE;EACE,6BAAA;AAiDJ;AA5CE;EACE,6BAAA;AA8CJ;;AA1CA;EACE;IACE,gBAAA;IACA,gBAAA;EA6CF;AACF;AA1CA;EACE;IACE,gBAAA;IACA,gBAAA;EA4CF;EA3CE;IACE,iBAAA;EA6CJ;AACF;AAzCA;EACE;IACE,kBAAA;IACA,gBAAA;EA2CF;EA1CE;IACE,iBAAA;EA4CJ;AACF;AAxCA;EACE;IACE,kBAAA;IACA,gBAAA;EA0CF;EAzCE;IACE,iBAAA;EA2CJ;EAzCE;IACE,iBAAA;EA2CJ;AACF","sourcesContent":["$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n","@import '../../../../style/variables.scss';\n\n.main_frame {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  margin-top: 3.8rem;\n  &_block {\n    display: flex;\n    align-items: center;\n    user-select: none;\n  }\n  &_text {\n    margin: 0;\n  }\n  &_size {\n    margin: 0;\n    margin-left: 1rem;\n  }\n  &_other {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 3rem;\n    user-select: none;\n    width: 100%;\n  }\n  &_other_text {\n    margin: 0;\n  }\n  &_other_size {\n    @extend %frame-btns;\n    &:not(:last-child) {\n      margin-right: 0.4rem;\n    }\n  }\n  &_other_size_active {\n    background: rgb(142, 122, 61);\n  }\n  &_btn {\n    @extend %collect-btn;\n  }\n  &_btn_active {\n    background: rgb(142, 122, 61);\n  }\n}\n\n@media (max-width: 870px) {\n  .main_frame {\n    max-width: 55rem;\n    margin-top: 2rem;\n  }\n}\n\n@media (max-width: 670px) {\n  .main_frame {\n    max-width: 50rem;\n    margin-top: 4rem;\n    &_other_size {\n      font-size: 2.1rem;\n    }\n  }\n}\n\n@media (max-width: 570px) {\n  .main_frame {\n    max-width: inherit;\n    margin-top: 4rem;\n    &_other_size {\n      font-size: 2.1rem;\n    }\n  }\n}\n\n@media (max-width: 450px) {\n  .main_frame {\n    max-width: inherit;\n    margin-top: 4rem;\n    &_other_size {\n      font-size: 1.7rem;\n    }\n    &_btn {\n      font-size: 2.1rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/game/game.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/game/game.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main_game {\n  margin: 0 auto;\n  max-width: 65rem;\n  width: 100%;\n}\n.main_game_over {\n  position: relative;\n  background: rgba(0, 0, 0, 0.4);\n  user-select: none;\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.main_game_container {\n  display: grid;\n  padding: 0.5rem;\n  grid-gap: 0.5rem;\n  background: rgba(20, 19, 17, 0.64);\n  backdrop-filter: blur(5px);\n  box-shadow: 0rem 0rem 8rem 4rem #fff;\n}\n.main_game_container_3x3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.main_game_container_4x4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.main_game_container_5x5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.main_game_container_6x6 {\n  grid-template-columns: repeat(6, 1fr);\n}\n.main_game_container_7x7 {\n  grid-template-columns: repeat(7, 1fr);\n}\n.main_game_container_8x8 {\n  grid-template-columns: repeat(8, 1fr);\n}\n.main_game_square {\n  font-size: 4.8rem;\n  line-height: 140%;\n  color: #fff;\n  aspect-ratio: 1/1;\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: linear 0.2s;\n  user-select: none;\n  border: 0.6rem solid #aeb1ab;\n  background: #3d3d3d;\n  opacity: 0.8;\n}\n.main_game_square_3x3 {\n  font-size: 4.8rem;\n}\n.main_game_square_4x4 {\n  font-size: 4.4rem;\n  border: 0.55rem solid #aeb1ab;\n}\n.main_game_square_5x5 {\n  font-size: 4rem;\n  border: 0.5rem solid #aeb1ab;\n}\n.main_game_square_6x6 {\n  font-size: 3.6rem;\n  border: 0.45rem solid #aeb1ab;\n}\n.main_game_square_7x7 {\n  font-size: 3.2rem;\n  border: 0.35rem solid #aeb1ab;\n}\n.main_game_square_8x8 {\n  font-size: 2.8rem;\n  border: 0.3rem solid #aeb1ab;\n}\n.main_game_square_empty {\n  border: none;\n  cursor: auto;\n  outline: none;\n  user-select: none;\n  z-index: 0;\n  background: none;\n}\n\n@media (max-width: 1920px) and (max-height: 1000px) {\n  .main_game {\n    max-width: 57rem;\n  }\n}\n@media (max-width: 870px) {\n  .main_game {\n    max-width: 55rem;\n  }\n  .main_game_container {\n    box-shadow: 0rem 0rem 5rem 4rem #fff;\n  }\n}\n@media (max-width: 670px) {\n  .main_game {\n    max-width: 50rem;\n  }\n  .main_game_container {\n    box-shadow: 0rem 0rem 6rem 3rem #fff;\n  }\n}\n@media (max-width: 450px) {\n  .main_game_square {\n    font-size: 2.1rem;\n    border: 0.3rem solid #aeb1ab;\n  }\n  .main_game_square_empty {\n    border: none;\n  }\n}\n@media (max-width: 350px) {\n  .main_game_square {\n    font-size: 1.7rem;\n    border: 0.2rem solid #aeb1ab;\n  }\n  .main_game_square_empty {\n    border: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/game/game.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,cAAA;EACA,gBAAA;EACA,WAAA;AADF;AAEE;EACE,kBAAA;EACA,8BAAA;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,YAAA;AAAJ;AAEE;EACE,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kCAAA;EACA,0BAAA;EACA,oCAAA;AAAJ;AACI;EACE,qCAAA;AACN;AACI;EACE,qCAAA;AACN;AACI;EACE,qCAAA;AACN;AACI;EACE,qCAAA;AACN;AACI;EACE,qCAAA;AACN;AACI;EACE,qCAAA;AACN;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,WCrCS;EDsCT,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,iBAAA;EACA,4BAAA;EACA,mBAAA;EACA,YAAA;AAAJ;AACI;EACE,iBAAA;AACN;AACI;EACE,iBAAA;EACA,6BAAA;AACN;AACI;EACE,eAAA;EACA,4BAAA;AACN;AACI;EACE,iBAAA;EACA,6BAAA;AACN;AACI;EACE,iBAAA;EACA,6BAAA;AACN;AACI;EACE,iBAAA;EACA,4BAAA;AACN;AAEE;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,UAAA;EACA,gBAAA;AAAJ;;AAIA;EACE;IACE,gBAAA;EADF;AACF;AAIA;EACE;IACE,gBAAA;EAFF;EAGE;IACE,oCAAA;EADJ;AACF;AAKA;EACE;IACE,gBAAA;EAHF;EAIE;IACE,oCAAA;EAFJ;AACF;AAMA;EAEI;IACE,iBAAA;IACA,4BAAA;EALJ;EAMI;IACE,YAAA;EAJN;AACF;AAQA;EAEI;IACE,iBAAA;IACA,4BAAA;EAPJ;EAQI;IACE,YAAA;EANN;AACF","sourcesContent":["@import '../../../../assets/../style/variables.scss';\n\n.main_game {\n  margin: 0 auto;\n  max-width: 65rem;\n  width: 100%;\n  &_over {\n    position: relative;\n    background: rgba(0, 0, 0, 0.4);\n    user-select: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    opacity: 0.7;\n  }\n  &_container {\n    display: grid;\n    padding: 0.5rem;\n    grid-gap: 0.5rem;\n    background: rgba(20, 19, 17, 0.64);\n    backdrop-filter: blur(5px);\n    box-shadow: 0rem 0rem 8rem 4rem #fff;\n    &_3x3 {\n      grid-template-columns: repeat(3, 1fr);\n    }\n    &_4x4 {\n      grid-template-columns: repeat(4, 1fr);\n    }\n    &_5x5 {\n      grid-template-columns: repeat(5, 1fr);\n    }\n    &_6x6 {\n      grid-template-columns: repeat(6, 1fr);\n    }\n    &_7x7 {\n      grid-template-columns: repeat(7, 1fr);\n    }\n    &_8x8 {\n      grid-template-columns: repeat(8, 1fr);\n    }\n  }\n  &_square {\n    font-size: 4.8rem;\n    line-height: 140%;\n    color: $color-text;\n    aspect-ratio: 1/1;\n    cursor: pointer;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: linear 0.2s;\n    user-select: none;\n    border: 0.6rem solid #aeb1ab;\n    background: #3d3d3d;\n    opacity: 0.8;\n    &_3x3 {\n      font-size: 4.8rem;\n    }\n    &_4x4 {\n      font-size: 4.4rem;\n      border: 0.55rem solid #aeb1ab;\n    }\n    &_5x5 {\n      font-size: 4rem;\n      border: 0.5rem solid #aeb1ab;\n    }\n    &_6x6 {\n      font-size: 3.6rem;\n      border: 0.45rem solid #aeb1ab;\n    }\n    &_7x7 {\n      font-size: 3.2rem;\n      border: 0.35rem solid #aeb1ab;\n    }\n    &_8x8 {\n      font-size: 2.8rem;\n      border: 0.3rem solid #aeb1ab;\n    }\n  }\n  &_square_empty {\n    border: none;\n    cursor: auto;\n    outline: none;\n    user-select: none;\n    z-index: 0;\n    background: none;\n  }\n}\n\n@media (max-width: 1920px) and (max-height: 1000px) {\n  .main_game {\n    max-width: 57rem;\n  }\n}\n\n@media (max-width: 870px) {\n  .main_game {\n    max-width: 55rem;\n    &_container {\n      box-shadow: 0rem 0rem 5rem 4rem #fff;\n    }\n  }\n}\n\n@media (max-width: 670px) {\n  .main_game {\n    max-width: 50rem;\n    &_container {\n      box-shadow: 0rem 0rem 6rem 3rem #fff;\n    }\n  }\n}\n\n@media (max-width: 450px) {\n  .main_game {\n    &_square {\n      font-size: 2.1rem;\n      border: 0.3rem solid #aeb1ab;\n      &_empty {\n        border: none;\n      }\n    }\n  }\n}\n@media (max-width: 350px) {\n  .main_game {\n    &_square {\n      font-size: 1.7rem;\n      border: 0.2rem solid #aeb1ab;\n      &_empty {\n        border: none;\n      }\n    }\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/main.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/main.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n  flex-grow: 1;\n}\n\n@media (max-width: 870px) {\n  .main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n@media (max-width: 570px) {\n  .main {\n    position: relative;\n    margin: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/main.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;AACF;;AAEA;EACE;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;EACF;AACF;AAEA;EACE;IACE,kBAAA;IACA,SAAA;EAAF;AACF","sourcesContent":[".main {\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n  flex-grow: 1;\n}\n\n@media (max-width: 870px) {\n  .main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 570px) {\n  .main {\n    position: relative;\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/collect-popup/collect-popup.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/collect-popup/collect-popup.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popups_collect {\n  width: 100%;\n  height: 100%;\n  margin-top: 4.5rem;\n}\n.popups_collect_info {\n  margin-top: 4rem;\n}\n.popups_collect_title {\n  font-size: 3.5rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n}\n.popups_collect_time {\n  font-size: 2.4rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n.popups_collect_total_time {\n  font-size: 2.4rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n.popups_collect_moves {\n  font-size: 2.4rem;\n  line-height: 140%;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/collect-popup/collect-popup.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AADF;AAEE;EACE,gBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCPS;EDQT,SAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCdS;EDeT,SAAA;EACA,mBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCtBS;EDuBT,SAAA;EACA,mBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAAJ","sourcesContent":["@import '../../../../../style/variables.scss';\n\n.popups_collect {\n  width: 100%;\n  height: 100%;\n  margin-top: 4.5rem;\n  &_info {\n    margin-top: 4rem;\n  }\n  &_title {\n    font-size: 3.5rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n  }\n  &_time {\n    font-size: 2.4rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n  &_total_time {\n    font-size: 2.4rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n  &_moves {\n    font-size: 2.4rem;\n    line-height: 140%;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/finish-popup/finish-popup.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/finish-popup/finish-popup.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popups_finish {\n  margin-top: 4.5rem;\n}\n.popups_finish_info {\n  margin-top: 4rem;\n}\n.popups_finish_title {\n  font-size: 3.5rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n}\n.popups_finish_time {\n  font-size: 2.4rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n.popups_finish_moves {\n  font-size: 2.4rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/finish-popup/finish-popup.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;AADF;AAEE;EACE,gBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCLS;EDMT,SAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCZS;EDaT,SAAA;EACA,mBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCpBS;EDqBT,SAAA;EACA,mBAAA;AAAJ","sourcesContent":["@import '../../../../../style/variables.scss';\n\n.popups_finish {\n  margin-top: 4.5rem;\n  &_info {\n    margin-top: 4rem;\n  }\n  &_title {\n    font-size: 3.5rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n  }\n  &_time {\n    font-size: 2.4rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n  &_moves {\n    font-size: 2.4rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/popups.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/popups.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/svg/close-btn.svg */ "./src/assets/svg/close-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popups_new_btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: #fff;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n}\n.popups_new_btn:hover {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.popups_new_btn:active {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.popups_new_btn:disabled {\n  background: #3d3d3d;\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.popups_close_btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n}\n.popups_close_btn:hover {\n  opacity: 0.5;\n}\n\n.popups {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  backdrop-filter: blur(0.75rem);\n}\n.popups_inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 90rem;\n  width: 100%;\n  min-height: 35rem;\n  border: 0.5rem solid #7e7d7b;\n  padding-bottom: 7rem;\n  background: rgba(21, 22, 19, 0.86);\n  backdrop-filter: blur(7.5px);\n}\n.popups_close_btn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center/contain;\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  border: none;\n}\n@media (max-width: 540px) {\n  .popups_inner {\n    padding-bottom: 4rem;\n  }\n  .popups_result_title {\n    font-size: 3rem;\n  }\n  .popups_close_btn {\n    width: 3rem;\n    height: 3rem;\n  }\n  .popups_new_btn {\n    font-size: 2.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/variables.scss","webpack://./src/ts/components/main/popups/popups.scss"],"names":[],"mappings":"AA8HA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,4EAAA;EACA,WAhIW;EAiIX,eAAA;EACA,iBAAA;EACA,uBAAA;AC7HF;AD8HE;EACE,mKAAA;EAEA,YAAA;AC7HJ;AD+HE;EACE,mKAAA;EAEA,YAAA;AC9HJ;ADgIE;EACE,mBAAA;EACA,YAAA;EACA,mBAAA;AC9HJ;;ADyJA;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;ACtJF;ADuJE;EACE,YAAA;ACrJJ;;AAjCA;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,MAAA;EACA,8BAAA;EACA,aAAA;EACA,8BAAA;AAoCF;AAnCE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,iBAAA;EACA,4BAAA;EACA,oBAAA;EACA,kCAAA;EACA,4BAAA;AAqCJ;AAnCE;EAEE,4EAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;AAoCJ;AA7BA;EAEI;IACE,oBAAA;EA8BJ;EA5BE;IACE,eAAA;EA8BJ;EA5BE;IACE,WAAA;IACA,YAAA;EA8BJ;EA5BE;IACE,iBAAA;EA8BJ;AACF","sourcesContent":["$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n","@import '../../../../style/variables.scss';\n\n.popups {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  backdrop-filter: blur(0.75rem);\n  &_inner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    max-width: 90rem;\n    width: 100%;\n    min-height: 35rem;\n    border: 0.5rem solid #7e7d7b;\n    padding-bottom: 7rem;\n    background: rgba(21, 22, 19, 0.86);\n    backdrop-filter: blur(7.5px);\n  }\n  &_close_btn {\n    @extend %close-btn;\n    background: url('../../../../assets/svg/close-btn.svg') no-repeat center/contain;\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    border: none;\n  }\n  &_new_btn {\n    @extend %popup-btn;\n  }\n}\n\n@media (max-width: 540px) {\n  .popups {\n    &_inner {\n      padding-bottom: 4rem;\n    }\n    &_result_title {\n      font-size: 3rem;\n    }\n    &_close_btn {\n      width: 3rem;\n      height: 3rem;\n    }\n    &_new_btn {\n      font-size: 2.5rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/result-popup/result-popup.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/result-popup/result-popup.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/svg/close-btn.svg */ "./src/assets/svg/close-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popups_result_delete {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n}\n.popups_result_delete:hover {\n  opacity: 0.5;\n}\n\n.popups_result {\n  width: 100%;\n  height: 100%;\n}\n.popups_result_title {\n  font-size: 4rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n}\n.popups_result_table {\n  width: 100%;\n  height: 100%;\n  border-collapse: collapse;\n}\n.popups_result_thead {\n  height: 10rem;\n  border-bottom: 0.5rem solid #7f7e7c;\n}\n.popups_result_empty {\n  font-size: 5rem;\n  line-height: 140%;\n  color: #fff;\n  opacity: 0.3;\n  display: flex;\n  justify-content: center;\n}\n.popups_result_th {\n  font-size: 4rem;\n  line-height: 140%;\n}\n.popups_result_tr {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  transition: linear 0.3s;\n}\n.popups_result_tr:hover:not(:first-child) {\n  background: #7f7e7c;\n  opacity: 0.5;\n}\n.popups_result_td {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: 0.2rem solid #7f7e7c;\n  z-index: 2;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n.popups_result_td:nth-child(1) {\n  width: 7rem;\n  border-left: none;\n}\n.popups_result_td:nth-child(4) {\n  border-right: none;\n}\n.popups_result_list {\n  font-size: 2.4rem;\n  line-height: 140%;\n  padding: 0;\n  list-style: none;\n  color: #fff;\n  width: 100%;\n  margin: 0rem 0rem 4rem;\n}\n.popups_result_wrapper {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  background: linear-gradient(180deg, rgba(148, 146, 141, 0.11) 0%, rgba(255, 255, 255, 0.12) 100%);\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n}\n.popups_result_item {\n  font-size: 3.5rem;\n  line-height: 140%;\n  color: white;\n}\n.popups_result_item:nth-child(2) {\n  max-width: 30rem;\n  width: 100%;\n}\n.popups_result_item:nth-child(3) {\n  max-width: 18.5rem;\n  width: 100%;\n}\n.popups_result_item:nth-child(4) {\n  max-width: 28rem;\n  width: 100%;\n}\n.popups_result_count {\n  max-width: 3rem;\n  width: 100%;\n}\n.popups_result_delete {\n  position: absolute;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center/contain;\n  right: 1rem;\n  top: 1.3rem;\n}\n\n@media (max-width: 470px) {\n  .popups_result_title {\n    font-size: 3rem;\n  }\n  .popups_result_td {\n    font-size: 1.6rem;\n  }\n  .popups_result_empty {\n    font-size: 3rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/variables.scss","webpack://./src/ts/components/main/popups/result-popup/result-popup.scss"],"names":[],"mappings":"AAkLA;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;ACjLF;ADkLE;EACE,YAAA;AChLJ;;AANA;EACE,WAAA;EACA,YAAA;AASF;AARE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,WDHS;ACab;AARE;EACE,WAAA;EACA,YAAA;EACA,yBAAA;AAUJ;AARE;EACE,aAAA;EACA,mCAAA;AAUJ;AARE;EACE,eAAA;EACA,iBAAA;EACA,WDjBS;ECkBT,YAAA;EACA,aAAA;EACA,uBAAA;AAUJ;AARE;EACE,eAAA;EACA,iBAAA;AAUJ;AARE;EACE,kBAAA;EACA,kBAAA;EACA,WD7BS;EC8BT,uBAAA;AAUJ;AATI;EACE,mBAAA;EACA,YAAA;AAWN;AARE;EACE,iBAAA;EACA,iBAAA;EACA,4BAAA;EACA,UAAA;EACA,mBAAA;EACA,sBAAA;AAUJ;AATI;EACE,WAAA;EACA,iBAAA;AAWN;AATI;EACE,kBAAA;AAWN;AARE;EACE,iBAAA;EACA,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,WDxDS;ECyDT,WAAA;EACA,sBAAA;AAUJ;AARE;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,iGAAA;EACA,mBAAA;EACA,eAAA;AAUJ;AARE;EACE,iBAAA;EACA,iBAAA;EACA,YAAA;AAUJ;AATI;EACE,gBAAA;EACA,WAAA;AAWN;AATI;EACE,kBAAA;EACA,WAAA;AAWN;AATI;EACE,gBAAA;EACA,WAAA;AAWN;AARE;EACE,eAAA;EACA,WAAA;AAUJ;AARE;EAEE,kBAAA;EACA,4EAAA;EACA,WAAA;EACA,WAAA;AASJ;;AALA;EAEI;IACE,eAAA;EAOJ;EALE;IACE,iBAAA;EAOJ;EALE;IACE,eAAA;EAOJ;AACF","sourcesContent":["$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n","@import '../../../../../style/variables.scss';\n\n.popups_result {\n  width: 100%;\n  height: 100%;\n  &_title {\n    font-size: 4rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n  }\n  &_table {\n    width: 100%;\n    height: 100%;\n    border-collapse: collapse;\n  }\n  &_thead {\n    height: 10rem;\n    border-bottom: 0.5rem solid #7f7e7c;\n  }\n  &_empty {\n    font-size: 5rem;\n    line-height: 140%;\n    color: $color-text;\n    opacity: 0.3;\n    display: flex;\n    justify-content: center;\n  }\n  &_th {\n    font-size: 4rem;\n    line-height: 140%;\n  }\n  &_tr {\n    position: relative;\n    text-align: center;\n    color: $color-text;\n    transition: linear 0.3s;\n    &:hover:not(:first-child) {\n      background: #7f7e7c;\n      opacity: 0.5;\n    }\n  }\n  &_td {\n    font-size: 2.5rem;\n    line-height: 140%;\n    border: 0.2rem solid #7f7e7c;\n    z-index: 2;\n    padding-top: 0.7rem;\n    padding-bottom: 0.7rem;\n    &:nth-child(1) {\n      width: 7rem;\n      border-left: none;\n    }\n    &:nth-child(4) {\n      border-right: none;\n    }\n  }\n  &_list {\n    font-size: 2.4rem;\n    line-height: 140%;\n    padding: 0;\n    list-style: none;\n    color: $color-text;\n    width: 100%;\n    margin: 0rem 0rem 4rem;\n  }\n  &_wrapper {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    padding: 0;\n    background: linear-gradient(180deg, rgba(148, 146, 141, 0.11) 0%, rgba(255, 255, 255, 0.12) 100%);\n    margin-bottom: 1rem;\n    padding: 0.5rem;\n  }\n  &_item {\n    font-size: 3.5rem;\n    line-height: 140%;\n    color: white;\n    &:nth-child(2) {\n      max-width: 30rem;\n      width: 100%;\n    }\n    &:nth-child(3) {\n      max-width: 18.5rem;\n      width: 100%;\n    }\n    &:nth-child(4) {\n      max-width: 28rem;\n      width: 100%;\n    }\n  }\n  &_count {\n    max-width: 3rem;\n    width: 100%;\n  }\n  &_delete {\n    @extend %close-btn;\n    position: absolute;\n    background: url('../../../../../assets/svg/close-btn.svg') no-repeat center/contain;\n    right: 1rem;\n    top: 1.3rem;\n  }\n}\n\n@media (max-width: 470px) {\n  .popups_result {\n    &_title {\n      font-size: 3rem;\n    }\n    &_td {\n      font-size: 1.6rem;\n    }\n    &_empty {\n      font-size: 3rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/settings-popup.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/settings-popup.scss ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings {\n  margin-top: 2rem;\n  max-width: 80rem;\n  width: 100%;\n}\n.settings_title {\n  font-size: 4rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n}\n.settings_inner {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.settings_right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n@media (max-width: 480px) {\n  .settings_inner {\n    flex-direction: column;\n    justify-content: center;\n    margin: 0;\n  }\n  .settings_title {\n    font-size: 2.1rem;\n    margin-bottom: 1.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/settings-popup/settings-popup.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;EACA,gBAAA;EACA,WAAA;AADF;AAEE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCJS;EDKT,SAAA;AAAJ;AAEE;EACE,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAEE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AAAJ;;AAIA;EAEI;IACE,sBAAA;IACA,uBAAA;IACA,SAAA;EAFJ;EAIE;IACE,iBAAA;IACA,qBAAA;EAFJ;AACF","sourcesContent":["@import '../../../../../assets/../style/variables.scss';\n\n.settings {\n  margin-top: 2rem;\n  max-width: 80rem;\n  width: 100%;\n  &_title {\n    font-size: 4rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n  }\n  &_inner {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  &_right {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 480px) {\n  .settings {\n    &_inner {\n      flex-direction: column;\n      justify-content: center;\n      margin: 0;\n    }\n    &_title {\n      font-size: 2.1rem;\n      margin-bottom: 1.5rem;\n    }\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/swither/switcher.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/swither/switcher.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".switcher {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n  width: 100%;\n}\n.switcher_title {\n  font-size: 2.7rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n}\n.switcher_inner {\n  display: flex;\n  align-items: center;\n  width: 23rem;\n}\n.switcher_switch {\n  position: relative;\n  display: inline-block;\n  width: 10rem;\n  height: 5rem;\n  margin-right: 2.2rem;\n}\n.switcher_checkbox {\n  display: none;\n}\n.switcher_slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(180deg, rgba(35, 34, 30, 0.59) 0%, rgba(255, 255, 249, 0) 100%);\n  transition: 0.2s linear;\n}\n.switcher_slider::before {\n  position: absolute;\n  content: \"\";\n  height: 4rem;\n  width: 4rem;\n  left: 0.4rem;\n  bottom: 0.5rem;\n  background: linear-gradient(180deg, rgba(226, 226, 226, 0.54) 0%, #bcbcbc 100%);\n  transition: 0.2s linear;\n}\n.switcher_value {\n  font-size: 2.5rem;\n  line-height: 140%;\n  color: #fff;\n}\n\n.switcher_checkbox:checked + .switcher_slider {\n  background: rgba(142, 122, 61, 0.3);\n}\n\n.switcher_checkbox:checked + .switcher_slider::before {\n  transform: translateX(5rem);\n}\n\n@media (max-width: 670px) {\n  .switcher_value {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .switcher {\n    margin-bottom: 2rem;\n  }\n  .switcher_switch {\n    width: 100%;\n    height: 4rem;\n    margin-right: 0;\n    position: relative;\n    z-index: 1;\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .switcher_inner {\n    width: 100%;\n  }\n  .switcher_title {\n    font-size: 1.9rem;\n    margin-bottom: 0.5rem;\n  }\n  .switcher_slider {\n    width: 100%;\n  }\n  .switcher_slider::before {\n    height: 3rem;\n    width: 4rem;\n    left: 0.2rem;\n    bottom: 0.5rem;\n  }\n  .switcher_value {\n    font-size: 1.6rem;\n    position: absolute;\n    transform: translateX(-50%);\n    left: 50%;\n    user-select: none;\n    z-index: 0;\n  }\n  .switcher_checkbox:checked + .switcher_slider::before {\n    transform: translateX(82vw);\n  }\n  .switcher_checkbox:checked + .switcher_value {\n    color: black;\n  }\n  .switcher_checkbox:checked + .switcher_slider {\n    background: rgba(142, 122, 61, 0.3);\n  }\n}\n@media (max-width: 415px) {\n  .switcher_switch {\n    font-size: 2rem;\n  }\n  .switcher_checkbox:checked + .switcher_slider::before {\n    transform: translateX(80vw);\n  }\n}\n@media (max-width: 370px) {\n  .switcher_checkbox:checked + .switcher_slider::before {\n    transform: translateX(76vw);\n  }\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/settings-popup/swither/switcher.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,WAAA;AADF;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WCNS;EDOT,SAAA;AAAJ;AAEE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AAAJ;AAEE;EACE,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;AAAJ;AAEE;EACE,aAAA;AAAJ;AAEE;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,2FAAA;EACA,uBAAA;AAAJ;AACI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,+EAAA;EACA,uBAAA;AACN;AAEE;EACE,iBAAA;EACA,iBAAA;EACA,WC/CS;AD+Cb;;AAIA;EACE,mCAAA;AADF;;AAKA;EACE,2BAAA;AAFF;;AAKA;EAEI;IACE,gBAAA;IACA,mBAAA;EAHJ;AACF;AAOA;EACE;IACE,mBAAA;EALF;EAME;IACE,WAAA;IACA,YAAA;IACA,eAAA;IACA,kBAAA;IACA,UAAA;IACA,iBAAA;IACA,kBAAA;EAJJ;EAME;IACE,WAAA;EAJJ;EAME;IACE,iBAAA;IACA,qBAAA;EAJJ;EAME;IACE,WAAA;EAJJ;EAKI;IACE,YAAA;IACA,WAAA;IACA,YAAA;IACA,cAAA;EAHN;EAME;IACE,iBAAA;IACA,kBAAA;IACA,2BAAA;IACA,SAAA;IACA,iBAAA;IACA,UAAA;EAJJ;EAME;IACE,2BAAA;EAJJ;EAME;IACE,YAAA;EAJJ;EAME;IACE,mCAAA;EAJJ;AACF;AAQA;EAEI;IACE,eAAA;EAPJ;EASE;IACE,2BAAA;EAPJ;AACF;AAWA;EAEI;IACE,2BAAA;EAVJ;AACF","sourcesContent":["@import '../../../../../../assets/../style/variables.scss';\n\n.switcher {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n  width: 100%;\n  &_title {\n    font-size: 2.7rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n  }\n  &_inner {\n    display: flex;\n    align-items: center;\n    width: 23rem;\n  }\n  &_switch {\n    position: relative;\n    display: inline-block;\n    width: 10rem;\n    height: 5rem;\n    margin-right: 2.2rem;\n  }\n  &_checkbox {\n    display: none;\n  }\n  &_slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(180deg, rgba(35, 34, 30, 0.59) 0%, rgba(255, 255, 249, 0) 100%);\n    transition: 0.2s linear;\n    &::before {\n      position: absolute;\n      content: '';\n      height: 4rem;\n      width: 4rem;\n      left: 0.4rem;\n      bottom: 0.5rem;\n      background: linear-gradient(180deg, rgba(226, 226, 226, 0.54) 0%, #bcbcbc 100%);\n      transition: 0.2s linear;\n    }\n  }\n  &_value {\n    font-size: 2.5rem;\n    line-height: 140%;\n    color: $color-text;\n  }\n}\n\n.switcher_checkbox:checked + .switcher_slider {\n  background: rgba(142, 122, 61, 0.3);\n}\n.switcher_checkbox:focus + .switcher_slider {\n}\n.switcher_checkbox:checked + .switcher_slider::before {\n  transform: translateX(5rem);\n}\n\n@media (max-width: 670px) {\n  .switcher {\n    &_value {\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  }\n}\n\n@media (max-width: 480px) {\n  .switcher {\n    margin-bottom: 2rem;\n    &_switch {\n      width: 100%;\n      height: 4rem;\n      margin-right: 0;\n      position: relative;\n      z-index: 1;\n      margin-left: 1rem;\n      margin-right: 1rem;\n    }\n    &_inner {\n      width: 100%;\n    }\n    &_title {\n      font-size: 1.9rem;\n      margin-bottom: 0.5rem;\n    }\n    &_slider {\n      width: 100%;\n      &::before {\n        height: 3rem;\n        width: 4rem;\n        left: 0.2rem;\n        bottom: 0.5rem;\n      }\n    }\n    &_value {\n      font-size: 1.6rem;\n      position: absolute;\n      transform: translateX(-50%);\n      left: 50%;\n      user-select: none;\n      z-index: 0;\n    }\n    &_checkbox:checked + .switcher_slider::before {\n      transform: translateX(82vw);\n    }\n    &_checkbox:checked + .switcher_value {\n      color: black;\n    }\n    &_checkbox:checked + .switcher_slider {\n      background: rgba(142, 122, 61, 0.3);\n    }\n  }\n}\n\n@media (max-width: 415px) {\n  .switcher {\n    &_switch {\n      font-size: 2rem;\n    }\n    &_checkbox:checked + .switcher_slider::before {\n      transform: translateX(80vw);\n    }\n  }\n}\n\n@media (max-width: 370px) {\n  .switcher {\n    &_checkbox:checked + .switcher_slider::before {\n      transform: translateX(76vw);\n    }\n  }\n}\n","$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/volume/volume.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/volume/volume.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".volume {\n  display: flex;\n  align-items: center;\n  margin-left: -6rem;\n  margin-top: 3rem;\n}\n.volume_icon {\n  display: block;\n  min-width: 7rem;\n  height: 7rem;\n  object-fit: contain;\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n.volume_input[type=range] {\n  -webkit-appearance: none;\n  cursor: pointer;\n  height: 0.3rem;\n  outline: none;\n  transition: 0.5s ease-in-out;\n  max-width: 14rem;\n  width: 100%;\n}\n.volume_input[type=range]::-webkit-slider-thumb {\n  appearance: none;\n  appearance: none;\n  width: 0.3rem;\n  height: 2rem;\n  background-color: white;\n  cursor: pointer;\n  transition: ease 0.5s;\n}\n.volume_input[type=range]::-moz-range-thumb {\n  appearance: none;\n  appearance: none;\n  width: 0.3rem;\n  height: 2rem;\n  background-color: white;\n  cursor: pointer;\n  transition: ease 0.5s;\n}\n\n@media (max-width: 480px) {\n  .volume {\n    max-width: 30rem;\n    width: 100%;\n    margin-left: 0;\n    max-width: inherit;\n  }\n  .volume_input::-webkit-slider-thumb {\n    filter: none;\n  }\n  .volume_input::-moz-range-thumb {\n    filter: none;\n  }\n  .volume_input[type=range] {\n    max-width: none;\n    width: 100%;\n    margin-right: 2rem;\n  }\n  .volume_icon {\n    min-width: 5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/settings-popup/volume/volume.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AACF;AAAE;EACE,cAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;AAEJ;AAAE;EACE,wBAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,gBAAA;EACA,WAAA;AAEJ;AAAE;EACE,gBAAA;EAIA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,qBAAA;AADJ;AAGE;EACE,gBAAA;EAIA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,qBAAA;AAJJ;;AAQA;EACE;IACE,gBAAA;IACA,WAAA;IACA,cAAA;IACA,kBAAA;EALF;EAME;IACE,YAAA;EAJJ;EAME;IACE,YAAA;EAJJ;EAME;IACE,eAAA;IACA,WAAA;IACA,kBAAA;EAJJ;EAME;IACE,eAAA;EAJJ;AACF","sourcesContent":[".volume {\n  display: flex;\n  align-items: center;\n  margin-left: -6rem;\n  margin-top: 3rem;\n  &_icon {\n    display: block;\n    min-width: 7rem;\n    height: 7rem;\n    object-fit: contain;\n    cursor: pointer;\n    margin-right: 0.5rem;\n  }\n  &_input[type='range'] {\n    -webkit-appearance: none;\n    cursor: pointer;\n    height: 0.3rem;\n    outline: none;\n    transition: 0.5s ease-in-out;\n    max-width: 14rem;\n    width: 100%;\n  }\n  &_input[type='range']::-webkit-slider-thumb {\n    appearance: none;\n    // filter: drop-shadow(0px 0px 1.2000000476837158px #fff) drop-shadow(0px 0px 2.4000000953674316px #fff)\n    //   drop-shadow(0px 0px 8.399999618530273px #fff) drop-shadow(0px 0px 16.799999237060547px #d9d9d9)\n    //   drop-shadow(0px 0px 28.799999237060547px #d9d9d9) drop-shadow(0px 0px 50.400001525878906px #d9d9d9);\n    appearance: none;\n    width: 0.3rem;\n    height: 2rem;\n    background-color: white;\n    cursor: pointer;\n    transition: ease 0.5s;\n  }\n  &_input[type='range']::-moz-range-thumb {\n    appearance: none;\n    // filter: drop-shadow(0px 0px 1.2000000476837158px #fff) drop-shadow(0px 0px 2.4000000953674316px #fff)\n    //   drop-shadow(0px 0px 8.399999618530273px #fff) drop-shadow(0px 0px 16.799999237060547px #d9d9d9)\n    //   drop-shadow(0px 0px 28.799999237060547px #d9d9d9) drop-shadow(0px 0px 50.400001525878906px #d9d9d9);\n    appearance: none;\n    width: 0.3rem;\n    height: 2rem;\n    background-color: white;\n    cursor: pointer;\n    transition: ease 0.5s;\n  }\n}\n\n@media (max-width: 480px) {\n  .volume {\n    max-width: 30rem;\n    width: 100%;\n    margin-left: 0;\n    max-width: inherit;\n    &_input::-webkit-slider-thumb {\n      filter: none;\n    }\n    &_input::-moz-range-thumb {\n      filter: none;\n    }\n    &_input[type='range'] {\n      max-width: none;\n      width: 100%;\n      margin-right: 2rem;\n    }\n    &_icon {\n      min-width: 5rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/warning-popup/warning-popup.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/warning-popup/warning-popup.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".warning_btn {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: #fff;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n}\n.warning_btn:hover {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n.warning_btn:active {\n  box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff, 0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n  opacity: 0.8;\n}\n\n.warning {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.9);\n  user-select: none;\n  z-index: 1001;\n}\n.warning_inner {\n  max-width: 63.5rem;\n  width: 100%;\n  min-height: 30rem;\n  padding: 1rem;\n  border: 5px solid #7e7d7b;\n  background: linear-gradient(180deg, #1d1e1a 0%, rgba(55, 56, 52, 0) 100%);\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n.warning_text {\n  font-size: 5rem;\n  line-height: 140%;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n  margin-top: 5.7rem;\n}\n.warning_close {\n  position: absolute;\n  right: 2rem;\n  top: 1.5rem;\n  width: 4rem;\n  height: 4rem;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s linear;\n}\n.warning_close:hover {\n  transform: translate(0.9);\n  opacity: 0.8;\n}\n.warning_btns {\n  display: flex;\n  justify-content: center;\n  margin-top: 5rem;\n  margin-bottom: 3.7rem;\n}\n.warning_btn:nth-child(1) {\n  margin-right: 8rem;\n}\n\n@media (max-width: 400px) {\n  .warning_inner {\n    min-height: inherit;\n  }\n  .warning_text {\n    font-size: 4rem;\n    margin-top: 3rem;\n  }\n  .warning_btn {\n    font-size: 2.5rem;\n    line-height: 140%;\n  }\n  .warning_btn:nth-child(1) {\n    margin-right: 3rem;\n  }\n  .warning_btns {\n    margin-bottom: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/variables.scss","webpack://./src/ts/components/main/popups/warning-popup/warning-popup.scss"],"names":[],"mappings":"AA0JA;EACE,iBAAA;EACA,iBAAA;EACA,YAAA;EACA,4EAAA;EACA,WAzJW;EA0JX,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,uBAAA;ACzJF;AD0JE;EACE,mKAAA;EAEA,YAAA;ACzJJ;AD2JE;EACE,mKAAA;EAEA,YAAA;AC1JJ;;AAnBA;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,MAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;AAsBF;AArBE;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,yBAAA;EACA,yEAAA;EACA,kBAAA;EACA,gCAAA;EACA,SAAA;EACA,QAAA;AAuBJ;AArBE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,WDrBS;ECsBT,SAAA;EACA,kBAAA;AAuBJ;AArBE;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;AAuBJ;AAtBI;EACE,yBAAA;EACA,YAAA;AAwBN;AArBE;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,qBAAA;AAuBJ;AAnBI;EACE,kBAAA;AAqBN;;AAhBA;EAEI;IACE,mBAAA;EAkBJ;EAhBE;IACE,eAAA;IACA,gBAAA;EAkBJ;EAhBE;IACE,iBAAA;IACA,iBAAA;EAkBJ;EAjBI;IACE,kBAAA;EAmBN;EAhBE;IACE,gBAAA;EAkBJ;AACF","sourcesContent":["$font-family: 'Thasadith', sans-serif;\n\n$fwb: 700;\n$fwr: 400;\n\n$default-color: black;\n$color-text: #fff;\n$color-text-black: #0b0a0a;\n$color-btn: linear-gradient(180deg, rgba(148, 146, 141, 0.91) 0%, rgba(255, 255, 255, 0.12) 100%);\n$color-square: rgba(61, 61, 61, 0.8);\n\n%header-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  width: 100%;\n  height: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%header-mobile-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  display: none;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  background: $color-btn;\n  width: 10rem;\n\n  transition: 0.2s linear;\n  margin-top: 1.5rem;\n  margin-left: 1.5rem;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n\n%frame-btns {\n  font-size: 2.5rem;\n  line-height: 140%;\n  width: 10.5rem;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  border: none;\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%collect-btn {\n  font-size: 2.5rem;\n  line-height: 140%;\n  border: none;\n  color: $color-text;\n  padding: 0.5rem 0rem;\n  max-width: 25.5rem;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(170, 170, 170, 0.91) 0%, #2e2d2c 100%);\n\n  backdrop-filter: blur(10px);\n  transition: 0.2s linear;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%popup-btn {\n  font-size: 3rem;\n  line-height: 140%;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:disabled {\n    background: #3d3d3d;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n}\n%warning-btns {\n  font-size: 3.5rem;\n  line-height: 140%;\n  border: none;\n  background: linear-gradient(180deg, #23221e 0%, rgba(255, 255, 249, 0) 100%);\n  color: $color-text;\n  cursor: pointer;\n  user-select: none;\n  text-transform: uppercase;\n  height: 5.5rem;\n  max-width: 20rem;\n  width: 100%;\n  transition: 0.2s linear;\n  &:hover {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: 0px 0px 0.72px 0px #fff, 0px 0px 1.44px 0px #fff, 0px 0px 5.04px 0px #fff, 0px 0px 10.08px 0px #fff,\n      0px 0px 17.28px 0px #fff, 0px 0px 30.24px 0px #fff;\n    opacity: 0.8;\n  }\n}\n%close-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n","@import '../../../../../style/variables.scss';\n\n.warning {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.9);\n  user-select: none;\n  z-index: 1001;\n  &_inner {\n    max-width: 63.5rem;\n    width: 100%;\n    min-height: 30rem;\n    padding: 1rem;\n    border: 5px solid #7e7d7b;\n    background: linear-gradient(180deg, #1d1e1a 0%, rgba(55, 56, 52, 0) 100%);\n    position: absolute;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    top: 50%;\n  }\n  &_text {\n    font-size: 5rem;\n    line-height: 140%;\n    text-align: center;\n    color: $color-text;\n    margin: 0;\n    margin-top: 5.7rem;\n  }\n  &_close {\n    position: absolute;\n    right: 2rem;\n    top: 1.5rem;\n    width: 4rem;\n    height: 4rem;\n    border: none;\n    cursor: pointer;\n    transition: 0.2s linear;\n    &:hover {\n      transform: translate(0.9);\n      opacity: 0.8;\n    }\n  }\n  &_btns {\n    display: flex;\n    justify-content: center;\n    margin-top: 5rem;\n    margin-bottom: 3.7rem;\n  }\n  &_btn {\n    @extend %warning-btns;\n    &:nth-child(1) {\n      margin-right: 8rem;\n    }\n  }\n}\n\n@media (max-width: 400px) {\n  .warning {\n    &_inner {\n      min-height: inherit;\n    }\n    &_text {\n      font-size: 4rem;\n      margin-top: 3rem;\n    }\n    &_btn {\n      font-size: 2.5rem;\n      line-height: 140%;\n      &:nth-child(1) {\n        margin-right: 3rem;\n      }\n    }\n    &_btns {\n      margin-bottom: 0;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/ts/components/footer/footer.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/header/header.scss":
/*!**********************************************!*\
  !*** ./src/ts/components/header/header.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/counters/counter.scss":
/*!******************************************************!*\
  !*** ./src/ts/components/main/counters/counter.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./counter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/counters/counter.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/frame-size/frame-size.scss":
/*!***********************************************************!*\
  !*** ./src/ts/components/main/frame-size/frame-size.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frame_size_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./frame-size.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/frame-size/frame-size.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frame_size_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frame_size_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frame_size_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frame_size_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/game/game.scss":
/*!***********************************************!*\
  !*** ./src/ts/components/main/game/game.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/game/game.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/main.scss":
/*!******************************************!*\
  !*** ./src/ts/components/main/main.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/collect-popup/collect-popup.scss":
/*!************************************************************************!*\
  !*** ./src/ts/components/main/popups/collect-popup/collect-popup.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_collect_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./collect-popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/collect-popup/collect-popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_collect_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_collect_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_collect_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_collect_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/finish-popup/finish-popup.scss":
/*!**********************************************************************!*\
  !*** ./src/ts/components/main/popups/finish-popup/finish-popup.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_finish_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./finish-popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/finish-popup/finish-popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_finish_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_finish_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_finish_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_finish_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/popups.scss":
/*!***************************************************!*\
  !*** ./src/ts/components/main/popups/popups.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popups_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./popups.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/popups.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popups_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popups_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popups_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popups_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/result-popup/result-popup.scss":
/*!**********************************************************************!*\
  !*** ./src/ts/components/main/popups/result-popup/result-popup.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./result-popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/result-popup/result-popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/settings-popup/settings-popup.scss":
/*!**************************************************************************!*\
  !*** ./src/ts/components/main/popups/settings-popup/settings-popup.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./settings-popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/settings-popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/settings-popup/swither/switcher.scss":
/*!****************************************************************************!*\
  !*** ./src/ts/components/main/popups/settings-popup/swither/switcher.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_switcher_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!./switcher.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/swither/switcher.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_switcher_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_switcher_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_switcher_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_switcher_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/settings-popup/volume/volume.scss":
/*!*************************************************************************!*\
  !*** ./src/ts/components/main/popups/settings-popup/volume/volume.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_volume_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!./volume.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/settings-popup/volume/volume.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_volume_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_volume_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_volume_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_volume_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ts/components/main/popups/warning-popup/warning-popup.scss":
/*!************************************************************************!*\
  !*** ./src/ts/components/main/popups/warning-popup/warning-popup.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_warning_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./warning-popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ts/components/main/popups/warning-popup/warning-popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_warning_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_warning_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_warning_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_warning_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Inter-Bold.eot":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Inter-Bold.eot ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Bold.eot";

/***/ }),

/***/ "./src/assets/fonts/Inter-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Inter-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-Bold.woff":
/*!******************************************!*\
  !*** ./src/assets/fonts/Inter-Bold.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/Inter-Bold.woff2":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Inter-Bold.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/Inter-Regular.eot":
/*!********************************************!*\
  !*** ./src/assets/fonts/Inter-Regular.eot ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Regular.eot";

/***/ }),

/***/ "./src/assets/fonts/Inter-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Inter-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-Regular.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Inter-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/Inter-Regular.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Inter-Regular.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Regular.woff2";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Bold.eot":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Thasadith-Bold.eot ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Bold.eot";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Thasadith-Bold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Bold.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Thasadith-Bold.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Regular.eot":
/*!************************************************!*\
  !*** ./src/assets/fonts/Thasadith-Regular.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Regular.eot";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Thasadith-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Regular.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Thasadith-Regular.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/Thasadith-Regular.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Thasadith-Regular.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Thasadith-Regular.woff2";

/***/ }),

/***/ "./src/assets/image/main-bg-light-preload.jpg":
/*!****************************************************!*\
  !*** ./src/assets/image/main-bg-light-preload.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-bg-light-preload.jpg";

/***/ }),

/***/ "./src/assets/image/main-bg-light.jpg":
/*!********************************************!*\
  !*** ./src/assets/image/main-bg-light.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-bg-light.jpg";

/***/ }),

/***/ "./src/assets/sound/btn.mp3":
/*!**********************************!*\
  !*** ./src/assets/sound/btn.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/btn.mp3";

/***/ }),

/***/ "./src/assets/sound/collect.mp3":
/*!**************************************!*\
  !*** ./src/assets/sound/collect.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/collect.mp3";

/***/ }),

/***/ "./src/assets/sound/delete.mp3":
/*!*************************************!*\
  !*** ./src/assets/sound/delete.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/delete.mp3";

/***/ }),

/***/ "./src/assets/sound/input.mp3":
/*!************************************!*\
  !*** ./src/assets/sound/input.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/input.mp3";

/***/ }),

/***/ "./src/assets/sound/move.mp3":
/*!***********************************!*\
  !*** ./src/assets/sound/move.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/move.mp3";

/***/ }),

/***/ "./src/assets/sound/popup.mp3":
/*!************************************!*\
  !*** ./src/assets/sound/popup.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/popup.mp3";

/***/ }),

/***/ "./src/assets/sound/robo-win.mp3":
/*!***************************************!*\
  !*** ./src/assets/sound/robo-win.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/robo-win.mp3";

/***/ }),

/***/ "./src/assets/sound/volume.mp3":
/*!*************************************!*\
  !*** ./src/assets/sound/volume.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume.mp3";

/***/ }),

/***/ "./src/assets/sound/win.mp3":
/*!**********************************!*\
  !*** ./src/assets/sound/win.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/win.mp3";

/***/ }),

/***/ "./src/assets/svg/close-btn.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/close-btn.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/close-btn.svg";

/***/ }),

/***/ "./src/assets/svg/volume-off.svg":
/*!***************************************!*\
  !*** ./src/assets/svg/volume-off.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume-off.svg";

/***/ }),

/***/ "./src/assets/svg/volume-on.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/volume-on.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume-on.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle-304b2eaec9fcdcf734bf.js.map