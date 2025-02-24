const { JSDOM } = require('jsdom');

// Создаем виртуальный DOM
const dom = new JSDOM(`<!DOCTYPE html><div id="container"><div id="left-column"></div><div id="right-column"></div></div>`);
const document = dom.window.document;

// Ваш исходный код из script.js вставляется сюда
const words = [
    { spanish: "Luis", russian: "Луис" },
    { spanish: "Diego", russian: "Диего" },
    // ... остальные слова
];

// Переменные состояния
let currentPairs = [];
let rightColumn = [];
let selectedSpanish = null;
let poolIndex = 4;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderLeftColumn() {
    const leftColumn = document.getElementById("left-column");
    leftColumn.innerHTML = "";
    currentPairs.forEach((pair, index) => {
        const wordDiv = document.createElement("div");
        wordDiv.textContent = pair.spanish;
        leftColumn.appendChild(wordDiv);
    });
    console.log("Left column:", leftColumn.innerHTML);
}

function renderRightColumn() {
    const rightColumnDiv = document.getElementById("right-column");
    rightColumnDiv.innerHTML = "";
    rightColumn.forEach((russian, index) => {
        const transDiv = document.createElement("div");
        transDiv.textContent = russian;
        rightColumnDiv.appendChild(transDiv);
    });
    console.log("Right column:", rightColumnDiv.innerHTML);
}

function init() {
    shuffle(words);
    currentPairs = words.slice(0, 4);
    rightColumn = currentPairs.map(pair => pair.russian);
    shuffle(rightColumn);
    renderLeftColumn();
    renderRightColumn();
}

init();