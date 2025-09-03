const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  // Delete button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = "×"; // cross symbol
  removeBtn.addEventListener('click', () => li.remove());

  // Toggle completed task
  li.addEventListener('click', (e) => {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle('completed');
    }
  });

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = '';
}
