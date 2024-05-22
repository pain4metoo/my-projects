import { isVisibleEl } from './additional.js';
import { PICTURE } from './picture_info.js';
import img1 from '../assets/image/gallery_1.webp';
import img2 from '../assets/image/gallery_2.webp';
import img3 from '../assets/image/gallery_3.webp';
import img4 from '../assets/image/gallery_4.webp';
import img5 from '../assets/image/gallery_5.webp';
import img6 from '../assets/image/gallery_6.webp';
import img7 from '../assets/image/gallery_7.webp';
import img8 from '../assets/image/gallery_8.webp';
import img9 from '../assets/image/gallery_9.webp';
import img10 from '../assets/image/gallery_10.webp';
import img11 from '../assets/image/gallery_11.webp';
import img12 from '../assets/image/gallery_12.webp';
import img13 from '../assets/image/gallery_13.webp';
import img14 from '../assets/image/gallery_14.webp';
import img15 from '../assets/image/gallery_15.webp';

{
  const galleryImages = document.querySelectorAll('.gallery_img');
  const gallerySrcArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  const galleryItems = document.querySelectorAll('.gallery_item');

  const setSrcInPicture = () => {
    let counter = 0;
    for (let key in PICTURE) {
      PICTURE[key].src = gallerySrcArr[counter];
      counter++;
    }
  };

  setSrcInPicture();

  gallerySrcArr.sort((a, b) => Math.random() - 0.5);

  galleryImages.forEach((el, i) => {
    el.src = gallerySrcArr[i];
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

  const faq = document.querySelector('.gallery_faq_block');
  faq.onclick = () => {
    localStorage.setItem('museumfaq', '1');
    faq.classList.remove('gallery_faq_show');
  };

  window.addEventListener('scroll', () => {
    galleryItems.forEach((el, i) => {
      if (isVisibleEl(el)) {
        el.classList.add('gallery_item_anim');
        if (!faq.classList.contains('gallery_faq_show')) {
          if (localStorage.getItem('museumfaq') === '0') {
            faq.classList.add('gallery_faq_show');
          }
        }
      }

      el.onclick = () => {
        const src = gallerySrcArr[i];
        let target = 1;

        for (let key in PICTURE) {
          if (PICTURE[key].src === src) {
            target = key;
            break;
          }
        }

        showInfoImg(target, src);
      };
    });
  });
}
