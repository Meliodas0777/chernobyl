const Discord = require("discord.js");
const client = new Discord.Client();
 exports.run = async (bot, message, args) => {

     let mensagem = args.join(" ")
   message.channel.send(`${mensagem}`).then(msg => msg.delete(10000));
     if (!mensagem) return message.reply("Diga Algo Para Eu Mandar!").then(msg => msg.delete(8000));
   
 }