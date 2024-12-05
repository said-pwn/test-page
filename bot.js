const { Telegraf, Markup } = require('telegraf');

// Укажите токен вашего бота
const bot = new Telegraf('7485151921:AAGCXgVQiVdVxkm6c2b5BzGqA6y1yoiQteI');

// URL вашего мини-приложения
const WEB_APP_URL = 'https://your-web-app-url.com';

// Команда /start
bot.start((ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы открыть мини-приложение.',
        Markup.inlineKeyboard([
            Markup.button.webApp('Открыть приложение', WEB_APP_URL),
        ])
    );
});

// Запуск бота
bot.launch();
console.log('Бот запущен!');
