// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from "lodash.throttle";

const elForm = document.querySelector(".feedback-form");
elForm.addEventListener('input', throttle(handlerFeedbackForm), 500);


const inputValue = "feedback-form-state";

function handlerFeedbackForm(evt) {
    evt.preventDefault();
    // console.log(evt.currentTarget.elements);
    const { email, message } = evt.currentTarget.elements
    // console.log("Email", 
    // console.log("Message", message.value);
};

