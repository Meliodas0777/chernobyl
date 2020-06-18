const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message
      .reply("Você Não Tem Permissão Para Kickar!")
      .then(msg => msg.delete(8000));
  var membro =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!membro)
    return message
      .reply("Mencione Alguém Para Ser Kick!")
      .then(msg => msg.delete(8000));
  message.delete();
  const motivo = args.slice(1).join(" ");
  if (!motivo)
    return message
      .reply("Me Diga Um Motivo Para O Kickar.")
      .then(msg => msg.delete(8000));
  message.delete();
  const kick = new Discord.RichEmbed()
    .setTitle("**---=   Usuário Kickado Com Sucesso   =---**")
    .setDescription(
      `**Staff:** ${message.author}\n **Usuário:** ${membro}\n **Motivo:** ${motivo}`
    )
    .setColor("#000080");
  message.channel.send(kick).then(msg => msg.delete(8000));
  message.delete();
  membro.kick();
};
