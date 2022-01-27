const menuLinks = document.querySelectorAll('.menu__link');

for (let link of Array.from(menuLinks)) {
    link.onclick = function () {

        const parent = link.parentElement;
        if (parent.querySelector('.menu_sub') === null) {
            return;
      //  } else if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
      //      parent.querySelector('.menu_sub').classList.add('menu_active');
        } else {
            parent.querySelector('.menu_sub').classList.toggle('menu_active');
        }
        if (link.closest('.menu_main')) {
            return false;
        }
    }
}