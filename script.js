document.getElementById('addTaskButton').addEventListener('click', () => {
    var taskInput = document.getElementById('newTask');
    var taskText = taskInput.value.trim();

    console.log("Button Clicked!");

    if(taskText !== ""){
        var li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => {
            if (li.style.textDecoration === "line-through") {
                li.style.textDecoration = "none";
            } else {
                li.style.textDecoration = "line-through";
            }
           li.appendChild(deleteButton);
        });

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