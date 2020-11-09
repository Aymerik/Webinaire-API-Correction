const api = 'http://localhost:3000/tasks';

// Get list of tasks
fetch(api).then(response => response.json()).then(tasks => {
	tasks.forEach(addTask); // = tasks.forEach(task => addTask(task))
}).catch(e => {
	alert("Erreur lors de l'appel à l'API : " + e.message);
});

function addTask(task) {
	let item = document.createElement('li');
	item.classList = 'list-group-item';

	let input = document.createElement('input');
	input.type = 'checkbox';
	input.checked = task.done;
	input.id = 'task-' + task.id;

	// update status of a task
	input.addEventListener('change', e => {
		fetch(api + '/' + task.id, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ done: input.checked })
		}).catch(e => {
			input.checked = !input.checked;
			alert("Erreur lors de l'appel à l'API : " + e.message);
		});
	});

	let label = document.createElement('label');
	label.textContent = " " + task.name + " ";
	label.setAttribute('for', 'task-' + task.id);

	let em = document.createElement('em');
	em.classList = 'text-muted small';
	em.textContent = "(deadline : " + (new Date(task.deadline).toLocaleDateString()) + ")";

	let a = document.createElement('a');
	a.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
	</svg>`;
	a.classList = 'float-right text-decoration-none';
	a.href = '#';

	// delete a task
	a.addEventListener('click', e => {
		e.preventDefault();
		fetch(api + '/' + task.id, {
			method: 'DELETE',
		}).then(response => response.json()).then(task => {
			item.remove();
		}).catch(e => {
			alert("Erreur lors de l'appel à l'API : " + e.message);
		});

	});

	item.appendChild(input);
	item.appendChild(label);
	item.appendChild(em);
	item.appendChild(a);
	document.getElementById('list').appendChild(item);
}


// Create a new task
const form = document.getElementById('form');
const taskInput = document.getElementById('name');
const deadlineInput = document.getElementById('deadline');

form.addEventListener('submit', e => {
	e.preventDefault();
	let task = {
		name: taskInput.value,
		deadline: deadlineInput.value,
		done: false
	};

	fetch(api, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(task)
	}).then(task => task.json()).then(task => {
		addTask(task);
		taskInput.value = '';
		deadlineInput.value = '';
	}).catch(e => {
		alert("Erreur lors de l'appel à l'API : " + e.message);
	});
});