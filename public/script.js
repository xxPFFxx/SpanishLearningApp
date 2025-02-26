// Список слов с переводами
const words = [
    { spanish: "Luis", russian: "Луис" },
    { spanish: "Diego", russian: "Диего" },
    { spanish: "Ana", russian: "Ана" },
    { spanish: "María", russian: "Мария" },
    { spanish: "Pablo", russian: "Пабло" },
    { spanish: "Lucía", russian: "Лусия" },
    { spanish: "yo", russian: "я" },
    { spanish: "tú", russian: "ты" },
    { spanish: "él", russian: "он" },
    { spanish: "ella", russian: "она" },
    { spanish: "nosotros", russian: "мы" },
    { spanish: "ustedes", russian: "вы (мн.ч.)" },
    { spanish: "mi", russian: "мой" },
    { spanish: "tu", russian: "твой" },
    { spanish: "su", russian: "его/её/их" },
    { spanish: "quiere", russian: "хочет" },
    { spanish: "soy", russian: "я есть" },
    { spanish: "es", russian: "есть/является" },
    { spanish: "tengo", russian: "у меня есть" },
    { spanish: "esta", russian: "этот/эта" },
    { spanish: "no encuentro", russian: "не нахожу" },
    { spanish: "hay", russian: "есть/имеется" },
    { spanish: "oye", russian: "слушай" },
    { spanish: "mirar", russian: "смотреть" },
    { spanish: "estudio", russian: "учусь" },
    { spanish: "hablar", russian: "говорить" },
    { spanish: "hace", russian: "делает" },
    { spanish: "uso", russian: "использую" },
    { spanish: "no hace", russian: "не делает" },
    { spanish: "vivir", russian: "жить" },
    { spanish: "tiene", russian: "имеет" },
    { spanish: "bailar", russian: "танцевать" },
    { spanish: "cantar", russian: "петь" },
    { spanish: "escuchar", russian: "слушать" },
    { spanish: "viajar", russian: "путешествовать" },
    { spanish: "pintar", russian: "рисовать" },
    { spanish: "somos", russian: "мы есть" },
    { spanish: "cocinar", russian: "готовить" },
    { spanish: "té", russian: "чай" },
    { spanish: "café", russian: "кофе" },
    { spanish: "taco", russian: "тако" },
    { spanish: "sándwich", russian: "сэндвич" },
    { spanish: "agua", russian: "вода" },
    { spanish: "vaso de", russian: "стакан" },
    { spanish: "leche", russian: "молоко" },
    { spanish: "azúcar", russian: "сахар" },
    { spanish: "hielo", russian: "лёд" },
    { spanish: "helado", russian: "мороженое" },
    { spanish: "pan", russian: "хлеб" },
    { spanish: "jugo", russian: "сок" },
    { spanish: "pasta", russian: "паста" },
    { spanish: "amigo", russian: "друг" },
    { spanish: "amiga", russian: "подруга" },
    { spanish: "mamá", russian: "мама" },
    { spanish: "papá", russian: "папа" },
    { spanish: "compañero de cuarto", russian: "сосед по комнате" },
    { spanish: "hijo", russian: "сын" },
    { spanish: "hija", russian: "дочь" },
    { spanish: "hermano", russian: "брат" },
    { spanish: "hermana", russian: "сестра" },
    { spanish: "tío", russian: "дядя" },
    { spanish: "tía", russian: "тётя" },
    { spanish: "compañero de trabajo", russian: "коллега" },
    { spanish: "abuelo", russian: "дедушка" },
    { spanish: "abuela", russian: "бабушка" },
    { spanish: "esposo", russian: "муж" },
    { spanish: "esposa", russian: "жена" },
    { spanish: "novio", russian: "парень" },
    { spanish: "novia", russian: "девушка" },
    { spanish: "pasaporte", russian: "паспорт" },
    { spanish: "maleta", russian: "чемодан" },
    { spanish: "suéter", russian: "свитер" },
    { spanish: "vestido", russian: "платье" },
    { spanish: "chaqueta", russian: "куртка" },
    { spanish: "cargador", russian: "зарядка" },
    { spanish: "reloj", russian: "часы" },
    { spanish: "gorra", russian: "кепка" },
    { spanish: "tableta", russian: "планшет" },
    { spanish: "libro", russian: "книга" },
    { spanish: "mochila", russian: "рюкзак" },
    { spanish: "tienda", russian: "магазин" },
    { spanish: "panadería", russian: "пекарня" },
    { spanish: "cafetería", russian: "кафе" },
    { spanish: "banco", russian: "банк" },
    { spanish: "museo", russian: "музей" },
    { spanish: "teatro", russian: "театр" },
    { spanish: "barrio", russian: "район" },
    { spanish: "centro comercial", russian: "торговый центр" },
    { spanish: "estación de metro", russian: "станция метро" },
    { spanish: "ciudad", russian: "город" },
    { spanish: "parque", russian: "парк" },
    { spanish: "pueblo", russian: "деревня" },
    { spanish: "liblería", russian: "книжный магазин" }, // Предположительно опечатка, имелось в виду "librería"
    { spanish: "hotel", russian: "отель" },
    { spanish: "estacionamento", russian: "парковка" }, // Предположительно опечатка, правильнее "estacionamiento"
    { spanish: "escuela", russian: "школа" },
    { spanish: "casa", russian: "дом" },
    { spanish: "arte", russian: "искусство" },
    { spanish: "música", russian: "музыка" },
    { spanish: "otoño", russian: "осень" },
    { spanish: "abrigo", russian: "пальто" },
    { spanish: "enero", russian: "январь" },
    { spanish: "traje de baño", russian: "купальник" },
    { spanish: "verano", russian: "лето" },
    { spanish: "julio", russian: "июль" },
    { spanish: "país", russian: "страна" },
    { spanish: "septiembre", russian: "сентябрь" },
    { spanish: "primavera", russian: "весна" },
    { spanish: "marzo", russian: "март" },
    { spanish: "sol", russian: "солнце" },
    { spanish: "diciembre", russian: "декабрь" },
    { spanish: "octubre", russian: "октябрь" },
    { spanish: "invierno", russian: "зима" },
    { spanish: "durazno", russian: "персик" },
    { spanish: "piña", russian: "ананас" },
    { spanish: "sandía", russian: "арбуз" },
    { spanish: "mercado", russian: "рынок" },
    { spanish: "bolsa", russian: "сумка" },
    { spanish: "botella de", russian: "бутылка" },
    { spanish: "kilo de", russian: "килограмм" },
    { spanish: "mango", russian: "манго" },
    { spanish: "naranja", russian: "апельсин" },
    { spanish: "edificio", russian: "здание" },
    { spanish: "apartamento", russian: "квартира" },
    { spanish: "piso", russian: "этаж" },
    { spanish: "familia", russian: "семья" },
    { spanish: "perro", russian: "собака" },
    { spanish: "gato", russian: "кошка" },
    { spanish: "pareja", russian: "пара" },
    { spanish: "jardín", russian: "сад" },
    { spanish: "garajie", russian: "гараж" }, // Предположительно опечатка, правильнее "garaje"
    { spanish: "terraza", russian: "терраса" },
    { spanish: "supermercado", russian: "супермаркет" },
    { spanish: "restaurante", russian: "ресторан" },
    { spanish: "calle", russian: "улица" },
    { spanish: "salsa", russian: "соус/сальса" },
    { spanish: "discoteca", russian: "дискотека" },
    { spanish: "película", russian: "фильм" },
    { spanish: "supa", russian: "суп" }, // Предположительно опечатка, правильнее "sopa"
    { spanish: "arroz", russian: "рис" },
    { spanish: "con pollo", russian: "с курицей" },
    { spanish: "Alemania", russian: "Германия" },
    { spanish: "Mexico", russian: "Мексика" },
    { spanish: "Francia", russian: "Франция" },
    { spanish: "perfecto", russian: "идеальный" },
    { spanish: "mejor", russian: "лучший" },
    { spanish: "tímido", russian: "застенчивый" },
    { spanish: "simpático", russian: "симпатичный" },
    { spanish: "graciosa", russian: "смешная" },
    { spanish: "serio", russian: "серьёзный" },
    { spanish: "nuevo", russian: "новый" },
    { spanish: "portugués", russian: "португальский" },
    { spanish: "español", russian: "испанский" },
    { spanish: "inglés", russian: "английский" },
    { spanish: "francés", russian: "французский" },
    { spanish: "italiano", russian: "итальянский" },
    { spanish: "alemán", russian: "немецкий" },
    { spanish: "pequeño", russian: "маленький" },
    { spanish: "bonito", russian: "красивый" },
    { spanish: "grande", russian: "большой" },
    { spanish: "por favor", russian: "пожалуйста" },
    { spanish: "hola", russian: "привет" },
    { spanish: "chao", russian: "пока" },
    { spanish: "Buenos días", russian: "Доброе утро" },
    { spanish: "hasta luego", russian: "до встречи" },
    { spanish: "Buenas tardes", russian: "Добрый день" },
    { spanish: "también", russian: "тоже" },
    { spanish: "con", russian: "с" },
    { spanish: "o", russian: "или" },
    { spanish: "y", russian: "и" },
    { spanish: "sí", russian: "да" },
    { spanish: "no", russian: "нет" },
    { spanish: "pero", russian: "но" },
    { spanish: "pues", russian: "ну/тогда" },
    { spanish: "en", russian: "в" },
    { spanish: "gracias", russian: "спасибо" },
    { spanish: "bienvenido", russian: "добро пожаловать" },
    { spanish: "mucho gusto", russian: "приятно познакомиться" },
    { spanish: "bien", russian: "хорошо" },
    { spanish: "verdad", russian: "правда" },
    { spanish: "solamente", russian: "только" },
    { spanish: "en realidad", russian: "на самом деле" },
    { spanish: "tranquilo", russian: "спокойный" },
    { spanish: "genial", russian: "классный" },
    { spanish: "muy bien", russian: "очень хорошо" },
    { spanish: "un poco de", russian: "немного" },
    { spanish: "por la mañana", russian: "утром" },
    { spanish: "por la noche", russian: "ночью" },
    { spanish: "qué tal", russian: "как дела" },
    { spanish: "de dónde eres", russian: "откуда ты" },
    { spanish: "encantado", russian: "рад познакомиться" },
    { spanish: "soy de", russian: "я из" },
    { spanish: "eres de", russian: "ты из" },
    { spanish: "es de", russian: "он/она из" },
    { spanish: "cómo yo", russian: "как я" },
    { spanish: "no crees", russian: "не думаешь" },
    { spanish: "en general", russian: "в общем" },
    { spanish: "creo que", russian: "я думаю, что" },
    { spanish: "y tú", russian: "а ты" },
    { spanish: "frío", russian: "холод" },
    { spanish: "viento", russian: "ветер" },
    { spanish: "ahora", russian: "сейчас" },
    { spanish: "calor", russian: "жара" },
    { spanish: "buen tiempo", russian: "хорошая погода" },
    { spanish: "cuánto cuesta", russian: "сколько стоит" },
    { spanish: "muy", russian: "очень" },
    { spanish: "muchos", russian: "много" },
    { spanish: "me gusta", russian: "мне нравится" },
    { spanish: "tiempo libre", russian: "свободное время" },
    { spanish: "es divertido", russian: "это весело" },
    { spanish: "qué haces", russian: "что делаешь" },
    { spanish: "cómo es", russian: "какой он" },
    { spanish: "necesito", russian: "мне нужно" },
    { spanish: "bueno", russian: "хороший" },
    { spanish: "en tren", russian: "на поезде" },
    { spanish: "en coche", russian: "на машине" },
    { spanish: "aquí", russian: "здесь" },
    { spanish: "donde", russian: "где" },
    { spanish: "por aquí", russian: "здесь рядом" },
    { spanish: "cerca", russian: "близко" },
    { spanish: "no hay", russian: "нет" },
    { spanish: "allí", russian: "там" },
    { spanish: "hoy", russian: "сегодня" },
    { spanish: "mucho", russian: "много" },
    { spanish: "más", russian: "больше" },
    { spanish: "este", russian: "этот" },
    { spanish: "solo", russian: "один/только" },
    { spanish: "lejos", russian: "далеко" },
    { spanish: "está", russian: "находится" },
    { spanish: "guau", russian: "вау" },
    { spanish: "dos", russian: "два" },
    { spanish: "tres", russian: "три" },
    { spanish: "un", russian: "один" },
    { spanish: "uno", russian: "один" },
    { spanish: "una", russian: "одна" }
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