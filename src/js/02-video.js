import Vimeo from 'vimeo-player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');

const player = new Vimeo(playerElement);

const savePlaybackTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

const loadPlaybackTime = () => {
  return parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
};

player.setCurrentTime(loadPlaybackTime());

player.on(
  'timeupdate',
  throttle(data => {
    savePlaybackTime(data.seconds);
  }, 1000)
);
