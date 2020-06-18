const Discord = require("discord.js");
exports.run = (client, message, args, bot) => {
  const server = new Discord.RichEmbed()
    .setTitle("**Lista de Servidores**")
    .setDescription(
      `         ---=== Aninha ===---   \n\nServers: (${
        client.guilds.size
      }) \n\n${client.guilds
        .map(a => `- ${a.name} (${a.members.size} usuários)`)
        .join(",\n")}`
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
    .setColor("#000080");

  const a = client.guilds.map(a => `a.name`);

  message.channel.send(server);
};
