document.querySelector('.dropdown').addEventListener('click', () => {
     document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');  
});
document.querySelectorAll('.dropdown__link').forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.preventDefault();
        document.querySelector('.dropdown__value').textContent = item.textContent;
    })
});

