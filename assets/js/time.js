const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
let day = date.getDay() + 1;

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

const $today = document.querySelector('.today');
const $currentTime = document.querySelector('.current-time');

const setCurrent = () => {
  $today.textContent = `${year}년 ${month < 10 ? '0' + month : month}월 ${
    day < 10 ? '0' + day : day
  }일`;
  $currentTime.textContent = `${hour < 10 ? '0' + hour : hour}시 ${
    minute < 10 ? '0' + minute : minute
  }분 ${second < 10 ? '0' + second : second}초`;
};

const currentTime = () => {
  second += 1;
  if (second === 60) {
    second = 0;
    minute += 1;

    if (minute === 60) {
      minute = 0;
      hour += 1;

      if (hour > 23) {
        hour = 0;
        day += 1;
      }
    }
  }

  $today.textContent = `${year}년 ${month < 10 ? '0' + month : month}월 ${
    day < 10 ? '0' + day : day
  }일`;
  $currentTime.textContent = `${hour < 10 ? '0' + hour : hour}시 ${
    minute < 10 ? '0' + minute : minute
  }분 ${second < 10 ? '0' + second : second}초`;
};

console.log(year, month, day);
setCurrent();

setInterval(function() {
  currentTime();
}, 1000);
