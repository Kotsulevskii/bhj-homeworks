let editor = document.getElementById('editor');

window.addEventListener('beforeunload', () => {
    localStorage.setItem('textClient', editor.value);
});

let text = localStorage.getItem('textClient');
    editor.value = text;

