// Таймер обратного отсчёта #0
setInterval(() => {
    let startValueTimer = document.getElementById("timer");
    let startNumberTimer = Number(startValueTimer.textContent);
    startValueTimer.textContent = `${startNumberTimer - 1}`;
    if (startNumberTimer === 0) {
    alert("Вы победили в конкурсе!");
    }
}, 1000); 

// Таймер обратного отсчёта #1

setInterval(() => {
    let startValueTimer = document.getElementById("timer");
    let s = Number(startValueTimer.textContent) - 1;

    function checkTime(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
    };

    let h = 0;
    let m = 0;
  
    h = checkTime(h);
    m = checkTime(m);

    startValueTimer.innerHTML = "00:" + "00:" + `${s}`;
    if (s === 0) {
    alert("Вы победили в конкурсе!");
    }
}, 1000);



// Таймер обратного отсчёта #2
