let todos = [];
let temp = [];

// DOMs
const $todos = document.querySelector('#todos');
const $input = document.querySelector('#add-input');
const $completedAll = document.querySelector('#complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.tab');
let type = 'all';

// Func
const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javasript', completed: false },
  ];

  todos.sort((todoA, todoB) => todoB.id - todoA.id);
};

const separateTodo = (view) => {
  switch (view) {
    case 'all':
      break;

    case 'active':
      todos = [...todos].filter(todo => !todo.completed);
      break;

    case 'completed':
      todos = [...todos].filter(todo => todo.completed);
      break;

    default:
      break;
  }
  return todos;
};

const render = () => {
  temp = todos;
  let html = '';

  todos = separateTodo(type);

  todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}">
        <label class="check-label" for="ck-${id}">
          <input type="checkbox" class="check-complete" id="ck-${id}" ${completed ? 'checked' : ''}>
          <span class="content">${content}</span>
        </label>
        <button type="button" class="delete-button">X</button>
      </li>
    `;
  });

  $todos.innerHTML = html;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  todos = temp;
};


const findId = () => Math.max(0, ...todos.map(todo => todo.id)) + 1;

const addTodo = (content) => {
  todos = [{ id: findId(), content, completed: false }, ...todos];
};

const removeTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
};

const changeComplete = (id) => {
  todos = todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed } : todo);
};

const changeAll = (completed) => {
  todos = todos.map(todo => ({ ...todo, completed }));
};

const clearCompletedAll = () => {
  todos = todos.filter(todo => !todo.completed);
};

// Events
window.onload = () => {
  getTodos();
  render();
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();

  if (content === '' || keyCode !== 13) return;

  target.value = '';
  addTodo(content);
  render();
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('delete-button')) return;

  removeTodo(+target.parentNode.id);
  render();
};

$todos.onchange = ({ target }) => {
  changeComplete(+target.parentNode.parentNode.id);
  render();
};

$completedAll.onclick = ({ target }) => {
  changeAll(target.checked);
  render();
};

$clearCompleted.onclick = () => {
  clearCompletedAll();
  render();
};

$nav.onclick = ({ target }) => {
  if (target.classList.contains('tab')) return;

  type = target.id;

  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem === target);
  });

  render();
};