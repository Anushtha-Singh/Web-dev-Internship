
document.addEventListener('DOMContentLoaded' , function() {
    const addButton = document.getElementById('add');
    const newTask = document.getElementById('new-task');
    const completed = document.getElementById('complete');
    const incompleted = document.getElementById('incomplete');
    const taskList = document.getElementById('task-list');


    addButton.addEventListener('click' , addTask);
    completed.addEventListener('click' , () => {
        if(completed.innerText === 'Completed') {
            completedTasks();
            completed.innerText = 'Show All';
            if(incompleted.innerText === 'Show All') {
                incompleted.innerText = 'Incompleted';
            }
        } else {
            showAllTasks();
            completed.innerText = 'Completed';
        }
    });

    incompleted.addEventListener('click' , () => {
        if(incompleted.innerText === 'Incompleted') {
            incompletedTasks();
            incompleted.innerText = 'Show All';
            if(completed.innerText === 'Show All') {
                completed.innerText = 'Completed';
            }
        }
        else {
            showAllTasks();
            incompleted.innerText = 'Incompleted';
        }
    });

    function addTask() {
        const task = newTask.value.trim();
        if(task != '') {
            const li = document.createElement('li');
            //mind there is difference between innerText and innerHTML
            li.innerHTML = `
            <input type ="checkbox" class="task-checkbox">
                <span>${task}</span>
                <button id="delete-button">x</button>`;
            taskList.appendChild(li);//this will add the task in ul list
            //clear the input box again
            newTask.value= '';

            const delete_button = li.querySelector('#delete-button');
            delete_button.addEventListener('click', () => li.remove());
        }
    }
    function incompletedTasks() {
        const task = taskList.querySelectorAll('li');
        task.forEach(task => {
            const checkbox = task.querySelector('.task-checkbox');
            if(checkbox.checked) {
                task.style.display = 'none';
            }
            else {
                task.style.display = 'flex';
            }
        });
    }
    
    function completedTasks() {
        const task = taskList.querySelectorAll('li');
        task.forEach(task => {
            const checkbox = task.querySelector('.task-checkbox');
            if(checkbox.checked) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });  
    }

    function showAllTasks() {
        const task = taskList.querySelectorAll('li');
        task.forEach(task => {
            task.style.display = 'flex';
        })
    }
});
