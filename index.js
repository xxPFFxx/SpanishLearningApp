const express = require('express');
const path = require('path');
const app = express();

// Установка порта
const PORT = process.env.PORT || 3000;

// Путь к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});