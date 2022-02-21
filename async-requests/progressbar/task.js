let progress = document.getElementById('progress');
let form = document.getElementById('form');
let xhr = new XMLHttpRequest();

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let dataForm = new FormData();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  
    xhr.upload.addEventListener('progress', (evt) => {
        progress.value = evt.loaded / evt.total * 100;
    });
   
    xhr.upload.addEventListener('loadend', () => {
        progress.value = 1;
    });
      xhr.send(dataForm);
});
