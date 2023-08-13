import throttle from "lodash.throttle";

// Знаходимо форму та її поля
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');
// Отримуємо ключ для збереження у локальному сховищі
const LS_KEY = "feedback-form-state";

// Прослуховуємо форму через "input" а також через "submit"
form.addEventListener('input', throttle(handlerFeedbackForm), 500);
form.addEventListener('submit', hendlerSubmit);

loadValueLocalStorage();

// Отримуєм значення полів і записуєм в "LS"
function handlerFeedbackForm() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    localStorage.setItem(LS_KEY, JSON.stringify(formData));
};

// Завантажуємо дані зі сховища та заповнюємо поля форми
function loadValueLocalStorage() {
    const formData = JSON.parse(localStorage.getItem(LS_KEY));

    if (formData) {
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    };
};

// Очищуємо сховище та поля форми після сабміту
function hendlerSubmit(evt) {
    evt.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    console.log(formData);

    localStorage.removeItem(LS_KEY);
    emailInput.value = '';
    messageInput.value = '';
};



