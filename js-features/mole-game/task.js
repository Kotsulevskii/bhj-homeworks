let Dead = document.getElementById("dead");
let counterDead = Number(Dead.textContent);
let Lost = document.getElementById("lost");
let counterLost = Number(Lost.textContent);

function getHole(index) {
        if (index.className.includes('hole_has-mole')) {
            index.onclick = counterDead++;
            if (counterDead >= 10) {
                alert("Победа");
            }
            index.textContent = counterDead;
        } else {
            counterLost++;
            if (counterLost >= 5) {
                alert("Поражение");
            }
            index.textContent = counterLost;
        }
            
};
    
for (i = 1; i < 9; i++) { 
    let index = document.getElementById("hole" + `${[i]}`);
    getHole(index);
};