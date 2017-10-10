let allButtons = document.querySelectorAll('[data-task]');

allButtons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        changeContent(event);
    });
});

function changeContent(event) {

    let activeButton = event.target;
    let dataFromTask = activeButton.dataset.task;
    let buttons      = document.getElementsByClassName('button');
    let content      = document.querySelectorAll('.task-content');
    let setContent   = document.querySelectorAll('.task-' + dataFromTask);

    allButtons.forEach(function (btn) {
        btn.classList.remove('visible');
    });

    content.forEach(function (taskContent) {
        taskContent.classList.remove('visible');
    });

    activeButton.classList.add('visible');

    setContent.forEach(function (setContent) {
        setContent.classList.add('visible');
        });
}
