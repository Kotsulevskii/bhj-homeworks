let xhr = new XMLHttpRequest();
let dataForm = new FormData();
xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.addEventListener('readystatechange', function (event) {
    const progress = document.getElementById('progress');
    if (xhr.readyState === xhr.UNSENT) {
        progress.value = 0;
    } else if (xhr.readyState === xhr.OPENED) {
        progress.value = 0.3;
    } else if (xhr.readyState === xhr.LOADING) {
        progress.value = 0.6;
    } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        progress.value = 0.9;
    } else {
        progress.value = 1
    }  
    console.log(xhr.readyState);
});
xhr.send(dataForm);