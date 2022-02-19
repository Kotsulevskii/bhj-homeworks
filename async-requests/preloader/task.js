let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE) {
        answerServer = JSON.parse(xhr.responseText).response.Valute;
        console.log(answerServer.AUD['CharCode']);
        document.getElementById('loader').classList.remove('loader_active');
        for (let key in answerServer) {
            let el = document.createElement('div');
            el.classList.add('item');
            el.innerHTML += `
            <div class="item__code">
                 ${answerServer[key].CharCode}
            </div>
            <div class="item__value">
                 ${answerServer[key].Value}
            </div>
            <div class="item__currency">
             руб.
            </div>`
            document.getElementById('items').append(el);
        };
    }
});
xhr.send();