const $input  = document.querySelector('#add-input');
const $addBtn = document.querySelector('#add-btn');
const $ul     = document.querySelector('#todos');

$addBtn.addEventListener('click', function () {
  $ul.innerHTML += `<li class="todos">${$input.value}</li>`;
  $input.value = '';
  $input.focus();
});