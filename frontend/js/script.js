const tbody = document.querySelector('tbody');

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks')
    const tasks = await response.json();
    return tasks
}

const createElement = (tag, innerText = "", innerHTML = '') => {
    const element = document.createElement(tag);
    if (innerText) {
        element.innerText = innerText

    }

    if (innnerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}

const createSelect = (value) => {
    const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="Concluido">Concluido</option>
    
    `

    const select = createSelect('select', '', options);
    select.value = value;
    return select;
}

const createRow = () => {

    const { id, title, created_at, status } = tasks;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', created_at);
    const tdStatus = createElement('td');
    const tdAction = createElement('td');

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdStatus.appendChild(select);

    tdAction.appendChild(editButton);
    tdAction.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);

    return tr;


}

const loadTasks = async () => {
    const tasks = await fetchTasks();

    tasks.array.forEach((task) => {

        const tr = createRow();
        tbody.appendChild(tr);
    });
}

loadTasks();

//parou o video em 1:04