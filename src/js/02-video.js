import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdateDate, 1000));

function timeUpdateDate(data) {
  try {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  } catch (error) {
    console.log(error.name);
  }
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.off('timeupdate', timeUpdateDate);

try {
  const currentTime = localStorage.getItem('videoplayer-current-time') || 0;
  player.setCurrentTime(JSON.parse(currentTime));
} catch (error) {
  console.log(error.name);
}
