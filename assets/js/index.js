let tasks = [
    { id: 1, description: "Trea 1", completed: false },
    { id: 2, description: "Tarea 2", completed: true },
];

const taskList = document.getElementById("list-tasks");
const totalSpan = document.getElementById("total");
const completedSpan = document.getElementById("completed");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
            <span>${task.description}</span>
            <div>
                <button onclick="toggleTask(${task.id})">✅</button>
                <button onclick="deleteTask(${task.id})">❌</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateSummary();
}

function addTask() {
    const input = document.getElementById("input");
    const description = input.value.trim();
    console.log("Descripción capturada:", description);
    if (description !== "") {
        const newTask = {
            id: Date.now(),
            description,
            completed: false
        };
        tasks.push(newTask);
        input.value = "";
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function updateSummary() {
    totalSpan.textContent = tasks.length;
    completedSpan.textContent = tasks.filter(task => task.completed).length;
}

document.addEventListener("DOMContentLoaded", renderTasks);