const taskInput = document.getElementById('task__input');
const taskButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
let removeButton;
let tasks;

function taskAdd() { 
    if (taskInput.value) {
        event.preventDefault();
        
        taskList.insertAdjacentHTML('beforeEnd', `
            <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`);

        taskInput.value = '';
        removeButton = document.getElementsByClassName('task__remove');
        tasks = document.getElementsByClassName('task');
    }
}

taskButton.addEventListener('click', taskAdd);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 13) {
        taskAdd();
    }
})

taskList.onclick = function(event) {
    let target = event.target;
    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();
    }
}

