
let allButtons = document.querySelectorAll('[data-task]');
console.log(allButtons);


allButtons.forEach(function (btn) {
	btn.addEventListener('click', function () {
		functionName(event);
	});
});


function functionName(event) {

	let activeButton = event.target;
	let dataFromTask = activeButton.dataset.task;
	let buttons      = document.getElementsByClassName('button');
	let content      = document.querySelectorAll('.task-content');
	let setContent   = document.querySelectorAll('.task-' + dataFromTask);

	allButtons.forEach(function (btn) {
		btn.classList.remove('active');
	});

	content.forEach(function (taskContent) {
		taskContent.classList.remove('active');
	});

	activeButton.classList.add('active');

	setContent.forEach(function (setContent) {
		setContent.classList.add('active');
	});

}
