document.getElementById('addTaskButton').addEventListener('click', () => {
    var taskInput = document.getElementById('newTask');
    var taskText = taskInput.value.trim();

    console.log("Button Clicked!");

    if(taskText !== ""){
        var li = document.createElement('li');
        li.textContent = taskText;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('deleteTaskButton');
        deleteButton.addEventListener('click', () =>{
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = "";
    }
});