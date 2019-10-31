const $input = document.querySelector('#add-input');
const $addBtn = document.querySelector('#add-btn');
const $ul = document.querySelector('#todos');

$addBtn.addEventListener('click', function () {
  if (!$input.value) return alert('해야할 일을 입력해주세요.');

  $ul.innerHTML += `<li class="todos">${$input.value}</li>`;
  $input.value = '';
  $input.focus();
});