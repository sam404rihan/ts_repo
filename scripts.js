var incompleteTasks = 0;
var taskCount = 0;
var completedTasks = 0;
function addT() {
    if (taskCount > 6) {
        alert('Complete your current tasks');
        return;
    }
    var inputElement = document.getElementById("input");
    var input = inputElement.value;
    if (!input) {
        alert('Try to do something lol');
        return;
    }
    var x = document.getElementById("taskList");
    var div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'w-11/12', 'm-1', 'p-1.5', 'border', 'border-gray-300', 'rounded', 'bg-gray-100', 'text-black', 'opacity-80', 'overflow-auto');
    div.innerHTML = "".concat(input, "<div><button class='complete bg-green-500 text-white p-1 rounded'>Completed</button></div><button class='delete bg-red-500 text-white p-1 rounded'>Remove</button>");
    div.querySelector('.complete').addEventListener('click', function () { return markAsCompleted(div.querySelector('.complete')); });
    div.querySelector('.delete').addEventListener('click', function () { return removeTask(div.querySelector('.delete')); });
    taskCount += 1;
    x.appendChild(div);
    inputElement.value = '';
    incompleteTasks += 1;
    document.getElementById('taskCount').textContent = "Completed: ".concat(completedTasks, " | Incomplete: ").concat(incompleteTasks);
}
function markAsCompleted(element) {
    incompleteTasks -= 1;
    completedTasks = taskCount - incompleteTasks;
    document.getElementById('taskCount').textContent = "Completed: ".concat(completedTasks, " | Incomplete: ").concat(incompleteTasks);
    var parentDiv = element.parentElement.parentElement;
    parentDiv.style.backgroundColor = 'green';
    parentDiv.style.color = 'white';
    element.parentElement.remove();
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addT();
    }
}
function removeTask(element) {
    completedTasks -= 1;
    taskCount -= 1;
    document.getElementById('taskCount').textContent = "Completed: ".concat(completedTasks, " | Incomplete: ").concat(incompleteTasks);
    element.parentElement.remove();
}
