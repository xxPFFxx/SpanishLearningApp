require('dotenv').config(); // Подключаем .env
const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Настройка статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Настройка бота
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Выберите список слов:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Полный список слов', callback_data: 'full' }],
                [{ text: 'Краткий список слов', callback_data: 'short' }]
            ]
        }
    });
});

bot.action('full', (ctx) => {
    ctx.reply('Откройте приложение с полным списком слов: https://spanishlearningapp.onrender.com?list=full');
});

bot.action('short', (ctx) => {
    ctx.reply('Откройте приложение с кратким списком слов: https://spanishlearningapp.onrender.com?list=short');
});

bot.launch();

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});