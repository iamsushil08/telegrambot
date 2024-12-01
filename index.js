const Telegraf = require('telegraf');

const bot = new Telegraf('7923577174:AAEyRaVC95B8HD3t_Ck6eUEpXoFIW-RMq8A');
bot.start((ctx) => ctx.reply('Welcome to new codingluciferbot'));
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.command('sticker', (ctx) => ctx.reply('👍'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey sushil'));
bot.launch();

