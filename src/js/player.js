{
  const video = document.querySelector('.video_frame');
  video.onclick = () => onTogglePlay();
  video.ontimeupdate = () => updateProgressVideo();
  video.volume = 0.4;

  const bigBtnPlay = document.querySelector('.video_btn_play');
  bigBtnPlay.onclick = () => onTogglePlay();

  const btnPlay = document.querySelector('.video_control_play');
  btnPlay.onclick = () => onTogglePlay();

  const progressBar = document.querySelector('.video_control_progress');
  progressBar.oninput = () => onShowProgressVideo();
  progressBar.onclick = (e) => onRewindVideo(e);

  const volumeIMG = document.querySelector('.video_control_volume');
  volumeIMG.onclick = () => onToggleVolume();

  const progressVol = document.querySelector('.video_control_progress_vol');
  progressVol.oninput = () => onShowProgressVol();

  const btnFullscreen = document.querySelector('.video_control_full');
  btnFullscreen.onclick = () => onFullScreen();

  const onTogglePlay = () => {
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
    const progress = progressBar.value;
    progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress}%, #fff ${progress}%, white 100%)`;
  };

  const updateProgressVideo = () => {
    let value = Math.floor(video.currentTime) / (Math.floor(video.duration) / 100);

    progressBar.value = value;
    onShowProgressVideo();
  };

  const onRewindVideo = (event) => {
    let width = event.target.offsetWidth;
    let pos = event.offsetX;
    this.value = (100 * pos) / width;
    video.currentTime = video.duration * (pos / width);
  };

  const onToggleVolume = () => {
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
    const value = progressVol.value;

    if (+value === 0) {
      video.volume = 0;
      volumeIMG.classList.add('video_control_volume_off');
    } else {
      video.volume = value / 100;
      volumeIMG.classList.remove('video_control_volume_off');
    }
    progressVol.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressVol.value}%, #fff ${progressVol.value}%, white 100%)`;
  };

  const onFullScreen = () => {
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
}
