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
  getState() {
    return this._data;
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
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectPuzzle);
  }
  shuffleStart() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStart);
  }
  shuffleStop() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStop);
  }
  collectBtnEnable() {
    state.onUpdate.emit(_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectBtnOff);
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
  getCollectState() {
    return this._data.gameSettings.isCollectStart;
  }
  getResults() {
    return this._data.gameSettings.results;
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
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer */ "./src/ts/components/footer/footer.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header */ "./src/ts/components/header/header.ts");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main */ "./src/ts/components/main/main.ts");




class App extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'wrapper');
    const header = new _header_header__WEBPACK_IMPORTED_MODULE_2__.Header(this.node);
    const main = new _main_main__WEBPACK_IMPORTED_MODULE_3__.Main(this.node);
    const footer = new _footer_footer__WEBPACK_IMPORTED_MODULE_1__.Footer(this.node);
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
    this.headerListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStart:
          this.stateButtons(true);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.shuffleStop:
          this.stateButtons(false);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnDisable:
          this.stateStopBtn(true);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopBtnEnable:
          this.stateStopBtn(false);
          break;
        default:
          return;
      }
    };
    this.navItems.forEach(navLink => {
      const navItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](navList.node, 'li', 'header_list_item');
      const navItemLink = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](navItem.node, 'button', 'header_item_btn', navLink);
      this.navItemsHtmlElements.push(navItemLink.node);
      switch (navLink) {
        case NavItem.Restart:
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setNewGame();
          };
          break;
        case NavItem.Stop:
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStopGame();
          };
          break;
        case NavItem.Results:
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
            this.showResultPopup();
          };
          break;
        case NavItem.Settings:
          navItem.node.onclick = () => {
            _index__WEBPACK_IMPORTED_MODULE_4__.soundControl.playSound(_main_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
            this.showSettings();
          };
          break;
      }
    });
    this.navItemsHtmlElements[1].disabled = true;
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(this.headerListener);
  }
  showSettings() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.createPopup();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.openSettings();
  }
  showResultPopup() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.createPopup();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.showResultPopup();
  }
  stateButtons(flag) {
    this.navItemsHtmlElements.forEach((el, i) => {
      if (i !== 1) {
        flag ? el.disabled = true : el.disabled = false;
      }
    });
  }
  stateStopBtn(flag) {
    flag ? this.navItemsHtmlElements[1].disabled = true : this.navItemsHtmlElements[1].disabled = false; // change stopBtn
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
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");



class Moves extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode);
    const movesBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'main_counters_moves');
    const movesBlockText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](movesBlock.node, 'p', 'main_counters_text', 'Moves: ');
    const movesBlockNumber = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](movesBlock.node, 'p', 'main_counters_number', '0');
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.moveCounter:
          this.makeMove(movesBlockNumber.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.newGame:
          movesBlockNumber.node.textContent = '0';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.winGame:
          _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setResultMoves(Number(movesBlockNumber.node.textContent));
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.setCollectMoves:
          movesBlockNumber.node.textContent = `${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getMoveCounter() + _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectMoves()}`;
          break;
      }
    });
  }
  makeMove(moveNode) {
    moveNode.textContent = `${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getMoveCounter()}`;
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
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/state-types */ "./src/ts/common/state-types.ts");



class Timer extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode);
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
    this.collectSec = 1;
    const timeBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'main_counters_time', '');
    const timeBlockText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](timeBlock.node, 'p', 'main_counters_time_text', 'Time: ');
    const timeBlockNumber = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](timeBlock.node, 'p', 'main_counters_time_number', '00:00:00');
    this.timeNodeHtml = timeBlockNumber.node;
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onUpdate.add(type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.startGame:
          this.setTimer(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getToggleTimer());
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.stopGame:
          this.stopTimer(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getToggleTimer());
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.newGame:
          timeBlockNumber.node.textContent = '00:00:00';
          this.newGame();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.winGame:
          if (timeBlockNumber.node.textContent) {
            _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setResultTime(timeBlockNumber.node.textContent);
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectStartTimer:
          this.setTimer(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getToggleTimer());
          this.setCollectGameTimer();
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.collectStopTimer:
          this.stopTimer(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getStopStartGame(), _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getToggleTimer());
          this.stopCollectGameTimer();
      }
    });
  }
  setCollectGameTimer() {
    const timer = window.setInterval(() => this.collectSec++, 1000);
    this.collectTimer = timer;
  }
  stopCollectGameTimer() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectTimer(String(this.collectSec));
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
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setToggleTimer(true);
    }
  }
  stopTimer(stopStartGame, toggleTimer) {
    if (!stopStartGame && toggleTimer) {
      clearInterval(this.currentTimer);
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setToggleTimer(false);
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






class FrameSize extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'section', 'main_frame');
    this.otherSize = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];
    this.otherSizeHtml = [];
    const currentSize = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getFrameSize();
    const btnCollectPuzzle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'main_frame_btn', 'collect puzzle');
    btnCollectPuzzle.node.onclick = () => _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectPuzzle();
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
      }
    });
  }
  setNewFrameSize(size) {
    _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_3__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setFrameSize(size);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setNewGame();
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
    super(parentNode, 'div', 'main_game');
    this.gameSquareHTML = [];
    this.results = _common_local_storage__WEBPACK_IMPORTED_MODULE_4__.lStorage.get('results') || [];
    const gameContainer = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'main_game_container');
    this.gameContainer = gameContainer.node;
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
    this.gameContainer.classList.add(`main_game_container_${currentGameSize}x${currentGameSize}`);
    for (let i = 0; i < currentGameSize * currentGameSize; i++) {
      const square = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.gameContainer, 'div', 'main_game_square', `${currentGamePuzzle[i]}`);
      this.gameSquareHTML.push(square.node);
      square.node.onclick = () => this.moveByClick(Number(square.node.textContent));
    }
  }
  shuffleCycle() {
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.stopBtnDisable();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStart();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.startCollectTimer();
    let counter = 0;
    const maxShuffle = 0;
    const handle = setInterval(() => {
      this.singleStrokeCycle();
      if (counter === maxShuffle) {
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.stopCollectTimer();
        clearInterval(handle); // stops intervals
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStop();
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
        }
        continue;
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
    const randomNumberforMove = Math.ceil(Math.random() * availableMovesArr.length) - 1; // minus one to adjust the index
    const lastMoveMade = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves()[_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().length - 1][2]; // look at the value at 2 array index
    if (lastMoveMade === availableMovesArr[randomNumberforMove][2]) {
      const filterAvailableMoves = availableMovesArr.filter(el => el[2] !== lastMoveMade); // We remove the last similar move
      return filterAvailableMoves[Math.ceil(Math.random() * filterAvailableMoves.length - 1)]; // choose a random one from the remaining
    }

    return availableMovesArr[randomNumberforMove];
  }
  makeMove(matrix, move, zeroPosition, isCollectPuzzle) {
    const matrixValuePos = matrix[move[0]][move[1]];
    const matrixZeroPos = matrix[zeroPosition[0]][zeroPosition[1]];
    matrix[move[0]][move[1]] = matrixZeroPos;
    matrix[zeroPosition[0]][zeroPosition[1]] = matrixValuePos;
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
    this.handlerDragAndDrop(singleLevelMatrix);
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
      }
      if (currentAvailableMoves.includes(el)) {
        this.gameSquareHTML[i].ondragover = e => {
          e.stopPropagation();
        };
        this.gameSquareHTML[i].draggable = true;
        this.gameSquareHTML[i].ondragstart = event => {
          var _a;
          (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('id', String(currentMatrix[i]));
        };
        this.gameSquareHTML[i].ondrop = event => {
          var _a;
          const move = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('id');
          this.moveByClick(Number(move));
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
    ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.btn);
    const handle = setInterval(() => {
      const positionOfZero = this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField()).emptySquare;
      const spliceLastMove = _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().splice(-1)[0];
      this.makeMove(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField(), spliceLastMove, positionOfZero, true);
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectMoves();
      if (_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getAllMoves().length === 0) {
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setCollectState(false);
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.clearCollectMoves();
        clearInterval(handle); // stops intervals
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.shuffleStop();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.collectBtnDisable();
        _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setWinGame(true);
        this.showCollectResult();
      }
    }, 1);
  }
  moveByClick(squareValue) {
    const availableMoveArr = Object.values(this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField()));
    availableMoveArr.forEach(el => {
      if (el[2] === squareValue) {
        this.makeMove(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField(), el, this.availableMoves(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField()).emptySquare, false);
        this.setMoveInState(_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getGameField());
      }
    });
  }
  setMoveInState(currentGameField) {
    ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.move);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setMove(currentGameField);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setMoveCounter();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setStartGame();
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.stopBtnEnable();
    if (this.isWin()) {
      _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setWinGame(true);
      this.showFinishResult();
      this.setInLocalStorage();
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
    ___WEBPACK_IMPORTED_MODULE_7__.soundControl.playSound(_soundControl__WEBPACK_IMPORTED_MODULE_6__.SoundTypes.win);
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








var SoundTypes;
(function (SoundTypes) {
  SoundTypes["move"] = "move";
  SoundTypes["collect"] = "collect";
  SoundTypes["win"] = "win";
  SoundTypes["btn"] = "btn";
  SoundTypes["input"] = "input";
  SoundTypes["volume"] = "volume";
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
    const sectionGameContainer = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'section', 'main_game_section');
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
    const collectTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'popups_collect_title', 'Puzzle assembled automatically');
    const collectInfo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'popups_collect_info');
    const collectTime = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h4', 'popups_collect_time', `Auto build time: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectTimer()}s`);
    const totalTime = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h2', 'popups_collect_total_time', `Game time: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().time}`);
    const totalMoves = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h2', 'popups_collect_moves', `Total moves: ${_common_state__WEBPACK_IMPORTED_MODULE_1__.state.getResult().moves + _common_state__WEBPACK_IMPORTED_MODULE_1__.state.getCollectMoves()}`);
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
    const finishTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'popups_finish_title', 'Hooray! You have completed the puzzle!');
    const collectInfo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'popups_collect_info');
    const finishTime = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h4', 'popups_finish_time', `Game time: ${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getResult().time}`);
    const finishMoves = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](collectInfo.node, 'h4', 'popups_finish_moves', `Total moves: ${_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getResult().moves + _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getCollectMoves()}`);
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
    const newGameBtn = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupsInner.node, 'button', 'popups_new_btn', 'Restart');
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
          newGameBtn.node.textContent = 'delete all results';
          newGameBtn.node.onclick = () => this.showWarning(_common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showResultPopup);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showFinishPopup:
          this.popupFinish = new _finish_popup_finish_popup__WEBPACK_IMPORTED_MODULE_4__.FinishPopup(popupsInner.node);
          newGameBtn.node.style.display = 'block';
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showSettings:
          this.popupSettings = new _settings_popup_settings_popup__WEBPACK_IMPORTED_MODULE_7__.SettingsPopup(popupsInner.node);
          newGameBtn.node.textContent = 'reset settings';
          newGameBtn.node.onclick = () => this.showWarning(_common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.showSettings);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_2__.StateOptions.clearLocalStorage:
          this.popupResult.destroy();
          this.popupResult = new _result_popup_result_popup__WEBPACK_IMPORTED_MODULE_5__.ResultPopup(popupsInner.node);
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
    _index__WEBPACK_IMPORTED_MODULE_10__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_9__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.setNewGame();
    this.onDeletePopup();
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






class ResultPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'popups_result');
    const resultTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'popups_result_title', 'Your Highest Scores');
    const resultsList = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'ul', 'popups_result_list');
    const localStorageResult = _common_local_storage__WEBPACK_IMPORTED_MODULE_2__.lStorage.get('results') || [];
    localStorageResult.forEach((el, i) => {
      const resultWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](resultsList.node, 'ul', 'popups_result_wrapper');
      const resultCount = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](resultWrapper.node, 'li', 'popups_result_count', `${i + 1}.`);
      for (const key in el) {
        switch (key) {
          case 'frameSize':
            new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](resultWrapper.node, 'li', 'popups_result_item', `Frame size: ${el[key]}`);
            break;
          case 'moves':
            new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](resultWrapper.node, 'li', 'popups_result_item', `Moves: ${el[key]}`);
            break;
          case 'time':
            new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](resultWrapper.node, 'li', 'popups_result_item', `Time: ${el[key]}`);
            break;
        }
      }
      const deleteResult = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](resultWrapper.node, 'span', 'popups_result_delete');
      deleteResult.node.onclick = () => this.deleteResult(i);
    });
  }
  deleteResult(targetIndex) {
    _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes.btn);
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
/* harmony import */ var _settings_popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-popup.scss */ "./src/ts/components/main/popups/settings-popup/settings-popup.scss");
/* harmony import */ var _swither_switcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swither/switcher */ "./src/ts/components/main/popups/settings-popup/swither/switcher.ts");
/* harmony import */ var _volume_volume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume/volume */ "./src/ts/components/main/popups/settings-popup/volume/volume.ts");




class SettingsPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'settings');
    const settingsTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h2', 'settings_title', 'Settings');
    const settingsInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'settings_inner');
    const leftInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](settingsInner.node, 'div', 'settings_left');
    const rightInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](settingsInner.node, 'div', 'settings_right');
    const theme = new _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.Switcher(leftInner.node, {
      title: _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.SwitcherTitles.Theme,
      values: ['Light', 'Dark']
    });
    const animation = new _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.Switcher(leftInner.node, {
      title: _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.SwitcherTitles.Animation,
      values: ['On', 'Off']
    });
    const language = new _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.Switcher(leftInner.node, {
      title: _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.SwitcherTitles.Language,
      values: ['EN', 'RU']
    });
    const sound = new _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.Switcher(rightInner.node, {
      title: _swither_switcher__WEBPACK_IMPORTED_MODULE_2__.SwitcherTitles.Sound,
      values: ['On', 'Off']
    });
    const volume = new _volume_volume__WEBPACK_IMPORTED_MODULE_3__.Volume(rightInner.node);
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
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../index */ "./src/index.ts");
/* harmony import */ var _switcher_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switcher.scss */ "./src/ts/components/main/popups/settings-popup/swither/switcher.scss");







var SwitcherTitles;
(function (SwitcherTitles) {
  SwitcherTitles["Theme"] = "Theme";
  SwitcherTitles["Animation"] = "Animation";
  SwitcherTitles["Language"] = "Language";
  SwitcherTitles["Sound"] = "Sound";
})(SwitcherTitles || (SwitcherTitles = {}));
class Switcher extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, argSwitcher) {
    super(parentNode, 'div', 'switcher');
    const title = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h3', 'switcher_title', argSwitcher.title);
    const switcherInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'switcher_inner');
    const label = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](switcherInner.node, 'label', 'switcher_switch');
    const input = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](label.node, 'input', 'switcher_checkbox');
    input.node.type = 'checkbox';
    input.node.onclick = () => this.onChange(input.node.checked, argSwitcher.title);
    const span = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](label.node, 'span', 'switcher_slider');
    const switcherValue = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](switcherInner.node, 'p', 'switcher_value');
    this.initIdentifyStates(input.node, argSwitcher.values, switcherValue.node, argSwitcher.title);
    this.switcherListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeTheme:
          if (argSwitcher.title === SwitcherTitles.Theme) {
            _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes.input);
            if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getTheme()) {
              switcherValue.node.textContent = argSwitcher.values[1];
            } else {
              switcherValue.node.textContent = argSwitcher.values[0];
            }
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeAnimation:
          if (argSwitcher.title === SwitcherTitles.Animation) {
            _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes.input);
            if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getAnimation()) {
              switcherValue.node.textContent = argSwitcher.values[0];
            } else {
              switcherValue.node.textContent = argSwitcher.values[1];
            }
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeLanguage:
          if (argSwitcher.title === SwitcherTitles.Language) {
            _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes.input);
            if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage()) {
              switcherValue.node.textContent = argSwitcher.values[0];
            } else {
              switcherValue.node.textContent = argSwitcher.values[1];
            }
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.changeSound:
          if (argSwitcher.title === SwitcherTitles.Sound) {
            if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSound()) {
              switcherValue.node.textContent = argSwitcher.values[0];
              input.node.checked = true;
            } else {
              switcherValue.node.textContent = argSwitcher.values[1];
              input.node.checked = false;
            }
          }
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_3__.StateOptions.closePopup:
          _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.remove(this.switcherListener);
          break;
        default:
          _common_local_storage__WEBPACK_IMPORTED_MODULE_1__.lStorage.put('settings', _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSettings());
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_2__.state.onUpdate.add(this.switcherListener);
  }
  initIdentifyStates(input, valuesArr, valueTitle, type) {
    switch (type) {
      case SwitcherTitles.Animation:
        if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getAnimation()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[0];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[1];
        }
        break;
      case SwitcherTitles.Sound:
        if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSound()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[0];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[1];
        }
        break;
      case SwitcherTitles.Language:
        if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLanguage()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[0];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[1];
        }
        break;
      case SwitcherTitles.Theme:
        if (_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getTheme()) {
          input.checked = true;
          valueTitle.textContent = valuesArr[1];
        } else {
          input.checked = false;
          valueTitle.textContent = valuesArr[0];
        }
        break;
    }
  }
  onChange(flag, type) {
    switch (type) {
      case SwitcherTitles.Theme:
        _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setTheme(flag);
        break;
      case SwitcherTitles.Animation:
        _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setAnimation(flag);
        break;
      case SwitcherTitles.Sound:
        _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setSound(flag);
        if (+_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getVolume() > 0) {
          _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setVolume('0');
        } else {
          _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setVolume(_common_state__WEBPACK_IMPORTED_MODULE_2__.state.getLastVolume());
        }
        break;
      case SwitcherTitles.Language:
        _common_state__WEBPACK_IMPORTED_MODULE_2__.state.setLanguage(flag);
        break;
      default:
        _common_local_storage__WEBPACK_IMPORTED_MODULE_1__.lStorage.put('settings', _common_state__WEBPACK_IMPORTED_MODULE_2__.state.getSettings());
    }
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
/* harmony import */ var _assets_image_volume_on_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/image/volume-on.png */ "./src/assets/image/volume-on.png");
/* harmony import */ var _assets_image_volume_off_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../assets/image/volume-off.png */ "./src/assets/image/volume-off.png");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/state */ "./src/ts/common/state.ts");
/* harmony import */ var _common_state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/state-types */ "./src/ts/common/state-types.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/local-storage */ "./src/ts/common/local-storage.ts");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../index */ "./src/index.ts");









class Volume extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'volume');
    const volumeIcon = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'img', 'volume_icon');
    volumeIcon.node.alt = 'volume';
    volumeIcon.node.src = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume() === '0' ? _assets_image_volume_off_png__WEBPACK_IMPORTED_MODULE_3__ : _assets_image_volume_on_png__WEBPACK_IMPORTED_MODULE_2__;
    volumeIcon.node.onclick = () => this.onToggleVolume();
    const input = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'input', 'volume_input');
    input.node.type = 'range';
    input.node.style.background = `linear-gradient(to right, #ff2253 ${_common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume()}%, #ff2253 0%, #fff ${_common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume()}%, white 100%)`;
    input.node.value = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume();
    input.node.oninput = () => this.setVolume(input.node.value);
    input.node.onchange = () => this.playSound();
    this.volumeListener = type => {
      switch (type) {
        case _common_state_types__WEBPACK_IMPORTED_MODULE_5__.StateOptions.changeVolume:
          this.showChanges(input.node, volumeIcon.node);
          break;
        case _common_state_types__WEBPACK_IMPORTED_MODULE_5__.StateOptions.closePopup:
          _common_state__WEBPACK_IMPORTED_MODULE_4__.state.onUpdate.remove(this.volumeListener);
          break;
        default:
          _common_local_storage__WEBPACK_IMPORTED_MODULE_6__.lStorage.put('settings', _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getSettings());
      }
    };
    _common_state__WEBPACK_IMPORTED_MODULE_4__.state.onUpdate.add(this.volumeListener);
  }
  playSound() {
    _index__WEBPACK_IMPORTED_MODULE_8__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_7__.SoundTypes.volume);
  }
  setVolume(value) {
    _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setLastVolume(value);
    _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setVolume(value);
  }
  showChanges(input, icon) {
    const value = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume();
    input.value = value;
    input.style.background = `linear-gradient(to right, #ff2253 ${value}%, #ff2253 0%, #fff ${value}%, white 100%)`;
    if (+value === 0) {
      icon.src = _assets_image_volume_off_png__WEBPACK_IMPORTED_MODULE_3__;
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setSound(false);
    } else {
      icon.src = _assets_image_volume_on_png__WEBPACK_IMPORTED_MODULE_2__;
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setSound(true);
    }
  }
  onToggleVolume() {
    _index__WEBPACK_IMPORTED_MODULE_8__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_7__.SoundTypes.btn);
    const volume = _common_state__WEBPACK_IMPORTED_MODULE_4__.state.getVolume();
    if (+volume > 0) {
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setLastVolume(volume);
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setVolume('0');
    } else {
      _common_state__WEBPACK_IMPORTED_MODULE_4__.state.setVolume(_common_state__WEBPACK_IMPORTED_MODULE_4__.state.getLastVolume());
    }
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
/* harmony import */ var _assets_svg_close_btn_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/svg/close-btn.svg */ "./src/assets/svg/close-btn.svg");
/* harmony import */ var _game_soundControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../game/soundControl */ "./src/ts/components/main/game/soundControl.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../index */ "./src/index.ts");






class WarningPopup extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'warning');
    const popupInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'warning_inner');
    const popupText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupInner.node, 'p', 'warning_text', 'Are you sure?');
    const popupClose = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupInner.node, 'img', 'warning_close');
    popupClose.node.alt = 'close popup';
    popupClose.node.src = _assets_svg_close_btn_svg__WEBPACK_IMPORTED_MODULE_3__;
    popupClose.node.onclick = () => this.onClosePopup();
    const popupBtnContainer = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupInner.node, 'div', 'warning_btns');
    const btnTrue = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupBtnContainer.node, 'button', 'warning_btn', 'Yes');
    btnTrue.node.onclick = () => this.onTrue();
    const btnFalse = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](popupBtnContainer.node, 'button', 'warning_btn', 'No');
    btnFalse.node.onclick = () => this.onClosePopup();
  }
  onTrue() {
    _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes.btn);
    _common_state__WEBPACK_IMPORTED_MODULE_1__.state.onClickWarning();
  }
  onClosePopup() {
    _index__WEBPACK_IMPORTED_MODULE_5__.soundControl.playSound(_game_soundControl__WEBPACK_IMPORTED_MODULE_4__.SoundTypes.btn);
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




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Bold.woff2 */ "./src/assets/fonts/Roboto-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Bold.woff */ "./src/assets/fonts/Roboto-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Bold.ttf */ "./src/assets/fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Medium.woff2 */ "./src/assets/fonts/Roboto-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Medium.woff */ "./src/assets/fonts/Roboto-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Medium.ttf */ "./src/assets/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.woff2 */ "./src/assets/fonts/Roboto-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.woff */ "./src/assets/fonts/Roboto-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Light.woff2 */ "./src/assets/fonts/Roboto-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Light.woff */ "./src/assets/fonts/Roboto-Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Light.ttf */ "./src/assets/fonts/Roboto-Light.ttf"), __webpack_require__.b);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"ttf\");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"ttf\");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"ttf\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"ttf\");\n  font-weight: 300;\n}\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-size: 10px;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  font-weight: 400;\n  height: 100%;\n}\n\n.wrapper {\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}", "",{"version":3,"sources":["webpack://./src/style/fonts.scss","webpack://./src/style/style.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,2KAAA;EAEA,gBAAA;ACCF;ADEA;EACE,qBAAA;EACA,2KAAA;EAEA,gBAAA;ACDF;ADIA;EACE,qBAAA;EACA,2KAAA;EAEA,gBAAA;ACHF;ADMA;EACE,qBAAA;EACA,6KAAA;EAEA,gBAAA;ACLF;AAhBA;;;EAGE,mBAAA;AAkBF;;AAfA;EACE,sBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;AAkBF;;AAfA;EACE,iCClBY;EDmBZ,iBAAA;EACA,mBAAA;EACA,gBCjBI;EDkBJ,YAAA;AAkBF;;AAfA;EACE,iBAAA;EACA,iBAAA;EACA,cAAA;EAEA,gBAAA;EACA,aAAA;EACA,sBAAA;AAiBF","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('../assets/fonts/Roboto-Bold.woff2') format('woff2'), url('../assets/fonts/Roboto-Bold.woff') format('woff'),\n    url('../assets/fonts/Roboto-Bold.ttf') format('ttf');\n  font-weight: 700;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../assets/fonts/Roboto-Medium.woff2') format('woff2'),\n    url('../assets/fonts/Roboto-Medium.woff') format('woff'), url('../assets/fonts/Roboto-Medium.ttf') format('ttf');\n  font-weight: 500;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../assets/fonts/Roboto-Regular.woff2') format('woff2'),\n    url('../assets/fonts/Roboto-Regular.woff') format('woff'), url('../assets/fonts/Roboto-Regular.ttf') format('ttf');\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../assets/fonts/Roboto-Light.woff2') format('woff2'),\n    url('../assets/fonts/Roboto-Light.woff') format('woff'), url('../assets/fonts/Roboto-Light.ttf') format('ttf');\n  font-weight: 300;\n}\n","@import './fonts.scss';\n@import '../../node_modules/normalize.css/normalize.css';\n@import './variables.scss';\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-size: 10px;\n  height: 100%;\n}\n\nbody {\n  font-family: $font-family;\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  font-weight: $fwr;\n  height: 100%;\n}\n\n.wrapper {\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n","$font-family: 'Roboto', sans-serif;\n\n$fwb: 700;\n$fwm: 500;\n$fwr: 400;\n$fwl: 300;\n\n$default-color: black;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/footer/footer.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;AACF","sourcesContent":[".footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 0 auto;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".header_list {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  padding: 0;\n}\n.header_list_item {\n  user-select: none;\n}\n.header_item_btn {\n  cursor: pointer;\n}\n.header_item_btn:disabled {\n  cursor: not-allowed;\n}\n.header_list_item:not(:last-child) {\n  margin-right: 2rem;\n}\n.header_item_link {\n  color: black;\n  text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/header/header.scss","webpack://./src/style/variables.scss"],"names":[],"mappings":"AAGE;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,UAAA;AAFJ;AAIE;EACE,iBAAA;AAFJ;AAIE;EACE,eAAA;AAFJ;AAGI;EACE,mBAAA;AADN;AAIE;EACE,kBAAA;AAFJ;AAIE;EACE,YCfY;EDgBZ,qBAAA;AAFJ","sourcesContent":["@import '../../../style/variables.scss';\n\n.header {\n  &_list {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    padding: 0;\n  }\n  &_list_item {\n    user-select: none;\n  }\n  &_item_btn {\n    cursor: pointer;\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n  &_list_item:not(:last-child) {\n    margin-right: 2rem;\n  }\n  &_item_link {\n    color: $default-color;\n    text-decoration: none;\n  }\n}\n","$font-family: 'Roboto', sans-serif;\n\n$fwb: 700;\n$fwm: 500;\n$fwr: 400;\n$fwl: 300;\n\n$default-color: black;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".main_counters {\n  display: flex;\n  justify-content: center;\n}\n.main_counters_moves {\n  margin-right: 2rem;\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.main_counters_text {\n  margin: 0;\n  margin-right: 0.5rem;\n}\n.main_counters_number {\n  margin: 0;\n}\n.main_counters_time {\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.main_counters_time_text {\n  margin: 0;\n  margin-right: 0.5rem;\n}\n.main_counters_time_number {\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/counters/counter.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,uBAAA;AADF;AAEE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AAAJ;AAEE;EACE,SAAA;EACA,oBAAA;AAAJ;AAEE;EACE,SAAA;AAAJ;AAEE;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AAAJ;AAEE;EACE,SAAA;EACA,oBAAA;AAAJ;AAEE;EACE,SAAA;AAAJ","sourcesContent":["@import '../../../../style/variables.scss';\n\n.main_counters {\n  display: flex;\n  justify-content: center;\n  &_moves {\n    margin-right: 2rem;\n    display: flex;\n    align-items: center;\n    user-select: none;\n  }\n  &_text {\n    margin: 0;\n    margin-right: 0.5rem;\n  }\n  &_number {\n    margin: 0;\n  }\n  &_time {\n    display: flex;\n    align-items: center;\n    user-select: none;\n  }\n  &_time_text {\n    margin: 0;\n    margin-right: 0.5rem;\n  }\n  &_time_number {\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".main_frame {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  margin-top: 1rem;\n}\n.main_frame_block {\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.main_frame_text {\n  margin: 0;\n}\n.main_frame_size {\n  margin: 0;\n  margin-left: 1rem;\n}\n.main_frame_other {\n  display: flex;\n  align-items: center;\n  margin-top: 1rem;\n  user-select: none;\n}\n.main_frame_other_text {\n  margin: 0;\n}\n.main_frame_other_size {\n  margin: 0;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n.main_frame_other_size:disabled {\n  cursor: not-allowed;\n}\n.main_frame_other_size_active {\n  color: orange;\n}\n.main_frame_btn {\n  user-select: none;\n  cursor: pointer;\n}\n.main_frame_btn:disabled {\n  cursor: not-allowed;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/frame-size/frame-size.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AACF;AAAE;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AAEJ;AAAE;EACE,SAAA;AAEJ;AAAE;EACE,SAAA;EACA,iBAAA;AAEJ;AAAE;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;AAEJ;AAAE;EACE,SAAA;AAEJ;AAAE;EACE,SAAA;EACA,iBAAA;EACA,eAAA;AAEJ;AADI;EACE,mBAAA;AAGN;AAAE;EACE,aAAA;AAEJ;AAAE;EACE,iBAAA;EACA,eAAA;AAEJ;AADI;EACE,mBAAA;AAGN","sourcesContent":[".main_frame {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  margin-top: 1rem;\n  &_block {\n    display: flex;\n    align-items: center;\n    user-select: none;\n  }\n  &_text {\n    margin: 0;\n  }\n  &_size {\n    margin: 0;\n    margin-left: 1rem;\n  }\n  &_other {\n    display: flex;\n    align-items: center;\n    margin-top: 1rem;\n    user-select: none;\n  }\n  &_other_text {\n    margin: 0;\n  }\n  &_other_size {\n    margin: 0;\n    margin-left: 1rem;\n    cursor: pointer;\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n  &_other_size_active {\n    color: orange;\n  }\n  &_btn {\n    user-select: none;\n    cursor: pointer;\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".main_game {\n  width: 100%;\n  max-width: 60rem;\n  margin: 0 auto;\n}\n.main_game_over {\n  position: relative;\n  background: rgba(0, 0, 0, 0.4);\n  user-select: none;\n  border-radius: 1rem;\n  pointer-events: none;\n}\n.main_game_container {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  border: 1px solid salmon;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  grid-gap: 0.5rem;\n}\n.main_game_container_3x3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.main_game_container_4x4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.main_game_container_5x5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.main_game_container_6x6 {\n  grid-template-columns: repeat(6, 1fr);\n}\n.main_game_container_7x7 {\n  grid-template-columns: repeat(7, 1fr);\n}\n.main_game_container_8x8 {\n  grid-template-columns: repeat(8, 1fr);\n}\n.main_game_square {\n  font-size: 3rem;\n  border: 1px solid black;\n  border-radius: 1rem;\n  aspect-ratio: 1/1;\n  cursor: pointer;\n  transition: ease 0.3s;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: ease 0.5s;\n  user-select: none;\n}\n.main_game_square:hover {\n  border: 2px solid wheat;\n}\n.main_game_square_empty {\n  border: none;\n  cursor: auto;\n  outline: none;\n  user-select: none;\n  z-index: 0;\n  transition: ease 0.5s;\n}\n.main_game_square_empty:hover {\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/game/game.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,gBAAA;EACA,cAAA;AACF;AAAE;EACE,kBAAA;EACA,8BAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AAEJ;AAAE;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;AAEJ;AADI;EACE,qCAAA;AAGN;AADI;EACE,qCAAA;AAGN;AADI;EACE,qCAAA;AAGN;AADI;EACE,qCAAA;AAGN;AADI;EACE,qCAAA;AAGN;AADI;EACE,qCAAA;AAGN;AAAE;EACE,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,iBAAA;AAEJ;AADI;EACE,uBAAA;AAGN;AAAE;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,UAAA;EACA,qBAAA;AAEJ;AADI;EACE,YAAA;AAGN","sourcesContent":[".main_game {\n  width: 100%;\n  max-width: 60rem;\n  margin: 0 auto;\n  &_over {\n    position: relative;\n    background: rgba(0, 0, 0, 0.4);\n    user-select: none;\n    border-radius: 1rem;\n    pointer-events: none;\n  }\n  &_container {\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 1px solid salmon;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    grid-gap: 0.5rem;\n    &_3x3 {\n      grid-template-columns: repeat(3, 1fr);\n    }\n    &_4x4 {\n      grid-template-columns: repeat(4, 1fr);\n    }\n    &_5x5 {\n      grid-template-columns: repeat(5, 1fr);\n    }\n    &_6x6 {\n      grid-template-columns: repeat(6, 1fr);\n    }\n    &_7x7 {\n      grid-template-columns: repeat(7, 1fr);\n    }\n    &_8x8 {\n      grid-template-columns: repeat(8, 1fr);\n    }\n  }\n  &_square {\n    font-size: 3rem;\n    border: 1px solid black;\n    border-radius: 1rem;\n    aspect-ratio: 1/1;\n    cursor: pointer;\n    transition: ease 0.3s;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: ease 0.5s;\n    user-select: none;\n    &:hover {\n      border: 2px solid wheat;\n    }\n  }\n  &_square_empty {\n    border: none;\n    cursor: auto;\n    outline: none;\n    user-select: none;\n    z-index: 0;\n    transition: ease 0.5s;\n    &:hover {\n      border: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n  flex: 1 1 auto;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/main.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF","sourcesContent":[".main {\n  flex: 1 1 auto;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".popups_collect {\n  width: 100%;\n  height: 100%;\n  margin-top: 1.5rem;\n}\n.popups_collect_info {\n  margin-top: 4rem;\n}\n.popups_collect_title {\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 2rem;\n}\n.popups_collect_time {\n  font-size: 2rem;\n  line-height: 3rem;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n.popups_collect_total_time {\n  font-size: 2rem;\n  line-height: 3rem;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n.popups_collect_moves {\n  font-size: 2rem;\n  line-height: 3rem;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/collect-popup/collect-popup.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AACF;AAAE;EACE,gBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAEJ;AAAE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAEJ;AAAE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAEJ;AAAE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAEJ","sourcesContent":[".popups_collect {\n  width: 100%;\n  height: 100%;\n  margin-top: 1.5rem;\n  &_info {\n    margin-top: 4rem;\n  }\n  &_title {\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 2rem;\n  }\n  &_time {\n    font-size: 2rem;\n    line-height: 3rem;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n  &_total_time {\n    font-size: 2rem;\n    line-height: 3rem;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n  &_moves {\n    font-size: 2rem;\n    line-height: 3rem;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".popups_finish {\n  width: 100%;\n  height: 100%;\n  margin-top: 1.5rem;\n}\n.popups_finish_info {\n  margin-top: 4rem;\n}\n.popups_finish_title {\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-top: 1rem;\n}\n.popups_finish_time {\n  font-size: 2rem;\n  line-height: 3rem;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n.popups_finish_moves {\n  font-size: 2rem;\n  line-height: 3rem;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/finish-popup/finish-popup.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AACF;AAAE;EACE,gBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;AAEJ;AAAE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAEJ;AAAE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAEJ","sourcesContent":[".popups_finish {\n  width: 100%;\n  height: 100%;\n  margin-top: 1.5rem;\n  &_info {\n    margin-top: 4rem;\n  }\n  &_title {\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-top: 1rem;\n  }\n  &_time {\n    font-size: 2rem;\n    line-height: 3rem;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n  &_moves {\n    font-size: 2rem;\n    line-height: 3rem;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".popups {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.9);\n}\n.popups_inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  top: 44%;\n  transform: translate(-50%, -50%);\n  border: 1px solid red;\n  border-radius: 2rem;\n  padding: 1rem;\n  width: 80rem;\n  min-height: 50rem;\n}\n.popups_close_btn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center/contain;\n  position: absolute;\n  right: 2rem;\n  top: 1.5rem;\n  width: 4rem;\n  height: 4rem;\n  border: none;\n  cursor: pointer;\n  filter: invert(47%) sepia(100%) saturate(324%) hue-rotate(130deg) brightness(85%) contrast(84%);\n  transition: ease 0.5s;\n}\n.popups_close_btn:hover {\n  border: 1px solid sandybrown;\n  border-radius: 1rem;\n}\n.popups_new_btn {\n  height: 4rem;\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  cursor: pointer;\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/popups.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,MAAA;EACA,8BAAA;AACF;AAAE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;AAEJ;AAAE;EACE,4EAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,+FAAA;EACA,qBAAA;AAEJ;AADI;EACE,4BAAA;EACA,mBAAA;AAGN;AAAE;EACE,YAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,+BAAA;EACA,gCAAA;AAEJ","sourcesContent":[".popups {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.9);\n  &_inner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    left: 50%;\n    top: 44%;\n    transform: translate(-50%, -50%);\n    border: 1px solid red;\n    border-radius: 2rem;\n    padding: 1rem;\n    width: 80rem;\n    min-height: 50rem;\n  }\n  &_close_btn {\n    background: url('../../../../assets/svg/close-btn.svg') no-repeat center/contain;\n    position: absolute;\n    right: 2rem;\n    top: 1.5rem;\n    width: 4rem;\n    height: 4rem;\n    border: none;\n    cursor: pointer;\n    filter: invert(47%) sepia(100%) saturate(324%) hue-rotate(130deg) brightness(85%) contrast(84%);\n    transition: ease 0.5s;\n    &:hover {\n      border: 1px solid sandybrown;\n      border-radius: 1rem;\n    }\n  }\n  &_new_btn {\n    height: 4rem;\n    position: absolute;\n    bottom: 0rem;\n    width: 100%;\n    cursor: pointer;\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".popups_result {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.popups_result_title {\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-top: 1rem;\n}\n.popups_result_list {\n  padding: 0;\n  list-style: none;\n  color: wheat;\n  margin-bottom: 3rem;\n}\n.popups_result_wrapper {\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  display: flex;\n  padding: 0;\n}\n.popups_result_item {\n  color: white;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  height: 4.5rem;\n}\n.popups_result_count {\n  height: 4.5rem;\n  width: 1rem;\n}\n.popups_result_delete {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center/contain;\n  width: 4rem;\n  height: 4.5rem;\n  border: none;\n  cursor: pointer;\n  filter: invert(47%) sepia(100%) saturate(324%) hue-rotate(130deg) brightness(85%) contrast(84%);\n  transition: ease 0.5s;\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/result-popup/result-popup.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,aAAA;AACF;AAAE;EACE,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;AAEJ;AAAE;EACE,UAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AAEJ;AAAE;EACE,aAAA;EACA,qBAAA;EACA,gBAAA;EACA,aAAA;EACA,UAAA;AAEJ;AAAE;EACE,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAEJ;AAAE;EACE,cAAA;EACA,WAAA;AAEJ;AAAE;EACE,4EAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,+FAAA;EACA,qBAAA;EACA,mBAAA;AAEJ","sourcesContent":[".popups_result {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  &_title {\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-top: 1rem;\n  }\n  &_list {\n    padding: 0;\n    list-style: none;\n    color: wheat;\n    margin-bottom: 3rem;\n  }\n  &_wrapper {\n    display: flex;\n    align-items: flex-end;\n    list-style: none;\n    display: flex;\n    padding: 0;\n  }\n  &_item {\n    color: white;\n    margin-left: 2rem;\n    margin-right: 2rem;\n    height: 4.5rem;\n  }\n  &_count {\n    height: 4.5rem;\n    width: 1rem;\n  }\n  &_delete {\n    background: url('../../../../../assets/svg/close-btn.svg') no-repeat center/contain;\n    width: 4rem;\n    height: 4.5rem;\n    border: none;\n    cursor: pointer;\n    filter: invert(47%) sepia(100%) saturate(324%) hue-rotate(130deg) brightness(85%) contrast(84%);\n    transition: ease 0.5s;\n    margin-bottom: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".settings {\n  width: 80%;\n  margin-top: 2rem;\n}\n.settings_title {\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n.settings_inner {\n  display: flex;\n  justify-content: space-between;\n}\n.settings_right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/settings-popup/settings-popup.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;AACF;AAAE;EACE,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;AAEJ;AAAE;EACE,aAAA;EACA,8BAAA;AAEJ;AAAE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AAEJ","sourcesContent":[".settings {\n  width: 80%;\n  margin-top: 2rem;\n  &_title {\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n  }\n  &_inner {\n    display: flex;\n    justify-content: space-between;\n  }\n  &_right {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".switcher {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n  width: 11rem;\n}\n.switcher_title {\n  margin: 0;\n  font-size: 2rem;\n  line-height: 2.7rem;\n  text-align: center;\n  color: white;\n}\n.switcher_inner {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.switcher_switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin-right: 1rem;\n}\n.switcher_checkbox {\n  display: none;\n}\n.switcher_slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 0.34rem;\n}\n.switcher_slider::before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n.switcher_value {\n  color: white;\n}\n\n.switcher_checkbox:checked + .switcher_slider {\n  background-color: #2196f3;\n}\n\n.switcher_checkbox:focus + .switcher_slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\n.switcher_checkbox:checked + .switcher_slider::before {\n  transform: translateX(26px);\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/settings-popup/swither/switcher.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;AACF;AAAE;EACE,SAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AAEJ;AAAE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAEJ;AAAE;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAEJ;AAAE;EACE,aAAA;AAEJ;AAAE;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,gBAAA;EACA,sBAAA;AAEJ;AADI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;AAGN;AAAE;EACE,YAAA;AAEJ;;AAEA;EACE,yBAAA;AACF;;AACA;EACE,2BAAA;AAEF;;AAAA;EACE,2BAAA;AAGF","sourcesContent":[".switcher {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n  width: 11rem;\n  &_title {\n    margin: 0;\n    font-size: 2rem;\n    line-height: 2.7rem;\n    text-align: center;\n    color: white;\n  }\n  &_inner {\n    display: flex;\n    align-items: center;\n    width: 100%;\n  }\n  &_switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    margin-right: 1rem;\n  }\n  &_checkbox {\n    display: none;\n  }\n  &_slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: 0.4s;\n    border-radius: 0.34rem;\n    &::before {\n      position: absolute;\n      content: '';\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      transition: 0.4s;\n    }\n  }\n  &_value {\n    color: white;\n  }\n}\n\n.switcher_checkbox:checked + .switcher_slider {\n  background-color: #2196f3;\n}\n.switcher_checkbox:focus + .switcher_slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n.switcher_checkbox:checked + .switcher_slider::before {\n  transform: translateX(26px);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".volume {\n  display: flex;\n  align-items: center;\n}\n.volume_icon {\n  width: 4rem;\n  object-fit: cover;\n  cursor: pointer;\n}\n.volume_input[type=range] {\n  -webkit-appearance: none;\n  background: linear-gradient(to right, #ff2253 30%, #ff2253 0%, #fff 30%, white 100%);\n  cursor: pointer;\n  height: 0.3rem;\n  max-width: 30rem;\n  outline: none;\n  transition: 0.5s ease-in-out;\n  transition: all 0.5s;\n  width: 100%;\n}\n.volume_input::-webkit-slider-thumb {\n  width: 3rem;\n  height: 3rem;\n}\n.volume_input::-moz-range-thumb {\n  width: 3rem;\n  height: 3rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/settings-popup/volume/volume.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;AACF;AAAE;EACE,WAAA;EACA,iBAAA;EACA,eAAA;AAEJ;AAAE;EACE,wBAAA;EACA,oFAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;EACA,4BAAA;EACA,oBAAA;EACA,WAAA;AAEJ;AAAE;EACE,WAAA;EACA,YAAA;AAEJ;AAAE;EACE,WAAA;EACA,YAAA;AAEJ","sourcesContent":[".volume {\n  display: flex;\n  align-items: center;\n  &_icon {\n    width: 4rem;\n    object-fit: cover;\n    cursor: pointer;\n  }\n  &_input[type='range'] {\n    -webkit-appearance: none;\n    background: linear-gradient(to right, #ff2253 30%, #ff2253 0%, #fff 30%, white 100%);\n    cursor: pointer;\n    height: 0.3rem;\n    max-width: 30rem;\n    outline: none;\n    transition: 0.5s ease-in-out;\n    transition: all 0.5s;\n    width: 100%;\n  }\n  &_input::-webkit-slider-thumb {\n    width: 3rem;\n    height: 3rem;\n  }\n  &_input::-moz-range-thumb {\n    width: 3rem;\n    height: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".warning {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.9);\n  user-select: none;\n}\n.warning_inner {\n  max-width: 50rem;\n  width: 100%;\n  padding: 1rem;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  border: 1px solid red;\n}\n.warning_text {\n  font-size: 3rem;\n  line-height: 4rem;\n  text-align: center;\n  color: gainsboro;\n  margin: 0;\n  margin-top: 1rem;\n}\n.warning_close {\n  position: absolute;\n  right: 2rem;\n  top: 1.5rem;\n  width: 4rem;\n  height: 4rem;\n  border: none;\n  cursor: pointer;\n  filter: invert(47%) sepia(100%) saturate(324%) hue-rotate(130deg) brightness(85%) contrast(84%);\n  transition: ease 0.5s;\n}\n.warning_close:hover {\n  border: 1px solid sandybrown;\n  border-radius: 1rem;\n}\n.warning_btns {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5rem;\n}\n.warning_btn {\n  height: 4rem;\n  width: 100%;\n  cursor: pointer;\n  border-radius: 0.35rem;\n  border: none;\n  outline: none;\n}\n.warning_btn:nth-child(1) {\n  margin-right: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/ts/components/main/popups/warning-popup/warning-popup.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,MAAA;EACA,8BAAA;EACA,iBAAA;AACF;AAAE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,SAAA;EACA,QAAA;EACA,qBAAA;AAEJ;AAAE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,+FAAA;EACA,qBAAA;AAEJ;AADI;EACE,4BAAA;EACA,mBAAA;AAGN;AAAE;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;AAEJ;AAAE;EACE,YAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;AAEJ;AADI;EACE,kBAAA;AAGN","sourcesContent":[".warning {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.9);\n  user-select: none;\n  &_inner {\n    max-width: 50rem;\n    width: 100%;\n    padding: 1rem;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    top: 50%;\n    border: 1px solid red;\n  }\n  &_text {\n    font-size: 3rem;\n    line-height: 4rem;\n    text-align: center;\n    color: gainsboro;\n    margin: 0;\n    margin-top: 1rem;\n  }\n  &_close {\n    position: absolute;\n    right: 2rem;\n    top: 1.5rem;\n    width: 4rem;\n    height: 4rem;\n    border: none;\n    cursor: pointer;\n    filter: invert(47%) sepia(100%) saturate(324%) hue-rotate(130deg) brightness(85%) contrast(84%);\n    transition: ease 0.5s;\n    &:hover {\n      border: 1px solid sandybrown;\n      border-radius: 1rem;\n    }\n  }\n  &_btns {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  &_btn {\n    height: 4rem;\n    width: 100%;\n    cursor: pointer;\n    border-radius: 0.35rem;\n    border: none;\n    outline: none;\n    &:nth-child(1) {\n      margin-right: 1rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/fonts/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Bold.woff":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Bold.woff2":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Light.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Light.woff";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Light.woff2";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Medium.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Medium.woff";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Medium.woff2";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Roboto-Regular.woff2";

/***/ }),

/***/ "./src/assets/image/volume-off.png":
/*!*****************************************!*\
  !*** ./src/assets/image/volume-off.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume-off.png";

/***/ }),

/***/ "./src/assets/image/volume-on.png":
/*!****************************************!*\
  !*** ./src/assets/image/volume-on.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume-on.png";

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
//# sourceMappingURL=bundle-ac194d02a60a0f34c29d.js.map