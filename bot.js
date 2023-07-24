const Telegram_Bot = require("node-telegram-bot-api");
const {Configuration , OpenAIApi}= require("openai");

const botToken = "6310446124:AAFou5RMAWoYCogd7_QuTXEAvaGk6mdDEJg";

const aiToken = "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"


const bot = new Telegram_Bot(botToken, {polling: true})

const config = new Configuration({
    apiKey : aiToken ,
})

const openai = new OpenAIApi(config);

bot.on("message", (msg) =>{
    const chatID = msg.chat.id;

    const reply = openai.createCompletion({
        max_tokens : 100,
        model : "ada",
        prompt : msg.text,
        temperature : 0.5
    })

    bot.sendMessage(chatID , reply.data.choices[0].text)
})



