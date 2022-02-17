let input = document.getElementById('task__input');
let button = document.getElementById('tasks__add');

// Не позволяем странице перезагружаться при клике на кнопку
button.addEventListener('click', (evt) => {
    evt.preventDefault();
});
//Добавение задачи по нажатию Enter
document.addEventListener('keypress', function () {
    if (event.keyCode === 13 && input.value.trim().length > 0) {
        let text = input.value;
        document.getElementById('tasks__list').innerHTML += `
            <div class="task">
                <div class="task__title">
                ${text}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
        input.value = null;
// Удаление задачи
        deleteTask = Array.from(document.querySelectorAll('a.task__remove'));
        for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].addEventListener('click', function () {
            deleteTask[i].parentElement.remove();
    });
        };
    };
}
);





