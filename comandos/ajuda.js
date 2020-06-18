var Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  const ajuda = new Discord.RichEmbed()
    .setTitle(`Meus comandos são:`)
    .setDescription(
      `» \`m!aviso (msg)\` - Manda um aviso a todos do seu servidor.\n` +
        `» \`m!clear (quantia)\` -Limpa a quantiadade de mensagens selecionada.\n` +
        `» \`m!ban (motivo)\` - Para Banir Algum Membro..\n` +
        `» \`m!kick (motivo)\` - Para Kickar Algum Membro..\n` +
        `» \`m!ping\` - Mostra o ping do bot.\n` +
        `» \`m!avisogeral (aviso)\` - Mostra a sua bunda, mentira só meu dono pode fazer esse comando!\n` +
        `» \`m!sdiv\` - Manda um convite meu para todos os meus membros.\n` +
        `» \`m!servidores\` - Mostra todos os meus servidores.\n` +
        `» \`m!t\` - Mostra o total de membros(on/ausente/ocupado/off) e servidores.\n` +
        `» \`m!convite\` - Mostra o meu convite.`
    )
    .setThumbnail(client.user.avatarURL)
    .setColor("#000080")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();

  message.channel.send(ajuda).then(msg => msg.delete(30000));
  message.delete();
};
