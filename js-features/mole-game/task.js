let Dead = document.getElementById("dead");
let Lost = document.getElementById("lost");
 
for (let i = 1; i <= 9; i++) {
    function getHole (i) {
        let holeIndex = document.getElementById(`hole${[i]}`);
        return holeIndex;
    };
    let hole = getHole (i);
    hole.onclick = function () {
        if (hole.className.includes("hole_has-mole")) {
            Dead.innerHTML++;
        } else {
            Lost.innerHTML++;
        };
        if (Number(Dead.textContent) === 10) {
            alert("Вы победили!");
            Dead.innerHTML = 0;
            Lost.innerHTML = 0;
        } else if (Number(Lost.textContent) === 5) {
            alert("Вы проиграли");
            Dead.innerHTML = 0;
            Lost.innerHTML = 0;
        };
    };
};
