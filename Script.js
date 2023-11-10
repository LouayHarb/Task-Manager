document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskName = taskInput.value.trim();
        if (taskName) {
            addTask(taskName);
            taskInput.value = '';
        }
    });

        taskList.addEventListener('click', function (event) {
        const taskItem = event.target.closest('li');
        if (taskItem) {
            if (event.target.classList.contains('complete-task')) {
                toggleTaskCompleted(taskItem);
            } else if (event.target.classList.contains('delete-task')) {
                deleteTask(taskItem);
            }
        }
    });

        function addTask(taskName) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskName}</span>
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function toggleTaskCompleted(taskItem) {
        taskItem.classList.toggle('completed');
    }


    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
