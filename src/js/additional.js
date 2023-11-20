export function isVisibleEl(el) {
  const animItemHeight = el.offsetHeight;
  const animItemOffset = offset(el).top;
  const animStart = 4;

  let animeItemPoint = window.innerHeight - animItemHeight / animStart;

  if (animItemHeight > window.innerHeight) {
    animeItemPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (pageYOffset > animItemOffset - animeItemPoint && pageYOffset < animItemOffset + animItemHeight) {
    return true;
  } else {
    return false;
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
