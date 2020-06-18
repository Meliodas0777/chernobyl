const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if ((message.author.id !== "709537486057242655"))
      return message.reply("Você Não Tem Permissão Para Isso!");
  message.delete();

  const mensagem = args.slice(0).join(" ");
  if (!mensagem)
    return message
      .reply("Me Diga Algo Para Mandar!")
      .then(msg => msg.delete(8000));
  message.delete();

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let invisible = client.users.filter(m => m.presence.status === "offline");

  const embed = new Discord.RichEmbed()
    .setTitle(`**DM Geral do Meli Meli**`)
    .setDescription(
      `**Aopa meu nobre, estou enviando a mensagem para:**\n\n **Servidores:** ${client.guilds.size}\n **Total:** ${client.users.size}\n **Onlines:** ${on.size} \n **Ausentes:** ${ausente.size} \n **Ocupados:** ${npertube.size} \n **Offline:** ${invisible.size}`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL)
    .setColor("#000080");

  message.channel.send(embed).then(msg => msg.delete(30000));
  message.delete();

  npertube.forEach(f1 => {
    f1.send(mensagem);
  });

  on.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  invisible.forEach(f4 => {
    f4.send(mensagem);
  });
};
