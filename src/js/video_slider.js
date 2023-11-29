import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';
import video0 from '../assets/video/video0.mp4';
import video1 from '../assets/video/video1.mp4';
import video2 from '../assets/video/video2.mp4';
import video3 from '../assets/video/video3.mp4';
import video4 from '../assets/video/video4.mp4';
{
  tns({
    container: '.video_slider',
    items: 1,
    navAsThumbnails: true,
    arrowKeys: true,
    responsive: {
      1000: {
        items: 3,
      },
      390: {
        items: 2,
      },
    },
  });

  const video = document.querySelector('.video_source');
  const videoTAG = document.querySelector('.video_frame');
  const progressBar = document.querySelector('.video_control_progress');
  const bigPlay = document.querySelector('.video_btn_play');
  const smallPlay = document.querySelector('.video_control_play');

  (function dotHandlerClick() {
    const dotsArr = [];
    const dotCounts = 5;
    const videoSrc = [video0, video1, video2, video3, video4];

    for (let i = 0; i < dotCounts; i++) {
      const dot = document.querySelector(`.tns-nav [data-nav='${i}']`);
      dotsArr.push(dot);
    }

    dotsArr.forEach((el, i) => {
      el.onclick = () => {
        videoTAG.pause();
        videoTAG.currentTime = 0;
        progressBar.value = '0';
        progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #FFFFFF ${0}%, #FFFFFF 100%)`;
        smallPlay.classList.remove('video_control_pause');
        bigPlay.classList.remove('hiden');
        video.src = videoSrc[i];
        videoTAG.load();
      };
    });
  })();
}
