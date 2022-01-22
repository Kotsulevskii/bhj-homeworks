let popupsWindow = document.getElementById("modal_main");
popupsWindow.classList.add("modal_active");

let elementsWindow = document.getElementsByClassName("modal__close");

for (let i = 0; i < elementsWindow.length; i++) {
    elementsWindow[i].onclick = function () {
        popupsWindow.classList.remove("modal_active");
         document.getElementById("modal_success").classList.remove("modal_active");
    };
};

let successWindow = document.getElementsByClassName("show-success");

for (let i = 0; i < successWindow.length; i++) {
    successWindow[i].onclick = function () {
        popupsWindow.classList.remove("modal_active");
        document.getElementById("modal_success").classList.add("modal_active");
    };
};