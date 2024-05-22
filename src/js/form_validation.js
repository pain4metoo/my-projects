class Validation {
  constructor() {
    this._isValidDate = false;
    this._isValidTime = false;
    this._isValidName = false;
    this._isValidEmail = false;
    this._isValidPhone = false;
    this._isValidTypeTicket = false;
    this._isValidTickets = false;
    this._isValidCardNumber = false;
    this._isValidCardDateMonth = false;
    this._isValidCardDateYear = false;
    this._isValidCardName = false;
    this._isValidCardCv = false;
  }

  set isValidDate(date) {
    if (!date) {
      this._isValidDate = false;
      throw new Error('Invalid date!');
    }
    if (Object.keys(date).length > 0 || typeof date !== 'object') {
      this._isValidDate = false;
      throw new Error('Invalid date!');
    }

    this._isValidDate = true;
  }
  get isValidDate() {
    return this._isValidDate;
  }

  set isValidTime(time) {
    if (isNaN(Number.parseInt(time)) || typeof time === 'object' || !time || time === '') {
      this._isValidTime = false;

      return;
    }

    this._isValidTime = true;
  }
  get isValidTime() {
    return this._isValidTime;
  }

  set isValidName(name) {
    if (name && name.length >= 3 && name.length <= 15) {
      this._isValidName = /^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/.test(name);

      return;
    }
    this._isValidName = false;
  }
  get isValidName() {
    return this._isValidName;
  }

  set isValidEmail(email) {
    if (email && email.length >= 3 && email.length <= 30) {
      this._isValidEmail =
        /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(
          email
        );

      return;
    }

    this._isValidEmail = false;
  }
  get isValidEmail() {
    return this._isValidEmail;
  }

  set isValidPhone(phone) {
    if (phone.length >= 6 && phone.length <= 12) {
      this._isValidPhone = /^\d{1,3}([-\s]?\d{1,3}){0,3}$/.test(phone);

      return;
    }

    this._isValidPhone = false;
  }
  get isValidPhone() {
    return this._isValidPhone;
  }

  set isValidTypeTicket(type) {
    if (type === '0' || type === '1' || (type === '2' && type)) {
      this._isValidTypeTicket = true;
    } else {
      this._isValidTypeTicket = false;
    }
  }
  get isValidTypeTicket() {
    return this._isValidTypeTicket;
  }

  set isValidTickets(tickets) {
    if ((localStorage.getItem('museumbasic') === '0' && localStorage.getItem('museumsenior') === '0') || !tickets) {
      this._isValidTickets = false;
    } else {
      this._isValidTickets = true;
    }
  }
  get isValidTickets() {
    return this._isValidTickets;
  }

  set isValidCardNumber(ccn) {
    const arr = ccn
      .toString()
      .slice(0, ccn.toString().length - 1)
      .split('')
      .reverse();
    const evenIndex = [];
    const oddIndex = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (i === 0) {
        oddIndex.push(+ccn.toString()[ccn.toString().length - 1]);
      }
      if (i % 2 === 0) {
        evenIndex.push(+arr[i]);
      } else {
        oddIndex.push(+arr[i]);
      }
    }

    const sumOfEven = evenIndex
      .map((num) => (num * 2).toString())
      .map((el) => {
        if (el.split('').length > 1) {
          return el.split('').reduce((acc, it) => acc + +it, 0);
        }
        return +el;
      })
      .reduce((acc, num) => acc + num, 0);

    const sumOfOdd = oddIndex.reduce((acc, num) => acc + +num, 0);
    const controlNumber = `${sumOfEven + sumOfOdd}`;
    const checkLohnArg = +controlNumber[controlNumber.length - 1] === 0;

    const creditCardRegex =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if (checkLohnArg && creditCardRegex.test(ccn)) {
      this._isValidCardNumber = true;
    } else {
      this._isValidCardNumber = false;
    }
  }
  get isValidCardNumber() {
    return this._isValidCardNumber;
  }

  set isValidCardDateMonth(month) {
    const monthRegex = /^(0[1-9]|1[0-2])$/;

    if (monthRegex.test(month) && month) {
      this._isValidCardDateMonth = true;
    } else {
      this._isValidCardDateMonth = false;
    }
  }
  get isValidCardDateMonth() {
    return this._isValidCardDateMonth;
  }

  set isValidCardDateYear(year) {
    const yearRegex = /^(\d{2}|\d{4})$/;

    if (yearRegex.test(year) && year) {
      this._isValidCardDateYear = true;
    } else {
      this._isValidCardDateYear = false;
    }
  }
  get isValidCardDateYear() {
    return this._isValidCardDateYear;
  }

  set isValidCardName(cardName) {
    const cardholderNameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

    if (cardholderNameRegex.test(cardName) && cardName.length > 4) {
      this._isValidCardName = true;
    } else {
      this._isValidCardName = false;
    }
  }
  get isValidCardName() {
    return this._isValidCardName;
  }

  set isValidCardCv(cardCV) {
    const cvcRegex = /^[0-9]{3,4}$/;

    if (cvcRegex.test(cardCV) && cardCV) {
      this._isValidCardCv = true;
    } else {
      this._isValidCardCv = false;
    }
  }
  get isValidCardCv() {
    return this._isValidCardCv;
  }

  checkValidation() {
    const keys = [];
    for (let key in this) {
      keys.push(this[key]);
    }

    return keys.filter((el) => !el).length === 0;
  }

  isValidField() {
    const values = [];
    let i = 0;
    for (let key in this) {
      if (!this[key]) {
        values.push([i, this[key]]);
      }
      i++;
    }

    return values;
  }
}

const validation = new Validation();

export default validation;
