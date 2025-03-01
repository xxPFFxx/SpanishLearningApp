const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Выберите список слов:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Полный список слов', web_app: { url: 'https://spanishlearningapp.onrender.com?list=full' } }],
                [{ text: 'Краткий список слов', web_app: { url: 'https://spanishlearningapp.onrender.com?list=short' } }]
            ]
        }
    });
});

bot.launch();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});