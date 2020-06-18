 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#000080")
    .addField("clear comando", "Use: m!del <quantidade>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()
  
  var membro = message.mentions.members.first()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" Você não pode fazer isso!").then(msg => msg.delete(8000));
  if(!args[0]) return message.channel.send("Coloque a quantidade de mensagens porra!\n`**Use:** m!del <quantidade>`").then(msg => msg.delete(8000));
  message.channel.bulkDelete(args[0]).then(() => {
    
  const embed = new Discord.RichEmbed()
  .setTitle(`**Meli Purge**`)
  .setDescription(`**${args[0]} merdas foram apagadas!**`)
  .setColor("#000080")
  message.channel.send(embed).then(msg => msg.delete(8000));
});

}

module.exports.help = {
  name: "del"
}