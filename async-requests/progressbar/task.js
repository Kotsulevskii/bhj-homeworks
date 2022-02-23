let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
   let xhr = new XMLHttpRequest();
   let dataForm = new FormData(form);
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', (evt) => {
        progress.value = evt.loaded / evt.total;
    });
    xhr.upload.addEventListener('loadend', () => {
        progress.value = 1;
    });
     
    xhr.upload.addEventListener('load', () => {
        alert('Файл загружен');
    });

    xhr.send(dataForm);
});


