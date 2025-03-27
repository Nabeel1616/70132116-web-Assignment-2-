function addTask() {
    let input = document.getElementById("todoInput");
    let task = input.value;
    if (task === '') return;
  
    let li = document.createElement("li");
    li.textContent = task;
    document.getElementById("todoList").appendChild(li);
  
    input.value = '';
  }
  