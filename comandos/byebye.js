const Discord = require("discord.js");
exports.run = (client, message, args, bot) => {
  if (message.author.id !== "709537486057242655")
    return message.reply("Você Não Tem Permissão Para Isso!");
  message.delete();

  var membro =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!membro)
    return message
      .reply("Mencione Alguém Para Ser Banido!")
      .then(msg => msg.delete(2000));
  message.delete();

  const motivo = args.slice(1).join(" ");
  if (!motivo)
    return message
      .reply("Me Diga Um Motivo Para O Banir.")
      .then(msg => msg.delete(2000));
  message.delete();

  const ban = new Discord.RichEmbed()
    .setTitle("---==   **Usuário Banido Com Sucesso**   ==---")
    .setDescription(
      `**Staff:** ${message.author}\n **Usuário:** ${membro}\n **Motivo:** ${motivo}`
    )
    .setColor("#000080");

  message.channel.send(ban).then(msg => msg.delete(2000));
  message.delete();
  membro.ban();
};
