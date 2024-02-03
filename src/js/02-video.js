import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new VimeoPlayer(document.getElementById('vimeo-player'));

// Function to save playback time to local storage
const savePlaybackTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

// Function to load and set playback time from local storage
const loadPlaybackTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    vimeoPlayer.setCurrentTime(parseFloat(savedTime));
  }
};

// Initialize the player
vimeoPlayer.ready().then(() => {
  // Load playback time from local storage on player ready
  loadPlaybackTime();

  // Add event listener for timeupdate using lodash.throttle
  vimeoPlayer.on(
    'timeupdate',
    throttle(event => {
      // Save playback time to local storage
      savePlaybackTime(event.seconds);
    }, 1000)
  ); // Throttle to once per second
});
