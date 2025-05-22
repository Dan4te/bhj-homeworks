const chatWidget = document.querySelector('.chat-widget');
const input = chatWidget.querySelector('.chat-widget__input');
const messages = chatWidget.querySelector('.chat-widget__messages');

const robotMessages = [
  'Добрый день! Чем могу помочь?',
  'Спасибо за ваше сообщение!',
  'Мы свяжемся с вами в ближайшее время.',
  'Пожалуйста, подождите, идет обработка вашего запроса.',
  'Рады вас видеть!'
];

// Открытие окна чата по клику на виджет
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

// Отправка сообщения по нажатию Enter
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value.trim() !== '') {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Добавляем сообщение пользователя
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${input.value.trim()}</div>
      </div>
    `;

    input.value = '';

    // Автоматический ответ робота через 1 секунду
    setTimeout(() => {
      const robotTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const randomIndex = Math.floor(Math.random() * robotMessages.length);

      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${robotTime}</div>
          <div class="message__text">${robotMessages[randomIndex]}</div>
        </div>
      `;

      // Прокрутка чата вниз, чтобы показывать последнее сообщение
      messages.scrollTop = messages.scrollHeight;
    }, 1000);

    // Прокрутка чата вниз сразу после добавления сообщения пользователя
    messages.scrollTop = messages.scrollHeight;
}
});
