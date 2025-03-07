// Список слов с переводами
const fullWords = [
    { spanish: "yo", russian: "я" },
    { spanish: "tú", russian: "ты" },
    { spanish: "él", russian: "он" },
    { spanish: "ella", russian: "она" },
    { spanish: "nosotros", russian: "мы" },
    { spanish: "ustedes", russian: "вы (мн.ч.)" },
    { spanish: "mi", russian: "мой" },
    { spanish: "tu", russian: "твой" },
    { spanish: "su", russian: "его/её/их" },
    { spanish: "ellos", russian: "они (муж.)" },
    { spanish: "ellas", russian: "они (жен.)" },
    { spanish: "Alemania", russian: "Германия" },
    { spanish: "Mexico", russian: "Мексика" },
    { spanish: "Francia", russian: "Франция" },
    { spanish: "Espana", russian: "Испания" },
    { spanish: "Italia", russian: "Италия" },
    { spanish: "Rusia", russian: "Россия" },
    { spanish: "té", russian: "чай" },
    { spanish: "café", russian: "кофе" },
    { spanish: "taco", russian: "тако" },
    { spanish: "sándwich", russian: "сэндвич" },
    { spanish: "agua", russian: "вода" },
    { spanish: "vaso", russian: "стакан" },
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
    { spanish: "librería", russian: "книжный магазин" },
    { spanish: "hotel", russian: "отель" },
    { spanish: "estacionamento", russian: "парковка" },
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
    { spanish: "garajie", russian: "гараж" },
    { spanish: "terraza", russian: "терраса" },
    { spanish: "supermercado", russian: "супермаркет" },
    { spanish: "restaurante", russian: "ресторан" },
    { spanish: "calle", russian: "улица" },
    { spanish: "salsa", russian: "соус" },
    { spanish: "discoteca", russian: "дискотека" },
    { spanish: "película", russian: "фильм" },
    { spanish: "supa", russian: "суп" },
    { spanish: "arroz", russian: "рис" },
    { spanish: "pollo", russian: "курица" },
    { spanish: "gimnasio", russian: "спортзал" },
    { spanish: "piscina", russian: "бассейн" },
    { spanish: "equipo", russian: "команда" },
    { spanish: "entrenador", russian: "тренер" },
    { spanish: "tenis", russian: "теннис" },
    { spanish: "basquetbol", russian: "баскетбол" },
    { spanish: "fútbol", russian: "футбол" },
    { spanish: "béisbol", russian: "бейсбол" },
    { spanish: "persona", russian: "человек" },
    { spanish: "vecino", russian: "сосед" },
    { spanish: "yoga", russian: "йога" },
    { spanish: "tango", russian: "танго" },
    { spanish: "curso", russian: "курс" },
    { spanish: "historia", russian: "история" },
    { spanish: "literatura", russian: "литература" },
    { spanish: "geografía", russian: "география" },
    { spanish: "química", russian: "химия" },
    { spanish: "matematícas", russian: "математика" },
    { spanish: "colegio", russian: "школа" },
    { spanish: "maestro", russian: "учитель" },
    { spanish: "clase", russian: "класс" },
    { spanish: "lección", russian: "урок" },
    { spanish: "compañero", russian: "товарищ" },
    { spanish: "tarea", russian: "задание" },
    { spanish: "biblioteca", russian: "библиотека" },
    { spanish: "director", russian: "директор" },
    { spanish: "ejercicio", russian: "упражнение" },
    { spanish: "cuenta", russian: "счет" },
    { spanish: "queso", russian: "сыр" },
    { spanish: "carne", russian: "мясо" },
    { spanish: "huevo", russian: "яйцо" },
    { spanish: "sal", russian: "соль" },
    { spanish: "papa", russian: "картофель" },
    { spanish: "verdura", russian: "овощ" },
    { spanish: "galleta", russian: "печенье" },
    { spanish: "pastel", russian: "пирог" },
    { spanish: "batido", russian: "коктейль" },
    { spanish: "bebida", russian: "напиток" },
    { spanish: "hamburguesa", russian: "гамбургер" },
    { spanish: "frijol", russian: "фасоль" },
    { spanish: "gluten", russian: "глютен" },
    { spanish: "desayuno", russian: "завтрак" },
    { spanish: "bar", russian: "бар" },
    { spanish: "precio", russian: "цена" },
    { spanish: "pizza", russian: "пицца" },
    { spanish: "comida", russian: "еда" },
    { spanish: "tomate", russian: "помидор" },
    { spanish: "silla", russian: "стул" },
    { spanish: "mesero", russian: "официант" },
    { spanish: "lugar", russian: "место" },
    { spanish: "postre", russian: "десерт" },
    { spanish: "aeropuerto", russian: "аэропорт" },
    { spanish: "salida", russian: "выход" },
    { spanish: "taxi", russian: "такси" },
    { spanish: "parada de taxi", russian: "стоянка такси" },
    { spanish: "estación de tren", russian: "вокзал" },
    { spanish: "oficina de informacion", russian: "справочное бюро" },
    { spanish: "kilómetro", russian: "километр" },
    { spanish: "cine", russian: "кино" },
    { spanish: "plaza", russian: "площадь" },
    { spanish: "montaña", russian: "гора" },
    { spanish: "playa", russian: "пляж" },
    { spanish: "lago", russian: "озеро" },
    { spanish: "sombrero", russian: "шляпа" },
    { spanish: "cinturón", russian: "ремень" },
    { spanish: "bolso", russian: "сумка" },
    { spanish: "traje", russian: "костюм" },
    { spanish: "camisa", russian: "рубашка" },
    { spanish: "falda", russian: "юбка" },
    { spanish: "bufanda", russian: "шарф" },
    { spanish: "blusa", russian: "блузка" },
    { spanish: "collar", russian: "ожерелье" },
    { spanish: "hospital", russian: "больница" },
    { spanish: "oficina", russian: "офис" },
    { spanish: "peluquería", russian: "парикмахерская" },
    { spanish: "universidad", russian: "университет" },
    { spanish: "empresa", russian: "компания" },
    { spanish: "jefe", russian: "начальник" },
    { spanish: "abogado", russian: "адвокат" },
    { spanish: "hombre", russian: "мужчина" },
    { spanish: "mujer", russian: "женщина" },
    { spanish: "plátano", russian: "банан" },
    { spanish: "pepino", russian: "огурец" },
    { spanish: "pimiento", russian: "перец" },
    { spanish: "zanahoria", russian: "морковь" },
    { spanish: "manzana", russian: "яблоко" },
    { spanish: "fresa", russian: "клубника" },
    { spanish: "pera", russian: "груша" },
    { spanish: "aguacate", russian: "авокадо" },
    { spanish: "lima", russian: "лайм" },
    { spanish: "ensalada", russian: "салат" },
    { spanish: "almuerzo", russian: "обед" },
    { spanish: "señor", russian: "господин" },
    { spanish: "señora", russian: "госпожа" },
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
    { spanish: "vivir", russian: "жить" },
    { spanish: "tiene", russian: "имеет" },
    { spanish: "bailar", russian: "танцевать" },
    { spanish: "cantar", russian: "петь" },
    { spanish: "escuchar", russian: "слушать" },
    { spanish: "viajar", russian: "путешествовать" },
    { spanish: "pintar", russian: "рисовать" },
    { spanish: "somos", russian: "мы есть" },
    { spanish: "cocinar", russian: "готовить" },
    { spanish: "entrenar", russian: "тренировать" },
    { spanish: "practicar", russian: "практиковать" },
    { spanish: "nadar", russian: "плавать" },
    { spanish: "esquiar", russian: "кататься на лыжах" },
    { spanish: "caminar", russian: "гулять" },
    { spanish: "levantar", russian: "поднимать" },
    { spanish: "descansar", russian: "отдыхать" },
    { spanish: "dibujar", russian: "рисовать" },
    { spanish: "patinar", russian: "кататься на коньках" },
    { spanish: "pescar", russian: "ловить рыбу" },
    { spanish: "pasear", russian: "гулять" },
    { spanish: "enseñar", russian: "учить" },
    { spanish: "empieza", russian: "начинается" },
    { spanish: "llevar", russian: "носить" },
    { spanish: "buscar", russian: "искать" },
    { spanish: "necesitar", russian: "нуждаться" },
    { spanish: "espere", russian: "подождите" },
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
    { spanish: "atlético", russian: "атлетический" },
    { spanish: "perezoso", russian: "ленивый" },
    { spanish: "favorito", russian: "любимый" },
    { spanish: "aburrido", russian: "скучный" },
    { spanish: "interesante", russian: "интересный" },
    { spanish: "chino", russian: "китайский" },
    { spanish: "ruso", russian: "русский" },
    { spanish: "japonés", russian: "японский" },
    { spanish: "excelente", russian: "отличный" },
    { spanish: "grosero", russian: "грубый" },
    { spanish: "malo", russian: "плохой" },
    { spanish: "caro", russian: "дорогой" },
    { spanish: "cómodo", russian: "удобный" },
    { spanish: "barato", russian: "дешёвый" },
    { spanish: "blanco", russian: "белый" },
    { spanish: "rojo", russian: "красный" },
    { spanish: "negro", russian: "чёрный" },
    { spanish: "morado", russian: "фиолетовый" },
    { spanish: "amarillo", russian: "жёлтый" },
    { spanish: "largo", russian: "длинный" },
    { spanish: "moderno", russian: "современный" },
    { spanish: "viejo", russian: "старый" },
    { spanish: "trabajador", russian: "трудолюбивый" },
    { spanish: "por favor", russian: "пожалуйста" },
    { spanish: "hola", russian: "привет" },
    { spanish: "chao", russian: "пока" },
    { spanish: "Buenos días", russian: "Доброе утро" },
    { spanish: "hasta luego", russian: "до встречи" },
    { spanish: "Buenas tardes", russian: "Добрый день" },
    { spanish: "también", russian: "тоже" },
    { spanish: "al aire libre", russian: "на свежем воздухе" },
    { spanish: "en grupo", russian: "в группе" },
    { spanish: "en línea", russian: "онлайн" },
    { spanish: "súper", russian: "супер" },
    { spanish: "fácil", russian: "лёгкий" },
    { spanish: "difícil", russian: "трудный" },
    { spanish: "todos los días", russian: "каждый день" },
    { spanish: "perdón", russian: "извините" },
    { spanish: "mal", russian: "плохо" },
    { spanish: "con", russian: "с" },
    { spanish: "o", russian: "или" },
    { spanish: "y", russian: "и" },
    { spanish: "sí", russian: "да" },
    { spanish: "no", russian: "нет" },
    { spanish: "pero", russian: "но" },
    { spanish: "pues", russian: "ну" },
    { spanish: "en", russian: "в" },
    { spanish: "sin", russian: "без" },
    { spanish: "para", russian: "для" },
    { spanish: "gracias", russian: "спасибо" },
    { spanish: "bienvenido", russian: "добро пожаловать" },
    { spanish: "mucho gusto", russian: "приятно познакомиться" },
    { spanish: "bien", russian: "хорошо" },
    { spanish: "verdad", russian: "правда" },
    { spanish: "solamente", russian: "только" },
    { spanish: "en realidad", russian: "на самом деле" },
    { spanish: "tranquilo", russian: "спокойный" },
    { spanish: "genial", russian: "отличный" },
    { spanish: "muy bien", russian: "очень хорошо" },
    { spanish: "un poco de", russian: "немного" },
    { spanish: "por la mañana", russian: "утром" },
    { spanish: "por la noche", russian: "вечером" },
    { spanish: "qué tal", russian: "как дела" },
    { spanish: "de dónde eres", russian: "откуда ты" },
    { spanish: "encantado", russian: "рад познакомиться" },
    { spanish: "soy de", russian: "я из" },
    { spanish: "cómo yo", russian: "как я" },
    { spanish: "no crees", russian: "не думаешь" },
    { spanish: "en general", russian: "в общем" },
    { spanish: "creo que", russian: "я думаю, что" },
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
    { spanish: "allí", russian: "там" },
    { spanish: "hoy", russian: "сегодня" },
    { spanish: "mucho", russian: "много" },
    { spanish: "más", russian: "больше" },
    { spanish: "este", russian: "этот" },
    { spanish: "solo", russian: "один" },
    { spanish: "lejos", russian: "далеко" },
    { spanish: "está", russian: "находится" },
    { spanish: "porque", russian: "потому что" },
    { spanish: "honestamente", russian: "честно" },
    { spanish: "a menudo", russian: "часто" },
    { spanish: "siempre", russian: "всегда" },
    { spanish: "ya no", russian: "больше не" },
    { spanish: "mañana", russian: "завтра" },
    { spanish: "entonces", russian: "тогда" },
    { spanish: "así", russian: "так" },
    { spanish: "así es", russian: "так и есть" },
    { spanish: "un poco", russian: "немного" },
    { spanish: "disculpe", russian: "извините" },
    { spanish: "lo siento", russian: "извините" },
    { spanish: "claro", russian: "конечно" },
    { spanish: "en oferta", russian: "в продаже" },
    { spanish: "enfrente", russian: "напротив" },
    { spanish: "a la derecha", russian: "справа" },
    { spanish: "a la izquierda", russian: "слева" },
    { spanish: "en el centro", russian: "в центре" },
    { spanish: "bastante", russian: "довольно" },
    { spanish: "aquí tiene", russian: "вот, возьмите" },
    { spanish: "en serio", russian: "серьезно" },
    { spanish: "juntos", russian: "вместе" },
    { spanish: "adios", russian: "до свидания" },
    { spanish: "un minuto", russian: "минуту" },
    { spanish: "ahora mismo", russian: "прямо сейчас" },
    { spanish: "guau", russian: "вау" },
    { spanish: "ay", russian: "ой" },
    { spanish: "ah", russian: "ах" },
    { spanish: "uno", russian: "один" },
    { spanish: "dos", russian: "два" },
    { spanish: "tres", russian: "три" },
    { spanish: "cuatro", russian: "четыре" },
    { spanish: "unos", russian: "несколько" }
];

// Краткий список слов
const shortWords = [
    { spanish: "nosotros", russian: "мы" },
    { spanish: "ustedes", russian: "вы (мн.ч.)" },
    { spanish: "maleta", russian: "чемодан" },
    { spanish: "vestido", russian: "платье" },
    { spanish: "mochila", russian: "рюкзак" },
    { spanish: "tienda", russian: "магазин" },
    { spanish: "estacionamento", russian: "парковка" },
    { spanish: "escuela", russian: "школа" },
    { spanish: "abrigo", russian: "пальто" },
    { spanish: "enero", russian: "январь" },
    { spanish: "verano", russian: "лето" },
    { spanish: "país", russian: "страна" },
    { spanish: "primavera", russian: "весна" },
    { spanish: "marzo", russian: "март" },
    { spanish: "invierno", russian: "зима" },
    { spanish: "durazno", russian: "персик" },
    { spanish: "piña", russian: "ананас" },
    { spanish: "sandía", russian: "арбуз" },
    { spanish: "mercado", russian: "рынок" },
    { spanish: "bolsa", russian: "сумка" },
    { spanish: "naranja", russian: "апельсин" },
    { spanish: "edificio", russian: "здание" },
    { spanish: "apartamento", russian: "квартира" },
    { spanish: "piso", russian: "этаж" },
    { spanish: "pareja", russian: "пара" },
    { spanish: "calle", russian: "улица" },
    { spanish: "película", russian: "фильм" },
    { spanish: "pollo", russian: "курица" },
    { spanish: "equipo", russian: "команда" },
    { spanish: "entrenador", russian: "тренер" },
    { spanish: "vecino", russian: "сосед" },
    { spanish: "colegio", russian: "школа" },
    { spanish: "tarea", russian: "задание" },
    { spanish: "ejercicio", russian: "упражнение" },
    { spanish: "cuenta", russian: "счет" },
    { spanish: "queso", russian: "сыр" },
    { spanish: "carne", russian: "мясо" },
    { spanish: "huevo", russian: "яйцо" },
    { spanish: "pastel", russian: "пирог" },
    { spanish: "batido", russian: "коктейль" },
    { spanish: "bebida", russian: "напиток" },
    { spanish: "desayuno", russian: "завтрак" },
    { spanish: "precio", russian: "цена" },
    { spanish: "comida", russian: "еда" },
    { spanish: "silla", russian: "стул" },
    { spanish: "mesero", russian: "официант" },
    { spanish: "lugar", russian: "место" },
    { spanish: "postre", russian: "десерт" },
    { spanish: "salida", russian: "выход" },
    { spanish: "lago", russian: "озеро" },
    { spanish: "cinturón", russian: "ремень" },
    { spanish: "bolso", russian: "сумка" },
    { spanish: "abrigo", russian: "пальто" },
    { spanish: "traje", russian: "костюм" },
    { spanish: "camisa", russian: "рубашка" },
    { spanish: "falda", russian: "юбка" },
    { spanish: "bufanda", russian: "шарф" },
    { spanish: "collar", russian: "ожерелье" },
    { spanish: "vestido", russian: "платье" },
    { spanish: "peluquería", russian: "парикмахерская" },
    { spanish: "empresa", russian: "компания" },
    { spanish: "jefe", russian: "начальник" },
    { spanish: "abogado", russian: "адвокат" },
    { spanish: "plátano", russian: "банан" },
    { spanish: "pepino", russian: "огурец" },
    { spanish: "pimiento", russian: "перец" },
    { spanish: "zanahoria", russian: "морковь" },
    { spanish: "manzana", russian: "яблоко" },
    { spanish: "fresa", russian: "клубника" },
    { spanish: "pera", russian: "груша" },
    { spanish: "aguacate", russian: "авокадо" },
    { spanish: "lima", russian: "лайм" },
    { spanish: "almuerzo", russian: "обед" },
    { spanish: "soy", russian: "я есть" },
    { spanish: "es", russian: "есть/является" },
    { spanish: "esta", russian: "этот/эта" },
    { spanish: "no encuentro", russian: "не нахожу" },
    { spanish: "hay", russian: "есть/имеется" },
    { spanish: "oye", russian: "слушай" },
    { spanish: "hace", russian: "делает" },
    { spanish: "uso", russian: "использую" },
    { spanish: "tiene", russian: "имеет" },
    { spanish: "escuchar", russian: "слушать" },
    { spanish: "viajar", russian: "путешествовать" },
    { spanish: "pintar", russian: "рисовать" },
    { spanish: "somos", russian: "мы есть" },
    { spanish: "entrenar", russian: "тренировать" },
    { spanish: "practicar", russian: "практиковать" },
    { spanish: "nadar", russian: "плавать" },
    { spanish: "esquiar", russian: "кататься на лыжах" },
    { spanish: "caminar", russian: "гулять" },
    { spanish: "levantar", russian: "поднимать" },
    { spanish: "descansar", russian: "отдыхать" },
    { spanish: "dibujar", russian: "рисовать" },
    { spanish: "patinar", russian: "кататься на коньках" },
    { spanish: "pescar", russian: "ловить рыбу" },
    { spanish: "pasear", russian: "гулять" },
    { spanish: "empieza", russian: "начинается" },
    { spanish: "llevar", russian: "носить" },
    { spanish: "buscar", russian: "искать" },
    { spanish: "enseñar", russian: "учить" },
    { spanish: "espere", russian: "подождите" },
    { spanish: "pequeño", russian: "маленький" },
    { spanish: "perezoso", russian: "ленивый" },
    { spanish: "aburrido", russian: "скучный" },
    { spanish: "grosero", russian: "грубый" },
    { spanish: "malo", russian: "плохой" },
    { spanish: "caro", russian: "дорогой" },
    { spanish: "cómodo", russian: "удобный" },
    { spanish: "barato", russian: "дешёвый" },
    { spanish: "rojo", russian: "красный" },
    { spanish: "morado", russian: "фиолетовый" },
    { spanish: "largo", russian: "длинный" },
    { spanish: "viejo", russian: "старый" },
    { spanish: "trabajador", russian: "трудолюбивый" },
    { spanish: "fácil", russian: "лёгкий" },
    { spanish: "difícil", russian: "трудный" },
    { spanish: "todos los días", russian: "каждый день" },
    { spanish: "mal", russian: "плохо" },
    { spanish: "pues", russian: "ну" },
    { spanish: "para", russian: "для" },
    { spanish: "bienvenido", russian: "добро пожаловать" },
    { spanish: "mucho gusto", russian: "приятно познакомиться" },
    { spanish: "bien", russian: "хорошо" },
    { spanish: "solamente", russian: "только" },
    { spanish: "en realidad", russian: "на самом деле" },
    { spanish: "genial", russian: "отличный" },
    { spanish: "muy bien", russian: "очень хорошо" },
    { spanish: "un poco de", russian: "немного" },
    { spanish: "qué tal", russian: "как дела" },
    { spanish: "de dónde eres", russian: "откуда ты" },
    { spanish: "encantado", russian: "рад познакомиться" },
    { spanish: "cómo yo", russian: "как я" },
    { spanish: "no crees", russian: "не думаешь" },
    { spanish: "en general", russian: "в общем" },
    { spanish: "creo que", russian: "я думаю, что" },
    { spanish: "viento", russian: "ветер" },
    { spanish: "ahora", russian: "сейчас" },
    { spanish: "buen tiempo", russian: "хорошая погода" },
    { spanish: "cuánto cuesta", russian: "сколько стоит" },
    { spanish: "me gusta", russian: "мне нравится" },
    { spanish: "tiempo libre", russian: "свободное время" },
    { spanish: "es divertido", russian: "это весело" },
    { spanish: "qué haces", russian: "что делаешь" },
    { spanish: "cómo es", russian: "какой он" },
    { spanish: "bueno", russian: "хороший" },
    { spanish: "donde", russian: "где" },
    { spanish: "por aquí", russian: "здесь рядом" },
    { spanish: "mucho", russian: "много" },
    { spanish: "más", russian: "больше" },
    { spanish: "este", russian: "этот" },
    { spanish: "lejos", russian: "далеко" },
    { spanish: "está", russian: "находится" },
    { spanish: "hoy", russian: "сегодня" },
    { spanish: "honestamente", russian: "честно" },
    { spanish: "a menudo", russian: "часто" },
    { spanish: "siempre", russian: "всегда" },
    { spanish: "ya no", russian: "больше не" },
    { spanish: "entonces", russian: "тогда" },
    { spanish: "así", russian: "так" },
    { spanish: "así es", russian: "так и есть" },
    { spanish: "un poco", russian: "немного" },
    { spanish: "disculpe", russian: "извините" },
    { spanish: "lo siento", russian: "извините" },
    { spanish: "claro", russian: "конечно" },
    { spanish: "enfrente", russian: "напротив" },
    { spanish: "a la derecha", russian: "справа" },
    { spanish: "a la izquierda", russian: "слева" },
    { spanish: "bastante", russian: "довольно" },
        { spanish: "aquí tiene", russian: "вот, возьмите" },
        { spanish: "juntos", russian: "вместе" },
        { spanish: "un minuto", russian: "минуту" },
        { spanish: "ahora mismo", russian: "прямо сейчас" }
    ];

// Определяем currentWords и remainingWords в зависимости от параметра list
let currentWords;
let remainingWords;
const urlParams = new URLSearchParams(window.location.search);
const list = urlParams.get('list');
if (list === 'short') {
    currentWords = shortWords;
} else {
    currentWords = fullWords;
}
remainingWords = [...currentWords]; // Создаем копию выбранного списка

// Переменные состояния
let currentPairs = [];
let rightColumn = [];
let selectedSpanish = null;
let consecutiveCorrect = 0;

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
    if (!leftColumn) {
        console.error('Left column not found');
        return;
    }
    leftColumn.innerHTML = "";
    currentPairs.forEach((pair, index) => {
        const wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.dataset.index = index;
        wordDiv.textContent = pair.spanish;
        wordDiv.addEventListener("click", () => selectSpanish(index));
        if (selectedSpanish === index) {
            wordDiv.classList.add("selected");
        }
        leftColumn.appendChild(wordDiv);
    });
    console.log('Left column rendered with:', currentPairs);
}

// Отрисовка правой колонки (русские переводы)
function renderRightColumn() {
    const rightColumnDiv = document.getElementById("right-column");
    if (!rightColumnDiv) {
        console.error('Right column not found');
        return;
    }
    rightColumnDiv.innerHTML = "";
    rightColumn.forEach((russian, index) => {
        const transDiv = document.createElement("div");
        transDiv.className = "translation";
        transDiv.dataset.index = index;
        transDiv.textContent = russian;
        transDiv.addEventListener("click", () => selectRussian(index));
        rightColumnDiv.appendChild(transDiv);
    });
    console.log('Right column rendered with:', rightColumn);
}

// Выбор испанского слова
function selectSpanish(index) {
    if (selectedSpanish !== null) {
        const prev = document.querySelector(`.word[data-index="${selectedSpanish}"]`);
        if (prev) prev.classList.remove("selected");
    }
    selectedSpanish = index;
    const current = document.querySelector(`.word[data-index="${index}"]`);
    if (current) current.classList.add("selected");
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
        consecutiveCorrect++;
        updateCounter();
        setTimeout(() => {
            removeWord(selectedWord);
            if (remainingWords.length > 0) {
                replacePair(selectedSpanish);
            } else {
                showRestartOption();
            }
        }, 1000);
    } else {
        wordDiv.classList.add("incorrect");
        transDiv.classList.add("incorrect");
        consecutiveCorrect = 0;
        updateCounter();
        setTimeout(() => {
            wordDiv.classList.remove("incorrect");
            transDiv.classList.remove("incorrect");
            selectedSpanish = null;
            renderLeftColumn();
        }, 1000);
    }
}

// Удаление угаданного слова
function removeWord(word) {
    const index = remainingWords.findIndex(w => w.spanish === word.spanish);
    if (index !== -1) {
        remainingWords.splice(index, 1);
    }
    console.log('Remaining words:', remainingWords.length);
}

// Замена пары после правильного выбора
function replacePair(spanishIndex) {
    if (remainingWords.length === 0) return;

    const newPair = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    currentPairs[spanishIndex] = newPair;
    shuffle(currentPairs);
    rightColumn = currentPairs.map(pair => pair.russian);
    shuffle(rightColumn);

    renderLeftColumn();
    renderRightColumn();
    selectedSpanish = null;
}

// Показ предложения начать заново
function showRestartOption() {
    const container = document.getElementById("container");
    const counterContainer = document.getElementById("counter-container");
    container.innerHTML = `
        <p>Поздравляем! Вы угадали все слова!</p>
        <button id="restart">Начать заново</button>
    `;
    counterContainer.style.display = 'none'; // Скрываем счетчик
    document.getElementById("restart").addEventListener("click", () => {
        remainingWords = [...currentWords]; // Сброс списка
        consecutiveCorrect = 0; // Сброс счетчика
        counterContainer.style.display = 'block'; // Показываем счетчик обратно
        init(); // Перезапуск игры
    });
}

// Обновление счетчика с символом огня и оранжевым числом
function updateCounter() {
    const counterElement = document.getElementById("counter");
    if (!counterElement) {
        console.error('Counter element not found');
        return;
    }
    counterElement.textContent = consecutiveCorrect;
}

// Инициализация приложения
function init() {
    shuffle(remainingWords);
    currentPairs = remainingWords.slice(0, 4); // Начинаем с 4 слов
    rightColumn = currentPairs.map(pair => pair.russian);
    shuffle(rightColumn);

    console.log('Initial currentPairs:', currentPairs);
    console.log('Initial rightColumn:', rightColumn);

    renderLeftColumn();
    renderRightColumn();
    updateCounter();

    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
}

init();