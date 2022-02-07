// открытие окна чата
document.querySelector('.chat-widget').addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
});
// массив с ответами бота
let randomMessage = [
    'Если вы пришли просто поглазеть, то вы нам мало инересны!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 
    'Не пишите сюда больше!', 
    'Напишите в какой-нибудь другой чат!',
];
// случайный ответ бота
let showRandom = function() {
    return randomMessage[Math.floor(Math.random() * (randomMessage.length))];
};
//отправка сообщения
let messages = document.querySelector( '.chat-widget__messages' );
let addMessage = function(message, type) {
    let date = new Date().toLocaleTimeString().substring(0,5);
    messages.innerHTML += `
    <div class="message ${type}">
    <div class="message__time">${date}</div>
    <div class="message__text">${message}</div>
    </div>
    `;
};
//отправка непустого сообщения при нажатии Enter
let messageUser = document.getElementById('chat-widget__input');
messageUser.addEventListener('keypress', function (evt) {
    if ((evt.key === 'Enter') && (messageUser.value)) {
        addMessage(messageUser.value, 'message_client');
        messageUser.value = null;
        addMessage(showRandom(), '');
    }
});
    