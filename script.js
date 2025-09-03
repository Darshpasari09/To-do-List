const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';
  removeBtn.addEventListener('click', () => li.remove());

  li.addEventListener('click', () => li.classList.toggle('completed'));

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = '';
}
