document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Vui lòng nhập tên công việc!');
            return;
        }

      
        const li = document.createElement('li');

        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            li.classList.toggle('completed', this.checked);
        });

        const span = document.createElement('span');
        span.textContent = taskText;

  
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });


        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

 
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);

    
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});