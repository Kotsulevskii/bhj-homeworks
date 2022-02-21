let modal = document.getElementById('subscribe-modal');
let close = document.querySelector('div.modal__close');

window.onload = function() {
    if(cookValue("key") === "noModal"){return;}
    modal.classList.add('modal_active');
}

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'key=noModal';
})

const cookValue = (name) => {
    const value = ";" + document.cookie;
    let parts = value.split(";" + name +"=");
    if(parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}