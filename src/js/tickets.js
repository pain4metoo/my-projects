import validation from './form_validation.js';

{
  window.onload = () => {
    if (!localStorage.getItem('basic') || !localStorage.getItem('senior')) {
      localStorage.setItem('basic', '0');
      localStorage.setItem('senior', '0');
    }
    if (!localStorage.getItem('type')) {
      localStorage.setItem('type', '0');
    }
    if (!localStorage.getItem('total')) {
      localStorage.setItem('total', '0');
    }
    if (!localStorage.getItem('time')) {
      localStorage.setItem('time', '');
    }
    if (!localStorage.getItem('date')) {
      localStorage.setItem('date', '');
    }
    if (!localStorage.getItem('faq')) {
      localStorage.setItem('faq', '0');
    }

    setTotal();
    updateTicket();
    updateForm();
  };

  const price = {
    0: {
      basic: 20,
      senior: 10,
    },
    1: {
      basic: 25,
      senior: 12.5,
    },
    2: {
      basic: 40,
      senior: 20,
    },
  };

  const typesArr = ['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'];

  const form = document.querySelector('.form_layout');

  const openForm = document.querySelector('.ticket_btn');
  openForm.onclick = () => {
    form.classList.add('form_layout_show');
    updateForm();
    checkValidTicketsCount();
    checkValidTicketType();
  };

  const closeForm = document.querySelector('.form_close_btn');
  closeForm.onclick = () => {
    form.classList.remove('form_layout_show');
    updateTicket();
  };

  const sendForm = document.querySelector('.form_right_btn');
  const formPopup = document.querySelector('.form_order_popup');

  sendForm.onclick = () => {
    if (validation.checkValidation()) {
      setTimeout(() => {
        formPopup.classList.add('form_order_popup_show');
        form.style.pointerEvents = 'none';
        setTimeout(() => {
          form.classList.remove('form_layout_show');
          form.style.pointerEvents = 'inherit';
          updateTicket();
          formPopup.classList.remove('form_order_popup_show');
        }, 1500);
      }, 0);
    } else {
      const invalidFields = validation.isValidField();
      invalidFields.forEach((el) => {
        const index = el[0];
        switch (index) {
          case 0:
            isValidField(dateLabel, false);
            break;
          case 1:
            isValidField(time, false);
            break;
          case 2:
            isValidField(name, false);
            break;
          case 3:
            isValidField(email, false);
            break;
          case 4:
            isValidField(phone, false);
            break;
          case 5:
            isValidField(ticketTypeField, false);
            break;
          case 6:
            isValidField(ticketCountsField, false);
            break;
          case 7:
            isValidField(cardNumberInp, false);
            break;
          case 8:
            isValidField(selectCardMonth, false);
            break;
          case 9:
            isValidField(selectCardYear, false);
            break;
          case 10:
            isValidField(cardHolderNameInp, false);
            break;
          case 11:
            isValidField(cardCVInp, false);
            break;
        }
      });
    }
  };

  const ticketBasicMinus = document.getElementById('ticket_minus_basic');
  ticketBasicMinus.onclick = () => {
    ticketCounterMinus(ticketBasicInp, true);
  };

  const ticketBasicInp = document.getElementById('ticket_basic');

  const ticketBasicPlus = document.getElementById('ticket_plus_basic');
  ticketBasicPlus.onclick = () => {
    ticketCounterPlus(ticketBasicInp, true);
  };

  const ticketSeniorMinus = document.getElementById('ticket_minus_senior');
  ticketSeniorMinus.onclick = () => {
    ticketCounterMinus(ticketSeniorInp, false);
  };

  const ticketSeniorInp = document.getElementById('ticket_senior');

  const ticketSeniorPlus = document.getElementById('ticket_plus_senior');
  ticketSeniorPlus.onclick = () => {
    ticketCounterPlus(ticketSeniorInp, false);
  };

  const ticketCounterMinus = (input, isBasic) => {
    if (input.value <= 0) return;
    input.value--;

    if (isBasic) {
      localStorage.setItem('basic', `${input.value}`);
    } else {
      localStorage.setItem('senior', `${input.value}`);
    }

    setTotal();
    updateTicket();
    updateForm();
    checkValidTicketsCount();
  };

  const ticketCounterPlus = (input, isBasic) => {
    if (input.value >= 30) return;
    input.value++;

    if (isBasic) {
      localStorage.setItem('basic', `${input.value}`);
    } else {
      localStorage.setItem('senior', `${input.value}`);
    }

    setTotal();
    updateTicket();
    updateForm();
    checkValidTicketsCount();
  };

  const ticketTypes = document.querySelectorAll('.ticket_type_input');

  ticketTypes.forEach((el, i) => {
    el.onclick = () => {
      localStorage.setItem('type', i);
      setTotal();
      updateTicket();
      updateForm();
      checkValidTicketType();
    };
  });

  const totalTicket = document.querySelector('.ticket_amount_total');

  const setTotal = () => {
    const type = localStorage.getItem('type');
    const basic = +localStorage.getItem('basic');
    const senior = +localStorage.getItem('senior');

    localStorage.setItem('total', `${price[type].basic * basic + price[type].senior * senior}`);
  };

  const formMinusBasic = document.getElementById('form_minus_basic');
  formMinusBasic.onclick = () => {
    ticketCounterMinus(formCounterBasic, true);
  };

  const formCounterBasic = document.getElementById('form_basic');

  const formPlusBasic = document.getElementById('form_plus_basic');
  formPlusBasic.onclick = () => {
    ticketCounterPlus(formCounterBasic, true);
  };

  const formMinusSenior = document.getElementById('form_minus_senior');
  formMinusSenior.onclick = () => {
    ticketCounterMinus(formCounterSenior, false);
  };

  const formCounterSenior = document.getElementById('form_senior');

  const formPlusSenior = document.getElementById('form_plus_senior');
  formPlusSenior.onclick = () => {
    ticketCounterPlus(formCounterSenior, false);
  };

  const formBasicCounter = document.getElementById('form_basic_counter');
  const formSeniorCounter = document.getElementById('form_senior_counter');
  const formTotal = document.getElementById('form_total');

  const formTicketType = document.querySelectorAll('.form_select_option');
  const formSelect = document.querySelector('.form_select');
  formSelect.onchange = () => {
    localStorage.setItem('type', formSelect.value);
    setTotal();
    updateTicket();
    updateForm();
    checkValidTicketType();
  };

  const formTypeText = document.getElementById('form_type_text');
  const formDateText = document.getElementById('form_date_text');
  const formTimeText = document.getElementById('form_time_text');

  const updateForm = () => {
    formCounterBasic.value = localStorage.getItem('basic');
    formCounterSenior.value = localStorage.getItem('senior');
    formBasicCounter.textContent = localStorage.getItem('basic');
    formSeniorCounter.textContent = localStorage.getItem('senior');
    formTotal.textContent = `${localStorage.getItem('total')} €`;
    formTypeText.textContent = `${typesArr[localStorage.getItem('type')]}`;

    if (localStorage.getItem('time')) {
      formTimeText.textContent = localStorage.getItem('time');
    }
    if (localStorage.getItem('date')) {
      formDateText.textContent = localStorage.getItem('date');
    }

    const type = +localStorage.getItem('type');

    formTicketType.forEach((el, i) => {
      if (type === i) {
        el.selected = true;
      } else {
        el.selected = false;
      }
    });
  };

  const updateTicket = () => {
    ticketBasicInp.value = localStorage.getItem('basic');
    ticketSeniorInp.value = localStorage.getItem('senior');
    totalTicket.textContent = `Total €${localStorage.getItem('total')}`;

    const type = +localStorage.getItem('type');

    ticketTypes.forEach((el, i) => {
      if (type === i) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  };

  const dateForm = document.querySelector('.form_date');
  const dateLabel = document.querySelector('.form_date_label');

  dateForm.onclick = () => {
    dateLabel.classList.add('form_date_label_open');
    dateForm.classList.add('form_date_open');
  };

  dateForm.onblur = () => {
    dateLabel.classList.remove('form_date_label_open');
    dateForm.classList.remove('form_date_open');
  };

  dateForm.oninput = () => {
    dateForm.style.opacity = '1';
    dateForm.style.paddingLeft = '4rem';
    dateLabel.classList.remove('form_date_label_open');
    dateForm.classList.remove('form_date_open');

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const monthArr = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(dateForm.value);

    validation.isValidDate = date;

    if (validation.isValidDate) {
      isValidField(dateLabel, true);
    } else {
      isValidField(dateLabel, false, 'Please enter a valid date');
      return;
    }

    let day = date.getDate();
    let month = date.getMonth();
    let dayOfWeek = date.getDay();

    const result = `${days[dayOfWeek]}, ${monthArr[month]}, ${day}`;

    formDateText.textContent = result;

    localStorage.setItem('date', result);
  };

  const time = document.querySelector('.form_time_select');
  const timeContainer = document.querySelector('.form_time');

  time.onclick = () => {
    timeContainer.classList.add('form_time_open');
  };

  time.onblur = () => {
    timeContainer.classList.remove('form_time_open');
  };

  time.onchange = () => {
    validation.isValidTime = time.value;

    if (validation.isValidTime) {
      isValidField(time, true);
    } else {
      isValidField(time, false, 'Please enter a valid time');
      return;
    }

    localStorage.setItem('time', time.value);

    updateForm();
  };

  const name = document.querySelector('.form_name');
  name.oninput = () => {
    if (name.value.length > 30) {
      name.value = name.value.slice(0, 30);
    }
    validation.isValidName = name.value;

    if (validation.isValidName) {
      isValidField(name, true);
    } else {
      isValidField(name, false, 'Please enter a valid name');
    }
  };

  const email = document.querySelector('.form_email');

  email.oninput = () => {
    if (email.value.length > 35) {
      email.value = email.value.slice(0, 35);
    }

    validation.isValidEmail = email.value;

    if (validation.isValidEmail) {
      isValidField(email, true);
    } else {
      isValidField(email, false, 'Please enter a valid email');
    }
  };

  const phone = document.querySelector('.form_phone');

  phone.oninput = () => {
    if (phone.value.length >= 18) {
      phone.value = phone.value.slice(0, 18);
    }

    validation.isValidPhone = phone.value;

    if (validation.isValidPhone) {
      isValidField(phone, true);
    } else {
      isValidField(phone, false, 'Please enter a valid phone number');
    }
  };

  const ticketCountsField = document.querySelector('.form_entry_ticket');
  const checkValidTicketsCount = () => {
    validation.isValidTickets = localStorage.getItem('basic') || localStorage.getItem('senior');

    if (validation.isValidTickets) {
      isValidField(ticketCountsField, true);
    } else {
      isValidField(ticketCountsField, false, 'Please choose at least 1 ticket to proceed with the purchase', true);
    }
  };

  const ticketTypeField = document.querySelector('.form_select');
  const checkValidTicketType = () => {
    validation.isValidTypeTicket = localStorage.getItem('type');

    if (validation.isValidTypeTicket) {
      isValidField(ticketTypeField, true);
    } else {
      isValidField(ticketTypeField, false);
    }
  };

  const cardNumberInp = document.querySelector('.form_right_card_number');
  cardNumberInp.oninput = () => {
    if (cardNumberInp.value.length > 20) {
      cardNumberInp.value = cardNumberInp.value.slice(0, 16);
    }
    validation.isValidCardNumber = cardNumberInp.value;

    if (validation.isValidCardNumber) {
      isValidField(cardNumberInp, true);
    } else {
      isValidField(cardNumberInp, false, 'Please enter a valid card number.');
    }
  };

  const selectCardMonth = document.querySelector('.form_right_select_month');
  selectCardMonth.onchange = () => {
    validation.isValidCardDateMonth = selectCardMonth.value;

    if (validation.isValidCardDateMonth) {
      isValidField(selectCardMonth, true);
    } else {
      isValidField(selectCardMonth, false, 'invalid');
    }
  };

  const monthOptions = document.querySelectorAll('.form_right_option_month');

  const arrowMonthUp = document.getElementById('arrow_top_month');
  arrowMonthUp.onclick = () => {
    if (selectCardMonth.value) {
      let curr = parseInt(selectCardMonth.value);
      let newV = ++curr;
      if (curr <= 12) {
        if (newV < 10) {
          selectCardMonth.value = `0${newV}`;
        } else {
          selectCardMonth.value = `${newV}`;
        }
      } else {
        selectCardMonth.value = '01';
      }
    }

    validation.isValidCardDateMonth = selectCardMonth.value;

    if (validation.isValidCardDateMonth) {
      isValidField(selectCardMonth, true);
    } else {
      isValidField(selectCardMonth, false, 'invalid');
    }
  };
  const arrowMonthLow = document.getElementById('arrow_bot_month');
  arrowMonthLow.onclick = () => {
    if (selectCardMonth.value) {
      let curr = parseInt(selectCardMonth.value);
      let newV = --curr;
      if (curr > 0) {
        if (newV > 9) {
          selectCardMonth.value = `${newV}`;
        } else {
          selectCardMonth.value = `0${newV}`;
        }
      } else {
        selectCardMonth.value = '12';
      }
    }

    validation.isValidCardDateMonth = selectCardMonth.value;

    if (validation.isValidCardDateMonth) {
      isValidField(selectCardMonth, true);
    } else {
      isValidField(selectCardMonth, false, 'invalid');
    }
  };

  const selectCardYear = document.querySelector('.form_right_select_year');
  selectCardYear.onchange = () => {
    validation.isValidCardDateYear = selectCardYear.value;

    if (validation.isValidCardDateYear) {
      isValidField(selectCardYear, true);
    } else {
      isValidField(selectCardYear, false, 'invalid');
    }
  };

  const arrowYearUp = document.getElementById('arrow_top_year');
  arrowYearUp.onclick = () => {
    if (selectCardYear.value) {
      let curr = parseInt(selectCardYear.value);
      let newV = ++curr;
      if (curr < 2034) {
        selectCardYear.value = newV.toString();
      } else {
        selectCardYear.value = '2024';
      }
    }

    validation.isValidCardDateYear = selectCardYear.value;

    if (validation.isValidCardDateYear) {
      isValidField(selectCardYear, true);
    } else {
      isValidField(selectCardYear, false, 'invalid');
    }
  };

  const arrowYearLow = document.getElementById('arrow_bot_year');
  arrowYearLow.onclick = () => {
    if (selectCardYear.value) {
      let curr = parseInt(selectCardYear.value);
      let newV = --curr;
      if (curr > 2023) {
        selectCardYear.value = newV.toString();
      } else {
        selectCardYear.value = '2034';
      }
    }

    validation.isValidCardDateYear = selectCardYear.value;

    if (validation.isValidCardDateYear) {
      isValidField(selectCardYear, true);
    } else {
      isValidField(selectCardYear, false, 'invalid');
    }
  };

  const cardHolderNameInp = document.querySelector('.form_right_card_name');
  cardHolderNameInp.oninput = () => {
    if (cardHolderNameInp.value.length > 40) {
      cardHolderNameInp.value = cardHolderNameInp.value.slice(0, 40);
    }

    validation.isValidCardName = cardHolderNameInp.value;

    if (validation.isValidCardName) {
      isValidField(cardHolderNameInp, true);
    } else {
      isValidField(cardHolderNameInp, false, 'Please enter a valid cardholder name.');
    }
  };

  const cardCVInp = document.querySelector('.form_right_card_cv');
  cardCVInp.oninput = () => {
    if (cardCVInp.value.length >= 4) {
      cardCVInp.value = cardCVInp.value.slice(0, 4);
    }

    validation.isValidCardCv = cardCVInp.value;

    if (validation.isValidCardCv) {
      isValidField(cardCVInp, true);
    } else {
      isValidField(cardCVInp, false, 'Please enter a valid CVC/CVV.');
    }
  };

  let isCreate = false;

  const isValidField = (field, isValid, invalidtext, isAppend) => {
    const invalidEl = document.createElement('div');
    invalidEl.classList.add('form_invalid_error');
    invalidEl.textContent = invalidtext;

    if (field.classList.contains('form_valid') || field.classList.contains('form_invalid')) {
      field.classList.remove('form_valid');
      field.classList.remove('form_invalid');
    }
    if (isValid) {
      field.classList.add('form_valid');
      field.classList.remove('form_invalid');
    } else {
      field.classList.remove('form_valid');
      field.classList.add('form_invalid');
    }
    if (field.classList.contains('form_invalid')) {
      if (!isCreate) {
        isCreate = true;
        if (!isAppend) {
          field.after(invalidEl);
        } else {
          field.append(invalidEl);
        }

        setTimeout(() => {
          if (invalidEl) {
            invalidEl.remove();
            isCreate = false;
          }
        }, 2000);
      }
    }
  };
}
