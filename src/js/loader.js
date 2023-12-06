{
  window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      let preloader = document.querySelector('.preload');
      if (!preloader.classList.contains('change')) {
        preloader.classList.add('change');
      }
      document.body.style.overflow = 'initial';
    }, 1000);
  });
}
