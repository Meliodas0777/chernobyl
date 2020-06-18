const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var membro = message.mentions.role() | message.guild.members.get(args[0]);
  if (!membro) return message.reply("Mencione Algum Cargo Para Apagar!");
  message.delete();
  membro.delete.role(membro);
};
