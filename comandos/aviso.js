const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
  if (
    !message.member.hasPermission("ADMINISTRATOR") &&
    message.author.id !== ""
  )
    return message.reply("");
  message.delete();
  let mensagem = args.join(" ");
  const membros = message.guild.memberCount;

  let on = message.guild.members.filter(m => m.presence.status === "online");
  let npertube = message.guild.members.filter(m => m.presence.status === "dnd");
  let ausente = message.guild.members.filter(m => m.presence.status === "idle");
  let off = message.guild.members.filter(m => m.presence.status === "offline");

  on.forEach(f1 => {
    f1.send(mensagem);
  });

  npertube.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  off.forEach(f4 => {
    f4.send(mensagem);
  });

  const embed = new Discord.RichEmbed()
    .setTitle(`**GG! Estou divulgando sua mensagem!**`)
    .setDescription(
      `**Aopa, estou enviando a mensagem para:**\n\n**Onlines:** ${on.size} \n **Ausentes:** ${ausente.size} \n **Ocupados:** ${npertube.size} \n **Não enviadas:** ${off.size}`
    )
    .setColor("#000080");
  message.channel.send(embed).then(msg => msg.delete(30000));
};
