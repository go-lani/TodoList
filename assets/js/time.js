const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const $currentTime = document.querySelector('.current-time');


const setTime = () => {
  $currentTime.textContent = `${hour < 10 ? '0' + hour : hour}시 ${minute < 10 ? '0' + minute : minute}}분 ${second < 10 ? '0' + second : second}초`
};

setTime();