import { isVisibleEl } from './additional';

{
  const setVolume = () => {
    if (!localStorage.getItem('museumvolume')) {
      localStorage.setItem('museumvolume', 0.4);
    }

    video.volume = +localStorage.getItem('museumvolume');
    progressVol.value = +localStorage.getItem('museumvolume') * 100;

    onShowProgressVol();
  };

  const onKeyDownHandler = (e) => {
    if (document.fullscreenElement) {
      return;
    }
    const keyCode = e.code;
    const form = document.querySelector('.form_layout');

    if (isVisibleEl(video) && !form.classList.contains('form_layout_show')) {
      switch (keyCode) {
        case 'ArrowUp':
          event.preventDefault();
          progressVol.value = (+progressVol.value + 10).toString();
          onShowProgressVol();
          break;
        case 'ArrowDown':
          event.preventDefault();
          progressVol.value = (+progressVol.value - 10).toString();
          onShowProgressVol();
          break;
        case 'Digit1':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 10;
          break;
        case 'Digit2':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 20;
          break;
        case 'Digit3':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 30;
          break;
        case 'Digit4':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 40;
          break;
        case 'Digit5':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 50;
          break;
        case 'Digit6':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 60;
          break;
        case 'Digit7':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 70;
          break;
        case 'Digit8':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 80;
          break;
        case 'Digit9':
          event.preventDefault();
          video.currentTime = (video.duration / 100) * 90;
          break;
        case 'Space':
          event.preventDefault();
          onTogglePlay();
          break;
        case 'KeyM':
          event.preventDefault();
          onToggleVolume();
          break;
        case 'KeyK':
          event.preventDefault();
          onTogglePlay();
          break;
        case 'KeyF':
          event.preventDefault();
          onFullScreen();
          break;
      }
    }
  };

  const onTogglePlay = () => {
    if (document.fullscreenElement) {
      return;
    }
    if (video.paused) {
      video.play();
      btnPlay.classList.add('video_control_pause');
      bigBtnPlay.classList.add('hiden');
    } else {
      video.pause();
      btnPlay.src = '../assets/svg/video_play.svg';
      btnPlay.classList.remove('video_control_pause');
      bigBtnPlay.classList.remove('hiden');
    }
  };

  const onShowProgressVideo = () => {
    if (document.fullscreenElement) {
      return;
    }
    const value = progressBar.value;
    progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #FFFFFF ${value}%, #FFFFFF 100%)`;

    video.currentTime = video.duration * (value / 100);
  };

  const updateProgressVideo = () => {
    if (document.fullscreenElement) {
      return;
    }
    let value = (100 * video.currentTime) / video.duration;

    progressBar.value = Math.round(value);

    progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${Math.round(
      value
    )}%, #FFFFFF ${Math.round(value)}%, #FFFFFF 100%)`;

    if (video.duration === video.currentTime) {
      endVideo();
    }
  };

  const endVideo = () => {
    if (document.fullscreenElement) {
      return;
    }
    video.pause();
    btnPlay.src = '../assets/svg/video_play.svg';
    btnPlay.classList.remove('video_control_pause');
    bigBtnPlay.classList.remove('hiden');
    video.currentTime = 0;
    updateProgressVideo();
  };

  const onToggleVolume = () => {
    if (document.fullscreenElement) {
      return;
    }
    if (+progressVol.value > 0) {
      video.volume = 0;
      volumeIMG.classList.add('video_control_volume_off');
      progressVol.value = '0';
    } else {
      video.volume = '0.4';
      progressVol.value = 40;
      volumeIMG.classList.remove('video_control_volume_off');
    }

    onShowProgressVol();
  };

  const onShowProgressVol = () => {
    if (document.fullscreenElement) {
      return;
    }
    const value = progressVol.value;

    if (+value === 0) {
      video.volume = 0;
      volumeIMG.classList.add('video_control_volume_off');
    } else {
      video.volume = value / 100;
      volumeIMG.classList.remove('video_control_volume_off');
    }

    localStorage.setItem('museumvolume', progressVol.value / 100);

    progressVol.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressVol.value}%, #fff ${progressVol.value}%, white 100%)`;
  };

  const onFullScreen = () => {
    if (document.fullscreenElement) {
      return;
    }
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const video = document.querySelector('.video_frame');
  video.onclick = () => onTogglePlay();
  video.ontimeupdate = () => updateProgressVideo();

  const bigBtnPlay = document.querySelector('.video_btn_play');
  bigBtnPlay.onclick = () => onTogglePlay();

  const btnPlay = document.querySelector('.video_control_play');
  btnPlay.onclick = () => onTogglePlay();

  const progressBar = document.querySelector('.video_control_progress');
  progressBar.oninput = () => onShowProgressVideo();

  const volumeIMG = document.querySelector('.video_control_volume');
  volumeIMG.onclick = () => onToggleVolume();

  const progressVol = document.querySelector('.video_control_progress_vol');
  progressVol.oninput = () => onShowProgressVol();

  const btnFullscreen = document.querySelector('.video_control_full');
  btnFullscreen.onclick = () => onFullScreen();

  document.body.addEventListener('keydown', (e) => onKeyDownHandler(e));

  setVolume();
}
