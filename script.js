let incomp = 0;
let count = 0;
let comp = 0;

function add() {
    if (count > 6) {
        alert('Complete your current tasks');
        return 0;
    }
    let input = document.getElementById("input").value;
    if (!input) {
        alert('Try to do something lol');
        return 0;
    }
    let x = document.getElementById("taskList");
    let div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'w-11/12', 'm-1', 'p-1.5', 'border', 'border-gray-300', 'rounded', 'bg-gray-100', 'text-black', 'opacity-80', 'overflow-auto');
    div.innerHTML = `${input}<div><button class='complete' onclick='something(this)' class='bg-green-500 text-white p-1 rounded'>Completed</button></div><button class='delete' onclick='remove(this)' class='bg-red-500 text-white p-1 rounded'>Remove</button>`;
    count += 1;
    x.appendChild(div);
    document.getElementById("input").value = '';
    incomp += 1;
    document.getElementById('taskCount').textContent = `Completed: ${comp} | Incomplete: ${incomp}`;
}

function something(element) {
    incomp -= 1;
    comp = count - incomp;
    document.getElementById('taskCount').textContent = `Completed: ${comp} | Incomplete: ${incomp}`;
    
    element.parentElement.parentElement.style.backgroundColor = 'green';
    element.parentElement.parentElement.style.color = 'white';
    element.parentElement.remove();
}

function checkKey(event) {
    if (event.key === 'Enter') {
        add();
    }
}

function remove(element) {
    count = count - 1;
    comp -= 1;
    document.getElementById('taskCount').textContent = `Completed: ${comp} | Incomplete: ${incomp}`;
    element.parentElement.remove();
}