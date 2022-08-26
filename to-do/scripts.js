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

  taskContent.addEventListener('click', () => handleClick(taskContent))

  const deleteItem = document.createElement('i');
  deleteItem.classList.add('far');
  deleteItem.classList.add('fa-trash-alt');

  deleteItem.addEventListener('click', () => 
    handleDeleteClick(taskItemContainer, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement.value = '';
}

const handleClick = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
    
    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle('completed');
    }
  }
}

const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      taskItemContainer.remove();
    }
  }
}


addTaskButton.addEventListener('click', () => handleAddTask());