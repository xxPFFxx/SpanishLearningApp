const express = require('express');
const path = require('path');
const app = express();

// Serve static files from current directory
app.use(express.static('./'));

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

// Список слов с переводами (часть списка для примера)
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
    // Добавьте остальные слова из списка по необходимости
];

// Переменные состояния
let currentPairs = [];
let rightColumn = [];
let selectedSpanish = null;
let poolIndex = 4;

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
        // Правильный выбор
        wordDiv.classList.add("correct");
        transDiv.classList.add("correct");
        setTimeout(() => replacePair(selectedSpanish, index), 1000);
    } else {
        // Неправильный выбор
        wordDiv.classList.add("incorrect");
        transDiv.classList.add("incorrect");
        setTimeout(() => {
            wordDiv.classList.remove("incorrect");
            transDiv.classList.remove("incorrect");
        }, 1000);
    }
}

// Замена пары после правильного выбора
function replacePair(spanishIndex, russianIndex) {
    const newPair = words[poolIndex];
    poolIndex = (poolIndex + 1) % words.length;

    const wordDiv = document.querySelector(`.word[data-index="${spanishIndex}"]`);
    const transDiv = document.querySelector(`.translation[data-index="${russianIndex}"]`);

    currentPairs[spanishIndex] = newPair;
    rightColumn[russianIndex] = newPair.russian;
    wordDiv.textContent = newPair.spanish;
    wordDiv.classList.remove("correct", "selected");
    transDiv.textContent = newPair.russian;
    transDiv.classList.remove("correct");

    selectedSpanish = null;
}

// Инициализация приложения
function init() {
    shuffle(words);
    currentPairs = words.slice(0, 4);
    rightColumn = currentPairs.map(pair => pair.russian);
    shuffle(rightColumn);
    renderLeftColumn();
    renderRightColumn();
}

// Запуск приложения
init();