let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
        let answerServer = JSON.parse(xhr.responseText);
        document.getElementById('poll__title').innerHTML += `
            <p class="poll__title">
                ${answerServer.data.title}
            </p>`;
        for (element of answerServer.data.answers) {
            document.getElementById('poll__answers').innerHTML += `
                <button class="poll__answer">
                    ${element}
                </button> `;
        };
        for (button of document.querySelectorAll('button.poll__answer')) {
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
        });
        };
    };
};
xhr.send();