// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearTasksBtn = document.getElementById("clearTasksBtn");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

// Add task when the button is clicked
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = ""; // Clear the input
  }
});

// Clear tasks when the button is clicked
clearTasksBtn.addEventListener("click", () => {
  localStorage.removeItem("tasks");
  taskList.innerHTML = ""; // Clear the list
});

// Add a task to the list and update localStorage
function addTask(taskText) {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);

  saveTask(taskText);
}

// Save a task to localStorage
function saveTask(taskText) {
  const tasks = getTasks();
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage and populate the list
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach((taskText) => {
    addTask(taskText);
  });
}

// Get tasks array from localStorage
function getTasks() {
  const tasksString = localStorage.getItem("tasks") || "[]";
  return JSON.parse(tasksString);
}
