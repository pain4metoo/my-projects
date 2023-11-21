export function isVisibleEl(el) {
  const elHeight = el.offsetHeight;
  const elOffset = offset(el).top;
  const elStart = 4;

  let elPoint = window.innerHeight - elHeight / elStart;

  if (elHeight > window.innerHeight) {
    elPoint = window.innerHeight - window.innerHeight / elStart;
  }

  if (pageYOffset > elOffset - elPoint && pageYOffset < elOffset + elHeight) {
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
