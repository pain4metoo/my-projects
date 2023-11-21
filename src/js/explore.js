{
  const exploreSlider = document.querySelector('.explore_slider');
  const before = document.querySelector('.explore_slider_before');

  const beforeIMG = document.querySelector('.explore_img_before');
  const change = document.querySelector('.explore_change');

  const body = document.body;

  let exploreActive = false;

  const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, exploreSlider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  document.addEventListener('DOMContentLoaded', () => {
    let width = exploreSlider.offsetWidth;
    beforeIMG.style.width = `${width}px`;
  });

  change.addEventListener('mousedown', () => {
    exploreActive = true;
  });

  body.addEventListener('mouseup', () => {
    exploreActive = false;
  });

  body.addEventListener('mouseleave', () => {
    exploreActive = false;
  });

  body.addEventListener('mousemove', (e) => {
    if (!exploreActive) {
      return;
    }

    let x = e.pageX;
    x -= exploreSlider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  });

  change.addEventListener('touchstart', () => {
    exploreActive = true;
  });

  body.addEventListener('touchend', () => {
    exploreActive = false;
  });

  body.addEventListener('touchcancel', () => {
    exploreActive = false;
  });

  body.addEventListener('touchmove', (e) => {
    if (!exploreActive) {
      return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= exploreSlider.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
  });
}
