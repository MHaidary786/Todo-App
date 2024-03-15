const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const deleteAll = document.getElementById("delAll");
const deleteComplete = document.getElementById("delComp");

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        let listItem = this.parentNode;
        listItem.style.textDecoration = "line-through";
      } else {
        let listItem = this.parentNode;
        listItem.style.textDecoration = "none";
      }
    });

    let label = document.createElement("label");
    label.textContent = taskText;

    let remove = document.createElement("button");
    remove.textContent = "Remove";

    let edit = document.createElement("button");
    edit.textContent = "Edit";

    edit.addEventListener("click", function () {
      label.textContent = prompt("Enter new task text:");
    })

    remove.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(remove);

    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("please enter a value");
  }
}

deleteAll.addEventListener("click", deleteAllTasks);

function deleteAllTasks() {
  taskList.innerHTML = "";
}

deleteComplete.addEventListener("click", deleteCompletedTasks);

function deleteCompletedTasks() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let listItem = checkbox.parentNode;
      listItem.remove();
    }
  });
}
