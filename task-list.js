const taskList = document.getElementById("taskList");

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskList.innerHTML = ""; // Clear old tasks

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks found.</p>";
        return;
    }

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task-item";
        if (task.status === "Completed") div.classList.add("completed");

        div.innerHTML = `
      <h3>${task.title}</h3>
      <p><strong>Due:</strong> ${task.dueDate}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <div class="btn-group">
        <button class="view-btn" onclick="viewTask(${task.id})">View</button>
        <button class="complete-btn" onclick="markComplete(${task.id})">Mark Complete</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
        taskList.appendChild(div);
    });
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function markComplete(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.id === id) task.status = "Completed";
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function viewTask(id) {
    localStorage.setItem("viewTaskId", id);
    window.location.href = "task-detail.html";
}

loadTasks();