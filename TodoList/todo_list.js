const taskInput = document.getElementById('taskInput');

const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText });
    taskInput.value = '';
    displayTasks();
  }
}

function displayTasks() {
  // Clear the existing content
  taskList.innerHTML = '';

  // Create a list item for each task
  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? 'checked' : ''
    }>
    <label for="task-${index}">${task.text}</label>`;

    li.querySelector('input').addEventListener('change', () =>
      toggleTask(index)
    );

    taskList.appendChild(li);
  });
}

// Toggle the status of the completion status of a specific task
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

// Retrieve only the tasks that are not marked as completed
function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  displayTasks();
}

addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);

displayTasks();
