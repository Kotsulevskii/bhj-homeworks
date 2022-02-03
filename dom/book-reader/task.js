let fonts = Array.from(document.querySelectorAll('.font-size')); 

//let fonts = Array.from(document.querySelectorAll('div.book__control a'));
let content = document.querySelector('.book__content');

for (let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click', function (evt) {
       evt.preventDefault();

        let indexActiveElement = fonts.findIndex((item) => item.classList.contains('font-size_active'));
        fonts[indexActiveElement].classList.remove('font-size_active');
        content.className = 'book__content';
        fonts[i].classList.add('font-size_active');
        
        
        if (fonts[i].classList.contains('font-size_small') && fonts[i].classList.contains('font-size_active')) {
            content.classList.add('book_fs-small');
        } else if (fonts[i].classList.contains('font-size_big') && fonts[i].classList.contains('font-size_active')) {
            content.classList.add('book_fs-big');
        };
    });
};

