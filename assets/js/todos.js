const $input = document.querySelector('#add-input');
const $addBtn = document.querySelector('#add-btn');
const $todos = document.querySelector('#todos');

function addTodo(value) {
  if (!value.value.trim() === '') return alert('해야할 일을 입력해주세요.');

  $todos.innerHTML += `<li class="todos">
                        <label class="check-label">
                          <input type="checkbox">
                          <span>${value}</span>
                        </label>
                        <button type="button" class="delete-btn">삭제</button>
                      </li>`;

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

$todos.addEventListener('click', function (e) {
  if (!(e.target.classList.contains('delete-btn'))) return;

  this.removeChild(e.target.parentNode);
  $input.focus();
});