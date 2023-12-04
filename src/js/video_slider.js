import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';
import video0 from '../assets/video/video0.mp4';
import video1 from '../assets/video/video1.mp4';
import video2 from '../assets/video/video2.mp4';
import video3 from '../assets/video/video3.mp4';
import video4 from '../assets/video/video4.mp4';

import { isVisibleEl } from './additional';
import poster0 from '../assets/image/poster0.webp';
import poster1 from '../assets/image/poster1.webp';
import poster2 from '../assets/image/poster2.webp';
import poster3 from '../assets/image/poster3.webp';
import poster4 from '../assets/image/poster4.webp';

{
  tns({
    container: '.video_slider_main',
    items: 1,
    navAsThumbnails: true,
    arrowKeys: true,
    responsive: {
      1020: {
        items: 3,
      },
      390: {
        items: 2,
      },
    },
  });

  const video = document.querySelector('.video_source');
  const videoTAG = document.querySelector('.video_frame');
  videoTAG.poster = poster0;
  const progressBar = document.querySelector('.video_control_progress');
  const bigPlay = document.querySelector('.video_btn_play');
  const smallPlay = document.querySelector('.video_control_play');

  const dotHandlerClick = () => {
    const tnsArrowLeft = document.querySelector('.tns-controls [data-controls=prev]');
    tnsArrowLeft.onclick = () => moveLeft();

    const tnsArrowRight = document.querySelector('.tns-controls [data-controls=next]');
    tnsArrowRight.onclick = () => moveRight();

    const dotsArr = [];
    const dotCounts = 5;

    const videoSrc = [video0, video1, video2, video3, video4];
    const posters = [poster0, poster1, poster2, poster3, poster4];

    let target = 0;

    for (let i = 0; i < dotCounts; i++) {
      const dot = document.querySelector(`.tns-nav [data-nav='${i}']`);
      dotsArr.push(dot);
    }

    tnsArrowLeft;

    const moveLeft = () => {
      target--;
      if (target < 0) {
        target = videoSrc.length - 1;
      }

      video.src = videoSrc[target];
      videoTAG.poster = posters[target];

      changeVideo();
    };

    const moveRight = () => {
      target++;
      if (target > videoSrc.length - 1) {
        target = 0;
      }

      video.src = videoSrc[target];
      videoTAG.poster = posters[target];

      changeVideo();
    };

    dotsArr.forEach((el, i) => {
      el.onclick = () => {
        target = i;
        changeVideo();
        video.src = videoSrc[i];
        videoTAG.poster = posters[i];
      };
    });

    const changeVideo = () => {
      videoTAG.pause();
      videoTAG.currentTime = 0;

      progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #FFFFFF ${0}%, #FFFFFF 100%)`;
      smallPlay.classList.remove('video_control_pause');
      bigPlay.classList.remove('hiden');
      videoTAG.load();
      videoTAG.oncanplay = () => {
        progressBar.value = 0;

        videoTAG.oncanplay = null;
      };
    };

    const onKeyDownHandler = (e) => {
      if (document.fullscreenElement) {
        return;
      }
      const keyCode = e.code;

      if (isVisibleEl(videoTAG)) {
        switch (keyCode) {
          case 'ArrowLeft':
            e.preventDefault();

            moveLeft();
            break;
          case 'ArrowRight':
            e.preventDefault();

            moveRight();
            break;
        }
      }
    };
    document.body.addEventListener('keydown', (e) => onKeyDownHandler(e));
  };

  dotHandlerClick();
}
