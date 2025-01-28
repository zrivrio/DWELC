const taskList = [
    { assignedTo: "Jon", task: "Task_1", duration: 20, break: 5 },
    { assignedTo: "Doe", task: "Task_2", duration: 15, break: 3 },
    { assignedTo: "Foo", task: "Task_3", duration: 60, break: 15 },
];

let globalSeconds = 0;
let globalTimerInterval;
const tasks = [];

function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

function updateGlobalTimer() {
    globalSeconds++;
    document.querySelector("#globalTimer").textContent = formatTime(globalSeconds);
}

function startAll() {
    if (!globalTimerInterval) {
        globalTimerInterval = setInterval(updateGlobalTimer, 1000);
    }
    tasks.forEach(task => task.start());
}

function pauseAll() {
    clearInterval(globalTimerInterval);
    globalTimerInterval = null;
    tasks.forEach(task => task.pause());
}

function stopAll() {
    clearInterval(globalTimerInterval);
    globalTimerInterval = null;
    globalSeconds = 0;
    document.querySelector("#globalTimer").textContent = formatTime(globalSeconds);
    tasks.forEach(task => task.reset());
}

class Task {
    constructor(task, element) {
        this.task = task;
        this.element = element;
        this.taskTimer = element.querySelector(".task-timer");
        this.breakTimer = element.querySelector(".break-timer");
        this.status = element.querySelector(".status");
        this.taskTime = task.duration;
        this.breakTime = task.break;
        this.taskInterval = null;
        this.breakInterval = null;
    }

    start() {
        if (!this.taskInterval) {
            this.element.classList.add("started");
            this.taskInterval = setInterval(() => {
                this.taskTime--;
                this.taskTimer.textContent = formatTime(this.taskTime);
                if (this.taskTime === 0) {
                    clearInterval(this.taskInterval);
                    this.taskInterval = null;
                    this.status.textContent = "Task Done";
                    this.startBreak();
                }
            }, 1000);
        }
    }

    startBreak() {
        this.element.classList.remove("started");
        this.element.classList.add("finished");
        this.breakInterval = setInterval(() => {
            this.breakTime--;
            this.breakTimer.textContent = formatTime(this.breakTime);
            if (this.breakTime === 0) {
                clearInterval(this.breakInterval);
                this.breakInterval = null;
                this.status.textContent = "Break Done";
                this.element.classList.remove("finished");
                this.element.classList.add("done");
            }
        }, 1000);
    }

    pause() {
        clearInterval(this.taskInterval);
        clearInterval(this.breakInterval);
        this.taskInterval = null;
        this.breakInterval = null;
    }

    reset() {
        this.pause();
        this.taskTime = this.task.duration;
        this.breakTime = this.task.break;
        this.taskTimer.textContent = formatTime(this.taskTime);
        this.breakTimer.textContent = formatTime(this.breakTime);
        this.status.textContent = "";
        this.element.className = "task";
    }
}

window.onload = () => {
    const taskContainer = document.querySelector("#taskContainer");

    taskList.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <h3>${task.task}</h3>
            <p><strong>Assigned to:</strong> ${task.assignedTo}</p>
            <p><strong>Task Time:</strong> <span class="task-timer">${formatTime(task.duration)}</span></p>
            <p><strong>Break Time:</strong> <span class="break-timer">${formatTime(task.break)}</span></p>
            <p class="status"></p>
        `;
        taskContainer.appendChild(taskElement);
        tasks.push(new Task(task, taskElement));
    });
};
