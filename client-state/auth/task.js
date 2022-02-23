let signin = document.getElementById('signin');
let form = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

let xhr = new XMLHttpRequest(); 

form.onsubmit = function (e) {
    e.preventDefault();
    let formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = "json";
    xhr.send(formData);
}

xhr.onload = function () {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status} : ${xhr.statusText}`);
    } else if (!xhr.response.success) {
        alert('Неверный логин/пароль');
    } else {
        let idA = xhr.response.user_id;
        userId.textContent = idA;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        localStorage.usaid = `${idA}`;
    };
};
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.usaid) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent = localStorage.usaid;
    };
});

