(function () {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDay().toString();
  const $today = document.querySelector('.today');

  const setDate = () => {
    $today.textContent = `${year.slice(-2)}년 ${month < 10 ? '0'+ month : month}월 ${day < 10 ? '0'+ day : day}일`
  };

  setDate();
}());