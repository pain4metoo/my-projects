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
      isValidField(dateLabel, false);
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
    localStorage.setItem('time', time.value);
    validation.isValidTime = time.value;
    updateForm();

    if (validation.isValidTime) {
      isValidField(time, true);
    } else {
      isValidField(time, false);
    }
  };

  const name = document.querySelector('.form_name');
  name.oninput = () => {
    validation.isValidName = name.value;

    if (validation.isValidName) {
      isValidField(name, true);
    } else {
      isValidField(name, false);
    }
  };

  const email = document.querySelector('.form_email');

  email.oninput = () => {
    validation.isValidEmail = email.value;

    if (validation.isValidEmail) {
      isValidField(email, true);
    } else {
      isValidField(email, false);
    }
  };

  const phone = document.querySelector('.form_phone');

  phone.oninput = () => {
    validation.isValidPhone = phone.value;

    if (validation.isValidPhone) {
      isValidField(phone, true);
    } else {
      isValidField(phone, false);
    }
  };

  const checkValidTicketsCount = () => {
    const ticketCountsField = document.querySelector('.form_entry_ticket');

    validation.isValidTickets = localStorage.getItem('basic') || localStorage.getItem('senior');

    if (validation.isValidTickets) {
      isValidField(ticketCountsField, true);
    } else {
      isValidField(ticketCountsField, false);
    }
  };

  const checkValidTicketType = () => {
    const ticketTypeField = document.querySelector('.form_select');

    validation.isValidTypeTicket = localStorage.getItem('type');

    if (validation.isValidTypeTicket) {
      isValidField(ticketTypeField, true);
    } else {
      isValidField(ticketTypeField, false);
    }
  };

  const isValidField = (field, isValid) => {
    if (field.classList.contains('form_valid') || field.classList.contains('form_invalid')) {
      field.classList.remove('form_valid');
      field.classList.remove('form_invalid');
    }
    if (isValid) {
      field.classList.add('form_valid');
    } else {
      field.classList.add('form_invalid');
    }
  };
}
