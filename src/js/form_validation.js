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
    this._isValidCardDate = false;
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

  set isValidTypeTicket(type) {}
  get isValidTypeTicket() {
    return null;
  }

  set isValidTickets(tickets) {}
  get isValidTickets() {
    return null;
  }

  set isValidCardNumber(cardNumber) {}
  get isValidCardNumber() {
    return null;
  }

  set isValidCardDate(cardDate) {}
  get isValidCardDate() {
    return null;
  }

  set isValidCardName(cardName) {}
  get isValidCardName() {
    return null;
  }

  set isValidCardCv(cardCV) {}
  get isValidCardCv() {
    return null;
  }
}

const validation = new Validation();

export default validation;
