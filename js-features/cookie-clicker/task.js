let valueCounter = document.getElementById("clicker__counter");
let elementClick = document.getElementById("cookie");

function changeSize() {
    let counter = Number(valueCounter.textContent) ;
    counter = counter + 1;
    
        if (counter % 2 == 0) {
            elementClick.width = 200;
        } else {
            elementClick.width = 600;
    };
    
     valueCounter.textContent = counter;
}
 elementClick.onclick = changeSize;
