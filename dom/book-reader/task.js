//let fonts = Array.from(document.querySelectorAll('.font-size')); 

let fonts = Array.from(document.querySelectorAll('div.book__control a'));

for (let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        let indexActiveElement = fonts.findIndex((item) => item.classList.contains('font-size_active'));
        fonts[indexActiveElement].classList.remove('font-size_active');
        document.getElementById('book').className === 'book';

        fonts[i].classList.add('font-size_active');
        if (fonts[i].classList.contains('font-size_small font-size_active')) {
            document.getElementById('book').classList.add('book_fs-small');
        } else if (fonts[i].classList.contains('font-size_big font-size_active')) {
            document.getElementById('book').classList.add('book_fs-big');
        };
    });
};