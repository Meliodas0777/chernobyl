const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
  const nome = args.slice(0).join(" ");
  if (!nome) return message.reply("Me Diga O Nome Para Colocar!").then(msg => msg.delete(8000));
  message.guild.createChannel(`${nome}`, { type: 'text' })
}