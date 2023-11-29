import { isVisibleEl } from './additional.js';
import { PICTURE } from './picture_info.js';

{
  const galleryImages = document.querySelectorAll('.gallery_img');
  const gallerySrcArr = [];
  const galleryItems = document.querySelectorAll('.gallery_item');

  Array.from(galleryImages).forEach((el) => gallerySrcArr.push(el.src));

  gallerySrcArr.sort((a, b) => Math.random() - 0.5);

  galleryImages.forEach((el, i) => {
    el.src = gallerySrcArr[i];
    el.setAttribute('data-id', i + 1);
  });

  window.addEventListener('scroll', () => {
    galleryItems.forEach((el, i) => {
      if (isVisibleEl(el)) {
        el.classList.add('gallery_item_anim');
      }
      el.onclick = () => showInfoImg(galleryImages[i].dataset.id, galleryImages[i].src);
    });
  });

  const showInfoImg = (imgNumber, src) => {
    const popup = document.querySelector('.gallery_popup');
    popup.onclick = () => closePopup(popup);
    const title = document.querySelector('.gallery_popup_title');
    const author = document.querySelector('.gallery_popup_author');
    const about = document.querySelector('.gallery_popup_about');
    const img = document.querySelector('.gallery_popup_img');
    const currIMG = PICTURE[imgNumber];

    popup.classList.add('gallery_popup_open');

    title.textContent = currIMG.title;
    author.textContent = currIMG.author;
    about.textContent = currIMG.about;

    img.src = src;
  };

  const closePopup = (el) => {
    el.classList.remove('gallery_popup_open');
  };
}
