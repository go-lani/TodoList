const $input = document.querySelector('#add-input');
const $addBtn = document.querySelector('#add-btn');
const $ul = document.querySelector('#todos');

function addTodo(value) {
  if (!$input.value) return alert('해야할 일을 입력해주세요.');

  $ul.innerHTML += `<li class="todos"><label><input type="checkbox">${value}</label><button type="button">삭제</button></button></li>`;
  $input.value = '';
  $input.focus();
}

$addBtn.addEventListener('click', function () {
  addTodo($input.value);
});

$input.addEventListener('keyup', function (e) {
  if (!(e.keyCode === 13)) return;

  addTodo($input.value);
});