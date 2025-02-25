// Список слов с переводами
const words = [
    { spanish: "Luis", russian: "Луис" },
    { spanish: "Diego", russian: "Диего" },
    { spanish: "Ana", russian: "Ана" },
    { spanish: "María", russian: "Мария" },
    { spanish: "yo", russian: "я" },
    { spanish: "tú", russian: "ты" },
    { spanish: "él", russian: "он" },
    { spanish: "ella", russian: "она" },
    { spanish: "hola", russian: "привет" },
    { spanish: "gracias", russian: "спасибо" },
    { spanish: "sí", russian: "да" },
    { spanish: "no", russian: "нет" },
    { spanish: "quiere", russian: "хочет" },
    { spanish: "es", russian: "есть" },
    { spanish: "tengo", russian: "имею" },
    { spanish: "hablar", russian: "говорить" },
    { spanish: "vivir", russian: "жить" },
    { spanish: "bailar", russian: "танцевать" },
    { spanish: "cantar", russian: "петь" },
    { spanish: "escuchar", russian: "слушать" },
];

// Переменные состояния
let currentPairs = [];
let rightColumn = [];
let selectedSpanish = null;
let poolIndex = 4;
let consecutiveCorrect = 0; // Переменная для счетчика подряд угаданных слов

// Функция для перемешивания массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Отрисовка левой колонки (испанские слова)
function renderLeftColumn() {
    const leftColumn = document.getElementById("left-column");
    leftColumn.innerHTML = "";
    currentPairs.forEach((pair, index) => {
        const wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.dataset.index = index;
        wordDiv.textContent = pair.spanish;
        wordDiv.addEventListener("click", () => selectSpanish(index));
        leftColumn.appendChild(wordDiv);
    });
}

// Отрисовка правой колонки (русские переводы)
function renderRightColumn() {
    const rightColumnDiv = document.getElementById("right-column");
    rightColumnDiv.innerHTML = "";
    rightColumn.forEach((russian, index) => {
        const transDiv = document.createElement("div");
        transDiv.className = "translation";
        transDiv.dataset.index = index;
        transDiv.textContent = russian;
        transDiv.addEventListener("click", () => selectRussian(index));
        rightColumnDiv.appendChild(transDiv);
    });
}

// Выбор испанского слова
function selectSpanish(index) {
    if (selectedSpanish !== null) {
        const prev = document.querySelector(`.word[data-index="${selectedSpanish}"]`);
        prev.classList.remove("selected");
    }
    selectedSpanish = index;
    const current = document.querySelector(`.word[data-index="${index}"]`);
    current.classList.add("selected");
}

// Выбор русского перевода
function selectRussian(index) {
    if (selectedSpanish === null) return;

    const selectedWord = currentPairs[selectedSpanish];
    const selectedRussian = rightColumn[index];
    const wordDiv = document.querySelector(`.word[data-index="${selectedSpanish}"]`);
    const transDiv = document.querySelector(`.translation[data-index="${index}"]`);

    if (selectedRussian === selectedWord.russian) {
        wordDiv.classList.add("correct");
        transDiv.classList.add("correct");
        consecutiveCorrect++; // Увеличиваем счетчик при правильном ответе
        updateCounter(); // Обновляем отображение
        setTimeout(() => replacePair(selectedSpanish), 1000);
        window.Telegram.WebApp.showAlert("Правильно!");
    } else {
        wordDiv.classList.add("incorrect");
        transDiv.classList.add("incorrect");
        consecutiveCorrect = 0; // Сбрасываем счетчик при ошибке
        updateCounter(); // Обновляем отображение
        setTimeout(() => {
            wordDiv.classList.remove("incorrect");
            transDiv.classList.remove("incorrect");
        }, 1000);
        window.Telegram.WebApp.showAlert("Неправильно, попробуй снова!");
    }
}

// Замена пары после правильного выбора с перемешиванием обоих столбцов
function replacePair(spanishIndex) {
    const newPair = words[poolIndex];
    poolIndex = (poolIndex + 1) % words.length;

    currentPairs[spanishIndex] = newPair;
    shuffle(currentPairs);

    rightColumn = currentPairs.map(pair => pair.russian);
    shuffle(rightColumn);

    renderLeftColumn();
    renderRightColumn();

    selectedSpanish = null;
}

// Функция для обновления счетчика
function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = `Угадано подряд: ${consecutiveCorrect}`;
}

// Инициализация приложения
function init() {
    shuffle(words);
    currentPairs = words.slice(0, 4);
    rightColumn = currentPairs.map(pair => pair.russian);
    shuffle(rightColumn);
    renderLeftColumn();
    renderRightColumn();
    updateCounter(); // Инициализируем счетчик при запуске

    window.Telegram.WebApp.ready(); // Сообщаем Telegram, что приложение готово
    window.Telegram.WebApp.expand(); // Разворачиваем приложение на полный экран
}

// Запуск приложения
init();