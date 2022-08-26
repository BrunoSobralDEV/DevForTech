const $ = (query) => document.querySelector(query);

const inputElement = $('#taskInput')
const btnElement = $('#taskBtn')
const tasksContainer = $('.tasks-container');
const addTaskButton = $('#addTaskButton');


const validateInput = () => {
  
}

const handleAddTask = () => {
  const taskItemContainer = document.createElement('div');
  taskItemContainer.classList.add('task-item');

  const taskContent = document.createElement('p');
  taskContent.innerText = inputElement.value;

  const deleteItem = document.createElement('i');
  deleteItem.classList.add('far');
  deleteItem.classList.add('fa-trash-alt');

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement.value = '';
}

addTaskButton.addEventListener('click', () => handleAddTask());