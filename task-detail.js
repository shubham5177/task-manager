const taskId = Number(localStorage.getItem("viewTaskId"));
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let task = tasks.find(t => t.id === taskId);

if (!task) {
    alert("Task not found!");
    window.location.href = "task-list.html";
}

document.getElementById("edit-title").value = task.title;
document.getElementById("edit-description").value = task.description;
document.getElementById("edit-dueDate").value = task.dueDate;
document.getElementById("edit-priority").value = task.priority;
document.getElementById("edit-status").value = task.status;

function updateTask(event) {
    event.preventDefault();

    task.title = document.getElementById("edit-title").value;
    task.description = document.getElementById("edit-description").value;
    task.dueDate = document.getElementById("edit-dueDate").value;
    task.priority = document.getElementById("edit-priority").value;
    task.status = document.getElementById("edit-status").value;

    tasks = tasks.map(t => t.id === taskId ? task : t);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task updated successfully!");
    window.location.href = "task-list.html";
}