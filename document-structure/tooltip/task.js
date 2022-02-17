let tooltips = Array.from(document.querySelectorAll('a.has-tooltip'));

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', function () {
        event.preventDefault();
        let promt = document.querySelector('div.tooltip');
        promt.innerText = tooltips[i].title;
        console.log(promt);
        promt.setAttribute('data-position', 'bottom: 0');
       // promt.style = 'right: 0; bottom: 0';
        promt.style = '';
       promt.classList.toggle('tooltip_active');
})
};
//Как переназначить место появления от style к data-position?
