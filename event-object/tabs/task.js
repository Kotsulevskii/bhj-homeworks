let navigation = Array.from(document.querySelectorAll('.tab'));
let content = Array.from(document.querySelectorAll('.tab__content'));

let navigateActive = navigation.findIndex((array) =>
    array.className === 'tab tab_active');

for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('click', function () {
        for (let n = 0; n < navigation.length; n++) {
            navigation[n].classList.remove('tab_active');
            content[n].classList.remove('tab__content_active');
        }
        navigation[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    })
}

