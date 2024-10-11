let incompleteTasks: number = 0;
let taskCount: number = 0;
let completedTasks: number = 0;

function addT(): void {
    if (taskCount > 6) {
        alert('Complete your current tasks');
        return;
    }
    const inputElement = document.getElementById("input") as HTMLInputElement;
    const input: string = inputElement.value;
    if (!input) {
        alert('Try to do something lol');
        return;
    }
    const x = document.getElementById("taskList") as HTMLElement;
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'w-11/12', 'm-1', 'p-1.5', 'border', 'border-gray-300', 'rounded', 'bg-gray-100', 'text-black', 'opacity-80', 'overflow-auto');
    div.innerHTML = `${input}<div><button class='complete bg-green-500 text-white p-1 rounded'>Completed</button></div><button class='delete bg-red-500 text-white p-1 rounded'>Remove</button>`;
    div.querySelector('.complete')!.addEventListener('click', () => markAsCompleted(div.querySelector('.complete')!));
    div.querySelector('.delete')!.addEventListener('click', () => removeTask(div.querySelector('.delete')!));
    taskCount += 1;
    x.appendChild(div);
    inputElement.value = '';
    incompleteTasks += 1;
    document.getElementById('taskCount')!.textContent = `Completed: ${completedTasks} | Incomplete: ${incompleteTasks}`;
}

function markAsCompleted(element: HTMLElement): void {
    incompleteTasks -= 1;
    completedTasks = taskCount - incompleteTasks;
    document.getElementById('taskCount')!.textContent = `Completed: ${completedTasks} | Incomplete: ${incompleteTasks}`;
    
    const parentDiv = element.parentElement!.parentElement as HTMLElement;
    parentDiv.style.backgroundColor = 'green';
    parentDiv.style.color = 'white';
    element.parentElement!.remove();
}

function handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
        addT();
    }
}

function removeTask(element: HTMLElement): void {
    completedTasks -= 1;
    taskCount -= 1;
    document.getElementById('taskCount')!.textContent = `Completed: ${completedTasks} | Incomplete: ${incompleteTasks}`;
    element.parentElement!.remove();
}