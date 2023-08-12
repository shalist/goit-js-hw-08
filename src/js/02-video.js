import vimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

// Отримуємо ключ для збереження у локальному сховищі
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

// Відстежуємо подію оновлення часу відтворення
player.on('timeupdate', throttle(function (data) {
    const currentTime = data.seconds; // Отримуємо поточний час відтворення
    saveCurrentTime(currentTime);
}, 1000));

// Функція для збереження поточного часу відтворення у локальному сховищі
function saveCurrentTime(currentTime) {
    localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
}

// Отримуємо поточний час відтворення і зберігаємо його у локальному сховищі
player.getCurrentTime().then(function (currentTime) {
    saveCurrentTime(currentTime);
});

// Отримуємо заголовок відео
player.getVideoTitle().then(function (title) {
    console.log('Video title:', title);
});

