let viewportHeight = window.innerHeight;
let reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    reveal.forEach((item) => {
        if (item.getBoundingClientRect().top < viewportHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
         if (item.getBoundingClientRect().top <= 0) {
            item.classList.remove('reveal_active');
        }
    });
});