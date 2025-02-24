const readline = require('readline');

// Список слов (испанское слово и его русский перевод)
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

// Функция для перемешивания массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Инициализация: перемешиваем слова, создаем пул и начальные пары
shuffle(words);
let pool = words.slice(); // Копия массива слов
let currentPairs = pool.splice(0, 4); // Берем 4 пары
let rightColumn = currentPairs.map(pair => pair.russian); // Русские переводы
shuffle(rightColumn); // Перемешиваем переводы

// Настройка readline для ввода/вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для отображения текущего состояния
function display() {
    console.log("Испанские слова:");
    currentPairs.forEach((pair, index) => {
        console.log(`${index + 1}. ${pair.spanish}`);
    });
    console.log("\nРусские переводы:");
    rightColumn.forEach((russian, index) => {
        console.log(`${String.fromCharCode(97 + index)}. ${russian}`);
    });
    console.log("\nВведите номер слова и букву перевода (например, '1 a'), или 'exit' для выхода:");
}

// Функция для запроса ввода и обработки ответа
function ask() {
    display();
    rl.question('> ', (answer) => {
        if (answer.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        const [numStr, letter] = answer.split(' ');
        if (!numStr || !letter) {
            console.log("Некорректный ввод. Попробуйте снова.");
            ask();
            return;
        }

        const num = parseInt(numStr) - 1; // Номер слова (0-3)
        const letterIndex = letter.toLowerCase().charCodeAt(0) - 97; // Индекс буквы (0-3)
        if (isNaN(num) || num < 0 || num >= 4 || letterIndex < 0 || letterIndex >= 4) {
            console.log("Некорректный ввод. Попробуйте снова.");
            ask();
            return;
        }

        const selectedSpanish = currentPairs[num];
        const selectedRussian = rightColumn[letterIndex];
        if (selectedRussian === selectedSpanish.russian) {
            console.log("Правильно!");
            if (pool.length === 0) {
                console.log("Все слова использованы.");
                rl.close();
                return;
            }
            const newPair = pool.shift(); // Берем новую пару из пула
            currentPairs[num] = newPair; // Заменяем выбранную пару
            rightColumn = currentPairs.map(pair => pair.russian); // Обновляем переводы
            shuffle(rightColumn); // Перемешиваем переводы
        } else {
            console.log("Неправильно. Попробуйте снова.");
        }
        ask();
    });
}

// Запуск программы
ask();