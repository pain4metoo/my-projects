{
  const nav = document.querySelector('.header_nav');
  const logo = document.querySelector('.header_inner_logo');
  const burger = document.querySelector('.header_burger');
  burger.onclick = () => openBurgerMenu();

  const stick1 = document.querySelector('.header_burger_item_1');
  const stick2 = document.querySelector('.header_burger_item_2');
  const stick3 = document.querySelector('.header_burger_item_3');

  const leftMenu = document.querySelector('.welcome_left');

  const openBurgerMenu = () => {
    stick1.classList.toggle('header_burger_item_rotate');
    stick2.classList.toggle('header_burger_item_rotate');
    stick3.style.display = 'none';

    if (stick1.classList.contains('header_burger_item_rotate')) {
      nav.classList.add('header_nav_show');
      leftMenu.classList.add('welcome_left_menu_hide');
    } else {
      closeBurgerMenu();
    }
  };

  const closeBurgerMenu = () => {
    stick1.classList.remove('header_burger_item_rotate');
    stick2.classList.remove('header_burger_item_rotate');
    stick3.style.display = 'block';
    nav.classList.remove('header_nav_show');
    leftMenu.classList.remove('welcome_left_menu_hide');
  };
}
