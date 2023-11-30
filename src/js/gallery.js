import { isVisibleEl } from './additional.js';
import { PICTURE } from './picture_info.js';
import img1 from '../assets/image/gallery_1.jpg';
import img2 from '../assets/image/gallery_2.jpg';
import img3 from '../assets/image/gallery_3.jpg';
import img4 from '../assets/image/gallery_4.jpg';
import img5 from '../assets/image/gallery_5.jpg';
import img6 from '../assets/image/gallery_6.jpg';
import img7 from '../assets/image/gallery_7.jpg';
import img8 from '../assets/image/gallery_8.jpg';
import img9 from '../assets/image/gallery_9.jpg';
import img10 from '../assets/image/gallery_10.jpg';
import img11 from '../assets/image/gallery_11.jpg';
import img12 from '../assets/image/gallery_12.jpg';
import img13 from '../assets/image/gallery_13.jpg';
import img14 from '../assets/image/gallery_14.jpg';
import img15 from '../assets/image/gallery_15.jpg';

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

  window.addEventListener('scroll', () => {
    galleryItems.forEach((el, i) => {
      if (isVisibleEl(el)) {
        el.classList.add('gallery_item_anim');
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
