{
  const btnControlArr = document.querySelectorAll('.welcome_controls_btn');
  btnControlArr.forEach((el, i) => {
    el.onclick = () => {
      changeSlider(i);
    };
  });

  const sliderItems = document.querySelectorAll('.welcome_slider_item');
  sliderItems.forEach((el) => {
    el.onmousedown = (event) => {
      dragAndDropHadler(event, event.clientX);
      event.preventDefault();
    };
  });

  const counter = document.querySelector('.welcome_controls_num');
  let prevTarget = 0;
  const maxSlidersIn = 4;
  const minSlidersIn = 0;

  const arrowLeft = document.querySelector('.welcome_control_arrow_left');
  arrowLeft.onclick = () => {
    if (prevTarget - 1 < minSlidersIn) {
      changeSlider(maxSlidersIn);
    } else {
      changeSlider(prevTarget - 1);
    }
  };

  const arrowRight = document.querySelector('.welcome_control_arrow_right');
  arrowRight.onclick = () => {
    if (prevTarget + 1 > maxSlidersIn) {
      changeSlider(minSlidersIn);
    } else {
      changeSlider(prevTarget + 1);
    }
  };

  const changeSlider = (target) => {
    sliderItems.forEach((curr, i) => {
      if (target === i) {
        btnControlArr[target].classList.add('welcome_controls_btn_active');
        counter.textContent = `0${target + 1}`;

        if (target > prevTarget) {
          setTimeout(() => {
            sliderItems[prevTarget].classList.add('move_left');
            sliderItems[prevTarget].classList.remove('move_from_right');
            sliderItems[prevTarget].classList.remove('move_from_left');

            setTimeout(() => {
              sliderItems[prevTarget].classList.remove('move_left');
              sliderItems[prevTarget].classList.remove('welcome_slider_item_visible');
              curr.classList.add('move_from_right');
              curr.classList.add('welcome_slider_item_visible');
              prevTarget = target;
            }, 50);
          }, 0);
        }

        if (target < prevTarget) {
          setTimeout(() => {
            sliderItems[prevTarget].classList.add('move_right');
            sliderItems[prevTarget].classList.remove('move_from_right');
            sliderItems[prevTarget].classList.remove('move_from_left');

            setTimeout(() => {
              sliderItems[prevTarget].classList.remove('move_right');
              sliderItems[prevTarget].classList.remove('welcome_slider_item_visible');
              curr.classList.add('move_from_left');
              curr.classList.add('welcome_slider_item_visible');
              prevTarget = target;
            }, 50);
          }, 0);
        }
      } else {
        btnControlArr[i].classList.remove('welcome_controls_btn_active');
      }
    });
  };

  const dragAndDropHadler = (event, prevX) => {
    event.target.onmouseup = (e) => mouseMove(e);

    function mouseMove(e) {
      let currX = e.clientX;

      if (currX > prevX) {
        if (prevTarget - 1 < minSlidersIn) {
          changeSlider(maxSlidersIn);
        } else {
          changeSlider(prevTarget - 1);
        }
      }
      if (currX < prevX) {
        if (prevTarget + 1 > maxSlidersIn) {
          changeSlider(minSlidersIn);
        } else {
          changeSlider(prevTarget + 1);
        }
      }

      event.target.onmousemove = null;
    }
  };
}
